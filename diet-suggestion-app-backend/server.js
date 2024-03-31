const express = require('express');
const app = express();
const port = 3000;
const db = require('./db'); // Import the database connection

// Import and use required middleware, e.g., body-parser, CORS, etc.

// Define API routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/meals', require('./routes/mealRoutes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
