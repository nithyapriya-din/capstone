const express = require('express');
const router = express.Router();
const mealController = require('../controllers/mealController');
const Meal = require('../models/mealModel');
// Define meal-related routes
router.get('/meals', mealController.getAllMeals);
router.get('/meals/:mealId', mealController.getMealById);
router.post('/meals', mealController.createMeal);
router.put('/meals/:mealId', mealController.updateMeal);
router.delete('/meals/:mealId', mealController.deleteMeal);

module.exports = router;
