# User Management Dashboard

## Overview
This project is a **User Management Dashboard** built using **React.js**. It provides a user interface to view, add, edit, and delete user details. The application communicates with a backend API to manage the users.

## Features
- **View Users:** Display a list of users with their details (first name, last name, email, and department).
- **Add User:** Create a new user by submitting a form.
- **Edit User:** Edit the details of an existing user.
- **Delete User:** Remove a user from the system.
- **Error Handling:** Displays error messages for failed operations.
- **Loader:** Displays a loading state while data is being fetched.

## Tech Stack
- **React.js**: Frontend library for building the user interface.
- **React Router**: For routing between different pages (View, Edit, Add).
- **Fetch API**: To interact with the backend API.
- **CSS**: For styling the components.

## API Endpoints
- **GET /users**: Fetch all users.
- **POST /users/add**: Create a new user.
- **PUT /user/{id}**: Update a user by their `id`.
- **DELETE /user/{id}**: Delete a user by their `id`.

## Installation

### Clone the repository:
```bash
git clone <repository_url>
```

### Navigate to the project directory:
```bash
cd <project_directory>
```

### Install the dependencies:
```bash
npm install
```
### Start the development server:
```bash
npm start
```
This will run the application locally at http://localhost:3000.

## Usage
- 1. **View Users:** Upon opening the dashboard, users' information is fetched and displayed.

- 2. **Add User:** Click the "Add User" button to navigate to a form for creating a new user.

- 3. **Edit User:** Click the "Edit" button next to a user's name to edit their details.

- 4. **Delete User:** Click the "Delete" button to remove a user from the system.
