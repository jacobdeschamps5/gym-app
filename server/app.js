const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Exercise = require('./exercise');

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

app.get("/api/exercises", async (req, res) => {
    try {
      const exercises = await Exercise.find({}).sort({ title: 1 });
      res.json(exercises);
    } catch (error) {
      console.error('Error fetching exercises:', error);
      res.status(500).send('Internal server error');
    }
});
