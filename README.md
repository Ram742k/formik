# 📚 Library Management System

A comprehensive Library Management System built with React, React Router, Formik, and Yup.

## Description

The Library Management System is a web application designed to help you manage a collection of books and authors efficiently. It provides an intuitive interface for adding, viewing, and managing books and authors in your library. This application leverages modern web development technologies to ensure a seamless and responsive user experience.

### Key Features

1. **Add New Books**:
    - **📖 Title**: Enter the title of the book.
    - **✍️ Author**: Enter the name of the author.
    - **🔢 ISBN**: Enter the ISBN number of the book.
    - **📅 Publication Date**: Enter the publication date of the book.

2. **Add New Authors**:
    - **👤 Name**: Enter the author's name.
    - **🎂 Birth Date**: Enter the birth date of the author.
    - **📝 Biography**: Enter a short biography of the author.

3. **📚 Manage Books**:
    - View a list of all books in the library.
    - Each entry displays the book's title, author, ISBN, and publication date.

4. **👥 Manage Authors**:
    - View a list of all authors.
    - Each entry displays the author's name, birth date, and biography.

5. **🗺️ Navigation**:
    - A responsive navigation bar allows easy access to different sections of the application, including adding books, adding authors, managing books, and managing authors.

### Technologies Used

- **⚛️ React**: A JavaScript library for building user interfaces.
- **🛤️ React Router**: A collection of navigational components that compose declaratively with your application.
- **📄 Formik**: A library for building forms in React, with built-in support for handling form state, validation, and submission.
- **✔️ Yup**: A JavaScript schema builder for value parsing and validation.

### Benefits

- **👍 User-Friendly Interface**: The application provides a clean and simple interface, making it easy to add and manage books and authors.
- **🛡️ Form Validation**: Robust form validation ensures that all required fields are filled out correctly before submission.
- **⚡ Real-Time Feedback**: Users receive immediate feedback when they successfully add a book or author, improving the user experience.
- **📋 Organized Data Management**: The ability to view and manage lists of books and authors helps maintain an organized library system.

This project serves as an excellent example of how to build a CRUD (Create, Read, Update, Delete) application with React, demonstrating the integration of form handling, validation, and navigation.

### Project Structure

src/
│
├── components/
│   ├── AddAuthor.js
│   ├── AddBook.js
│   ├── AuthorForm.js
│   ├── BookForm.js
│   ├── Dashboard.js
│   ├── ManageAuthors.js
│   ├── ManageBooks.js
│   └── Navbar.js
│
├── App.js
├── App.css
└── index.js

## Components

### `AuthorForm` 📝
Handles the form for adding and validating author details using Formik and Yup.

### `AddAuthor` ➕👤
Contains the `AuthorForm` and handles the submission logic for adding an author. Resets the form after submission and displays an alert message.

### `BookForm` 📖
Handles the form for adding and validating book details using Formik and Yup.

### `AddBook` ➕📚
Contains the `BookForm` and handles the submission logic for adding a book. Resets the form after submission and displays an alert message.

### `ManageAuthors` 📋👥
Displays a list of authors in a table format.

### `ManageBooks` 📋📚
Displays a list of books in a table format.

### `Navbar` 🗺️
Provides navigation links to different parts of the application.

### `Dashboard` 🖥️
The main component that sets up the routes for the application and maintains the state for books and authors.


## 🌐 Demo

[Live Demo](https://your-demo-link.com)


## 🎨 Credits

This project was created by Ramkumar.