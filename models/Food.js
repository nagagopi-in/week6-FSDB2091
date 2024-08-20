const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  foodGroup: { type: String, required: true },
  description: { type: String },
  nutritionalInfo: {
    calories: { type: Number },
    macronutrients: {
      protein: { type: Number },
      fats: { type: Number },
      carbohydrates: { type: Number },
    },
    micronutrients: {
      vitamins: { type: Map, of: Number },
      minerals: { type: Map, of: Number },
    },
    fiber: { type: Number },
    sodium: { type: Number },
    cholesterol: { type: Number },
  },
  servingSize: { type: String },
  allergens: [String],
  ingredients: [String],
  preparationMethods: { type: String },
  certifications: [String],
  countryOfOrigin: { type: String },
  brand: { type: String },
  dietaryRestrictions: [String],
  healthBenefits: { type: String },
  bestPractices: { type: String },
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
