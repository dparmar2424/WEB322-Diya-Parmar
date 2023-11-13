Express CRUD API

Introduction:

This project represents an Express application that showcases CRUD operations through RESTful API endpoints for managing users and products. Additionally, it incorporates fundamental user authentication.

Setup:

Clone the repository:

```bash
git clone https://github.com/dparmar2424/WEB322-Diya-Parmar.git
```

Navigate to the project directory:

```bash
cd WEB322-Diya-Parmar
```

Install dependencies:

```bash
npm install
```

Usage:

Start the server:

```bash
node server.js
```

The application will be accessible at http://localhost:3000.

API Endpoints:

Users Endpoints:

- GET /api/users: Retrieves all users.
- GET /api/users/:id: Retrieves a specific user by ID.
- DELETE /api/users/:id: Removes a user by ID.
- POST /api/users: Adds a new user.

Products Endpoints:

- GET /api/products: Retrieves all products.
- GET /api/products/:id: Retrieves a specific product by ID.
- DELETE /api/products/:id: Removes a product by ID.
- POST /api/products: Adds a new product.

Authentication:

- POST /api/login: Accepts email and password in the request body. Returns { isAuthenticated: true } if the user exists and is an admin; otherwise, returns a 401 status with { isAuthenticated: false }.
(Note: You can use the credentials of any existing record in the fakeUsers data file to log in; simply input their details on the page.)
