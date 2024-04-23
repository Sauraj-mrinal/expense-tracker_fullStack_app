// controllers/expenseController.js
const Expense = require('../models/expenseModel');

// Controller function to create a new expense
exports.createExpense = async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).send({ message: "Expense created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
};

// Implement other controller methods (list, update, delete) as needed
