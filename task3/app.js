// app.js

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./routes/authRoutes'); // Import authRoutes
const expenseRoutes = require('./routes/expenseRoutes');
const db = require('./db.config');

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', authRoutes); // Use authRoutes for login
app.use('/expenses', expenseRoutes);

// Start server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Test database connection
db.execute('SELECT 1')
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.error('Database connection failed:', err));
