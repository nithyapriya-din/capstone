const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  // Add other meal-related fields here
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;
