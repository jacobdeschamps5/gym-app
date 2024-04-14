// exercise.js

const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  title: String,
  target: String,
  description: String,
  type: String,
  how_to: [String],
  image_link: String,
  exercise_id: Number,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
