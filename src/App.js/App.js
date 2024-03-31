import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UserProfile from './components/UserProfile';
import MealPlanner from './components/MealPlanner';
import NutritionInfo from './components/NutritionInfo';
import DietSuggestions from './components/DietSuggestions';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="main-section">
          <UserProfile />
          <MealPlanner />
          <NutritionInfo />
          <DietSuggestions />
        </div>
      </div>
    </div>
  );
}

export default App;
