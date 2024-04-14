const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose');
const Exercise = require('./exercise');
const Program = require('./program')

const PORT = process.env.PORT || 8080;
const app = express();

const mongoURI = 'mongodb+srv://admin:set@gym-app-cluster.6p4bgrx.mongodb.net/gym-app-db?retryWrites=true&w=majority&appName=gym-app-cluster';

mongoose.connect(mongoURI)
    .then(() =>{
        console.log("CONNECTED TO MONGODB")
        app.listen(PORT, () => console.log(`Server started on ${PORT}`));
    })
    .catch((error) =>{
        console.log(error);
    })

app.use(express.static(path.join(__dirname, '../client', 'dist')));
app.use(bodyParser.json());

app.get("/api/exercises", async (req, res) => {
    try {
      const exercises = await Exercise.find({}).sort({ title: 1 });
      res.json(exercises);
    } catch (error) {
      console.error('Error fetching exercises:', error);
      res.status(500).send('Internal server error');
    }
});

app.get("/api/programs", async (req, res) => {
  try {
      const programs = await Program.find();

      res.json(programs);
  } catch (error) {
      console.error("Error fetching programs:", error);
      res.status(500).json({ error: "Failed to fetch programs" });
  }
});

app.post("/api/programs", async (req, res) => {
  const { name, days } = req.body;
  try {
      const newProgram = new Program({
          name,
          days
      });

      const savedProgram = await newProgram.save();

      res.status(201).json(savedProgram);
  } catch (error) {
      // Handle errors
      console.error("Error saving program:", error);
      res.status(500).json({ error: "Failed to save program" });
  }
});