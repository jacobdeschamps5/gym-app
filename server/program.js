const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: String,
    sets: Number,
    reps: Number
});

const programSchema = new mongoose.Schema({
    name: String,
    days: {
        Sunday: [exerciseSchema],
        Monday: [exerciseSchema],
        Tuesday: [exerciseSchema],
        Wednesday: [exerciseSchema],
        Thursday: [exerciseSchema],
        Friday: [exerciseSchema],
        Saturday: [exerciseSchema]
    },
    isActive: Boolean
});

const Program = mongoose.model('Program', programSchema);

module.exports = Program;