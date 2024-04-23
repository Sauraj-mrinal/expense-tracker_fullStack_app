// models/expenseModel.js
const db = require('../config/db.config');

class Expense {
    constructor(expense) {
        this.amount = expense.amount;
        this.description = expense.description;
        this.category = expense.category;
        this.date = expense.date;
    }

    async save() {
        try {
            const [rows, fields] = await db.execute(
                'INSERT INTO expenses (amount, description, category, date) VALUES (?, ?, ?, ?)',
                [this.amount, this.description, this.category, this.date]
            );
            return rows;
        } catch (error) {
            throw error;
        }
    }

    // Implement other model methods (list, update, delete) as needed
}

module.exports = Expense;
