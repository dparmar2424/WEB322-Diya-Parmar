# Assignment 4
Overview

This project replaces fake data files with calls to a PostgreSQL database using Sequelize. The application includes CRUD operations for Orders, Users, and Products, providing a seamless integration with the chosen database.

Features:

    CRUD Operations:
        Orders: Create, Read, Update, Delete orders.
        Users: Create, Read, Update, Delete users.
        Products: Create, Read, Update, Delete products.

    Database Integration:
        PostgreSQL with Sequelize.

    Model Objects:
        Sequelize objects for Users, Products, and Orders.

    Relationships:
        Establish relationships between Order, Users, and Products.
        Bonus: Display user and product details when viewing an order.

    User Orders List:
        Bonus2: Users class contains a list of user orders in the users/:id endpoint.

Getting Started
(Prerequisites)

Make sure you have the following installed:

    Node.js
    PostgreSQL

# Installation

    Clone the repository:
 bash ~ git clone https://github.com/your-username/assignment-4.git](https://github.com/dparmar2424/WEB322-Diya-Parmar

Navigate to the project folder:

bash ~ cd WEB322-Diya-Parmar

Install dependencies:

bash ~ npm install

# Usage

How to use the project or run it locally.
bash ~ npm start or node server.js

Server Address: http://localhost:3000/

# API Endpoints

    GET /api/orders:
    Returns all orders from the database.

    GET /api/orders/:id:
    Returns a single order with user and product details by ID.

    DELETE /api/orders/:id:
    Deletes a single order and returns a JSON object with a success message.

    POST /api/orders:
    Adds a new order to the database and returns the new order as JSON.

    GET /api/users/:id:
    Returns a single user with order details by ID.

    Other Endpoints:
    Similar CRUD endpoints for users and products.
