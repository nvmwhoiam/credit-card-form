const cardHolderInput = document.querySelector('[name="card_holder"]');
const cardNumberInput = document.querySelector('[name="card_number"]');
const expiryMonthInput = document.querySelector('[name="expiry_month"]');
const expiryYearInput = document.querySelector('[name="expiry_year"]');
const cvvInput = document.querySelector('[name="cvv"]');

const cardHolderName = document.querySelector('[data-view="card_holder"]');
const cardNumber = document.querySelector('[data-view="card_number"]');
const expiryMonth = document.querySelector('[data-view="expiry_month"]');
const expiryYear = document.querySelector('[data-view="expiry_year"]');
const cvv = document.querySelector('[data-view="cvv"]');

const creditCard = document.querySelector(".credit_card");

let currentBrand = '';
let isOriginalCardNumberFilled = false;
let originalCardNumber = '';
let isOriginalCvvFilled = false;
let originalCvv = '';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const numberOfYears = 10;

for (let i = 0; i < numberOfYears; i++) {
    const yearOption = document.createElement("option");
    yearOption.value = (currentYear + i).toString().slice(-2);
    yearOption.text = (currentYear + i).toString().slice(-2);

    if (i === 0) {
        yearOption.setAttribute('selected', 'selected');
    }

    expiryYearInput.appendChild(yearOption);
}

expiryMonth.innerText = currentMonth.toString().padStart(2, "0");
expiryYear.innerText = currentYear.toString().slice(-2);

function updateMonthOptions() {
    const currentInputYear = expiryYearInput.value;
    const isCurrentYear = currentInputYear === currentYear.toString().slice(-2);

    const startMonth = isCurrentYear ? currentMonth : 1;
    const endMonth = 12;

    expiryMonthInput.innerHTML = '';

    for (let i = startMonth; i <= endMonth; i++) {
        const option = document.createElement("option");
        option.value = i.toString().padStart(2, "0");
        option.text = i.toString().padStart(2, "0");

        if (expiryMonthInput.value === option.value) {
            option.setAttribute('selected', 'selected');
        }

        expiryMonthInput.appendChild(option);
    }
}

updateMonthOptions();

document.addEventListener("input", (e) => {
    const cardNumberInput = e.target.closest('[name="card_number"]');
    if (cardNumberInput) {
        // Get raw value without spaces for processing
        const rawValue = cardNumberInput.value.replace(/\s/g, '');
        const brand = creditCardValidator(rawValue);
        let maskedNumbers = '';
        let formattedValue = '';

        if (rawValue.length < 1) {
            maskedNumbers = cardNumberInput.getAttribute("placeholder");
        } else {
            // Format with spaces based on card type
            if (brand === "amex") {
                // AMEX format: 4-6-5
                formattedValue = rawValue.replace(/^(\d{0,4})(\d{0,6})(\d{0,5}).*/, '$1 $2 $3').trim();
                maskedNumbers = `${rawValue.substr(0, 4).replace(/[0-9]/g, '*')} ${rawValue.substr(4, 6).replace(/[0-9]/g, '*')} ${rawValue.substr(10, 5)}`;
                cardNumberInput.setAttribute("maxlength", "17"); // 15 digits + 2 spaces
            } else {
                // Standard format: 4-4-4-4
                formattedValue = rawValue.replace(/(\d{4})(?=\d)/g, '$1 ').substr(0, 19); // 16 digits + 3 spaces
                maskedNumbers = `${rawValue.substr(0, 4).replace(/[0-9]/g, '*')} ${rawValue.substr(4, 4).replace(/[0-9]/g, '*')} ${rawValue.substr(8, 4).replace(/[0-9]/g, '*')} ${rawValue.substr(12, 4)}`;
                cardNumberInput.setAttribute("maxlength", "19"); // 16 digits + 3 spaces
            }

            // Update the input value with proper formatting
            cardNumberInput.value = formattedValue;
            cardNumber.innerText = maskedNumbers;
        }

        if (currentBrand !== brand) {
            document.querySelector(".card_brand_logo").src = `assets/svgs/${brand}.svg`;
            currentBrand = brand;
        }
    }

    const cardHolderInput = e.target.closest('[name="card_holder"]');
    if (cardHolderInput) {
        cardHolderName.innerText = cardHolderInput.value || cardHolderInput.getAttribute("placeholder");
    }

    const cvvInput = e.target.closest('[name="cvv"]');
    if (cvvInput) {
        cvv.innerText = cvvInput.value.replace(/\d/g, "*") || "***";
    }
});

document.addEventListener("focusin", function (e) {
    const cardNumberInput = e.target.closest('[name="card_number"]');
    if (cardNumberInput) {
        if (isOriginalCardNumberFilled) {
            cardNumberInput.value = originalCardNumber;
        }
        isOriginalCardNumberFilled = false;
    }

    const cvvInput = e.target.closest('[name="cvv"]');
    if (cvvInput) {
        if (isOriginalCvvFilled) {
            cvvInput.value = originalCvv;
        }
        isOriginalCvvFilled = false;
        if (!creditCard.classList.contains("back_visible")) {
            creditCard.classList.add("back_visible");
        }
    }
});

document.addEventListener("focusout", function (e) {
    const cardNumberInput = e.target.closest('[name="card_number"]');
    if (cardNumberInput) {
        let cardNumberValue = cardNumberInput.value;
        const cardNumberLength = cardNumberInput.getAttribute("maxlength");

        if (cardNumberValue.length === Number(cardNumberLength)) {
            originalCardNumber = cardNumberValue;
            cardNumberInput.value = maskCardNumber(cardNumberValue, cardNumberLength);
            isOriginalCardNumberFilled = true;
        }
    }

    const cvvInput = e.target.closest('[name="cvv"]');
    if (cvvInput) {
        let cvvValue = cvvInput.value;

        if (cvvValue.length === 3) {
            originalCvv = cvvValue;
            cvvInput.value = maskCVV(cvvValue);
            isOriginalCvvFilled = true;
        }

        creditCard.classList.remove("back_visible");
    }
});

document.addEventListener('change', function (e) {
    const expiryMonthInput = e.target.closest('[name="expiry_month"]');
    if (expiryMonthInput) {
        expiryMonth.innerText = expiryMonthInput.value;
    }

    const expiryYearInput = e.target.closest('[name="expiry_year"]');
    if (expiryYearInput) {
        expiryYear.innerText = expiryYearInput.value;
        updateMonthOptions();
    }
});

document.addEventListener("submit", function (e) {
    e.preventDefault();

    const formElement = e.target.closest('[data-form="credit_card"]');
    if (formElement) {
        if (isOriginalCardNumberFilled && isOriginalCvvFilled) {
            const formData = {
                cardHolder: cardHolderInput.value,
                cardNumber: originalCardNumber,
                expiryMonth: expiryMonthInput.value,
                expiryYear: expiryYearInput.value,
                cvvInput: originalCvv,
            };

            console.log(formData);
        }
    }
});

function creditCardValidator(creditCardValue) {
    const regexes = {
        jcb: /^(?:2131|1800|35)[0-9]{0,}$/,
        amex: /^3[47][0-9]{0,}$/,
        diners: /^3(?:0[0-59]{1}|[689])[0-9]{0,}$/,
        visa: /^4[0-9]{0,}$/,
        mastercard: /^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$/,
        maestro: /^(5[06789]|6)[0-9]{0,}$/,
        discover: /^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$/,
    };

    creditCardValue = creditCardValue.replace(/\D/g, ''); // Remove non-digit characters

    return Object.keys(regexes).find(brand => creditCardValue.match(regexes[brand])) || "unknown";
}

function maskCardNumber(cardNumber, cardNumberLength) {
    const digits = cardNumber.replace(/\D/g, '');
    const isAmex = digits.length === 17; // AMEX has 15 digits + 2 spaces
    const visibleDigits = isAmex ? digits.slice(-5) : digits.slice(-4);

    if (cardNumberLength === 19) {
        return `**** **** **** ${visibleDigits}`;
    } else if (cardNumberLength === 17) {
        return `**** ****** *${visibleDigits}`;
    }

    const masked = digits.slice(0, -visibleDigits.length).replace(/\d/g, '*');
    return masked.replace(/(.{4})(?=.)/g, '$1 ') + ' ' + visibleDigits;
}

function maskCVV(cvv) {
    return "*".repeat(cvv.length);
}