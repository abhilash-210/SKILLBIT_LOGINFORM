# Project Report: SKILLBIT_LOGINFORM

## Project Overview
This project is a simple web-based login and registration form application. It provides users with the ability to register an account using their email and password, and subsequently log in using those credentials.

## Main Files and Their Roles
- **index.html**: Contains the HTML structure for the login and registration forms. It includes two forms that toggle visibility for user interaction.
- **style.css**: Provides the styling for the forms and overall page layout to ensure a user-friendly interface.
- **script.js**: Implements the client-side JavaScript logic for form toggling, input validation, and user authentication using the browser's localStorage.

## Functionality
- **Registration**: Users can register by providing a valid email and a password (minimum 6 characters). Password confirmation is required. The registration data is stored in localStorage.
- **Login**: Registered users can log in by entering their email and password. The credentials are validated against the stored data in localStorage.
- **Form Validation**: Both forms include client-side validation for email format, password length, and password confirmation matching.
- **Error Handling**: Validation errors and authentication errors are displayed inline to guide the user.

## Notes
- The project currently uses localStorage for user data storage, which is suitable for demonstration purposes but not secure for production use.
- The `auth` folder files referenced in the editor tabs do not exist in the project directory.

## Conclusion
This project demonstrates a basic client-side login and registration system using HTML, CSS, and JavaScript. It is suitable for learning purposes and can be extended with backend integration for real-world applications.
