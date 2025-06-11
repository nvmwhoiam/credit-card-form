# Credit Card Form App

## Overview

The **Credit Card Form App** is a web application designed for users to easily input and validate credit card information. It provides a visually appealing and user-friendly interface to input and securely view details such as the card number, cardholder name, expiration date, and CVV.

Built with HTML, CSS, and JavaScript, this app ensures a smooth and secure experience for entering sensitive credit card details.

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

To run the Credit Card Form App locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/nvmwhoiam/credit-card-form.git
   ```

2. Open the `index.html` file in your browser.

3. Optionally, you can serve the app using a local development server for a more dynamic experience.

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

## Customization

You can easily customize the app's appearance and behavior by editing the following files:

- **JavaScript**: Modify `assets/js/index.js` for logic changes or additional form handling.
- **CSS**: Update `assets/css/index.css` to change the look and feel of the app.

Feel free to adapt this app to your specific needs!

## Acknowledgments

- Credit card validation and detection are based on widely used regular expressions found in various online resources.

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
