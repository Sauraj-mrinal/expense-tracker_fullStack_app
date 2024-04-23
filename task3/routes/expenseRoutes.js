// routes/expenseRoutes.js
const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
    // Implement authentication logic here (e.g., check session or JWT)
    // For simplicity, let's assume all requests are authenticated
    next();
};

// Create a new expense
router.post('/', isAuthenticated, expenseController.createExpense);

// Implement other routes (list, update, delete) as needed

module.exports = router;
