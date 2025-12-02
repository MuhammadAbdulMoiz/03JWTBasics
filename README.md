# JWT Basics

A Node.js Express application demonstrating JWT (JSON Web Token) authentication fundamentals. This project includes secure user authentication with JWT token generation and verification.

## Overview

This project demonstrates best practices for implementing JWT authentication in a Node.js/Express application. It includes token creation, validation, and protected routes with comprehensive error handling.

## Features

- **JWT Authentication**: Secure token-based authentication
- **Express Framework**: RESTful API with Express.js
- **Error Handling**: Custom error classes and centralized error middleware
- **Environment Configuration**: Dotenv for environment variables
- **Async Error Handling**: Express-async-errors for clean async/await code
- **Static Files**: Serve frontend application with browser support
- **Mongoose Integration**: Database connectivity (optional/commented out)

## Prerequisites

- Node.js (v12 or higher)
- npm or yarn package manager
- MongoDB (optional - currently commented out in the configuration)

## Installation

1. **Clone or download the project**
   ```bash
   cd 03JWTBasics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory:
   ```env
   PORT=3000
   JWT_SECRET=your_secret_key_here
   JWT_LIFETIME=7d
   MongoURI=mongodb://localhost:27017/jwt-basics
   ```

## Configuration

### Environment Variables

- **PORT**: Server port (default: 3000)
- **JWT_SECRET**: Secret key for signing JWT tokens
- **JWT_LIFETIME**: Token expiration time (e.g., '7d', '24h')
- **MongoURI**: MongoDB connection string (optional)

## Usage

### Start the Development Server

```bash
npm start
```

The server will start with nodemon for automatic restart on file changes.

### Access the Application

- Frontend: `http://localhost:3000`
- API: `http://localhost:3000/api/v1`

## API Endpoints

### Authentication Routes

- **POST** `/api/v1/login` - User login (generates JWT token)
- **GET** `/api/v1/dashboard` - Protected route (requires valid JWT)

## Project Structure

```
├── app.js                      # Main application entry point
├── package.json               # Project dependencies
├── .env                       # Environment variables (create this)
├── controllers/
│   └── main.js               # Route handlers/business logic
├── routes/
│   └── main.js               # API route definitions
├── middleware/
│   ├── auth.js               # JWT authentication middleware
│   ├── error-handler.js      # Centralized error handling
│   └── not-found.js          # 404 handler
├── errors/
│   ├── custom-error.js       # Base custom error class
│   ├── bad-request.js        # 400 error class
│   ├── unauthorized.js       # 401 error class
│   └── index.js              # Error exports
├── db/
│   └── connect.js            # Database connection logic
└── public/
    ├── index.html            # Frontend HTML
    ├── browser-app.js        # Frontend JavaScript
    └── styles.css            # Frontend styles
```

## Middleware

### Authentication Middleware (`middleware/auth.js`)
Verifies JWT tokens from request headers and attaches user information to the request object.

### Error Handler Middleware (`middleware/error-handler.js`)
Catches and formats errors, returning appropriate HTTP status codes and error messages.

### Not Found Middleware (`middleware/not-found.js`)
Handles 404 errors for undefined routes.

## Error Handling

The application includes custom error classes:

- **BadRequest**: HTTP 400 - Invalid input or client error
- **Unauthorized**: HTTP 401 - Authentication failures
- **CustomError**: Base error class for custom error types

All errors are caught and handled by the centralized error handler middleware.

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^4.17.1 | Web framework |
| jsonwebtoken | ^8.5.1 | JWT token creation/verification |
| mongoose | ^5.11.10 | MongoDB ODM |
| dotenv | ^8.2.0 | Environment variable management |
| express-async-errors | ^3.1.1 | Async error handling |
| http-status-codes | ^2.1.4 | HTTP status code constants |
| nodemon | ^2.0.7 | Development server auto-reload |

## Development

### Run in Development Mode
```bash
npm start
```

### Available Scripts
- `npm start` - Start development server with nodemon

## 📚 Learning Resources

This project demonstrates:
- JWT token creation and verification
- Protected route implementation
- Error handling patterns
- Middleware usage in Express
- Async/await with express-async-errors
- Environment configuration best practices


**Note**: This is an educational project for learning JWT authentication fundamentals. For production use, implement additional security measures such as:
- HTTPS encryption
- Rate limiting
- CORS configuration
- Input validation and sanitization
- Token refresh mechanisms
- Secure password hashing
