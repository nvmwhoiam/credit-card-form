# Credit Card Form App

A secure, responsive credit card form with real-time validation, card detection, and mobile-friendly UI. No dependencies, 100% client-side, MIT-licensed.

## Features

- **Credit Card Validation**: The app validates credit card numbers using regular expressions to detect common card brands such as Visa, MasterCard, American Express, and others.
- **Real-time Formatting**: The card number is formatted as the user types, ensuring the information is easy to read and secure by masking sensitive digits.
- **Expiration Date Selection**: Convenient dropdown menus for selecting the card's expiration month and year, with automated year handling for the next 10 years.
- **Masked CVV Input**: The CVV is entered and displayed as asterisks for security purposes.
- **Dynamic Card Brand Recognition**: The app recognizes the credit card brand (e.g., Visa, MasterCard) based on the card number and displays the appropriate logo.
- **Masked Input for Security**: After the user inputs their CVV and card number, the values are masked for privacy and can be clicked to reveal the original numbers.
- **Form Submission**: When the user submits the form, the app collects and can log the data, ready for integration with backend services.
- **Automatic Expiry Date Adjustment**: The expiry year is set for the next 10 years, and the month dropdown is updated based on the current date to prevent expired selections.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/nvmwhoiam/credit-card-form.git
   ```
2. Navigate to the project directory:
   ```sh
   cd credit-card-form
   ```
3. Open `index.html` in your web browser to view the application.

## Usage

1. Open the app in your web browser.

2. Enter the credit card information in the input fields:

   - **Card Holder**: Enter the cardholder's name.
   - **Card Number**: Enter the 16-digit credit card number.
   - **Expiration Date**: Select the card’s expiration month and year.
   - **CVV**: Enter the CVV from the back of the card.

3. As you enter the information:

   - The card number will be formatted automatically, and the card brand will be recognized.
   - The expiration month will update based on the current date.
   - CVV and card number will be masked for security.

4. Press the "Save" button to submit the form. You can customize this functionality for backend integration or logging.

## Technical Improvements

1. Card Number Input Improvements

- Dynamic spacing: Fixed spacing in card number input for better readability and formatting
- Smart masking:
  - When input loses focus:
    - Shows only last 4 digits for most card types (Visa, Mastercard, etc.)
    - Shows last 5 digits for Amex cards (following industry standards)
  - When input gains focus:
    - Shows full card number as entered by user
    - Maintains proper spacing for the card type

2. Expiration Date Validation

   - Month validation:

     - If current year is selected:
     - Only shows months from current month onward - Example: In May 2023, shows only months 5-12 (May-December)

   - For future years:

     - Shows all 12 months

   - Year validation:

     - Only shows current and future years
     - Automatically adjusts month options based on selected year

3. Security Improvements

   - Reduced sensitive data exposure:
     - Automatic masking when field not active
     - Only shows minimum required digits for verification
     - Prevents shoulder surfing of full card numbers

4. User Experience Benefits
   - More intuitive input formatting
   - Prevents invalid expiration date entries
   - Better security without sacrificing usability
   - Clear visual feedback during interaction

These improvements follow PCI compliance best practices while maintaining a smooth user experience for payment processing.

## Screenshots

![Alt text](https://sadevworks.com/assets/img/projects/credit-card-form.png "a title")

## Live Demo

[Live Demo](https://sadevworks.com/demo/credit-card-form)

## Contact

If you have any questions or need assistance, please do not hesitate to reach out. I apologize if any part of this setup is not clear; this is my first major project, and I am putting in continuous effort to improve it. Feel free to contact me at [info@sadevworks.com](mailto:info@sadevworks.com) or open an issue on the [GitHub Repository](https://github.com/nvmwhoiam/credit-card-form).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Author

- Email: [info@sadevworks.com](mailto:info@sadevworks.com)
- Website: [sadevworks.com](https://sadevworks.com)
- GitHub: [@nvmwhoiam](https://github.com/nvmwhoiam/)
