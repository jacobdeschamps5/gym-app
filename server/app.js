const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
app.use(express.static(path.join(__dirname, '../client', 'dist')));

const exercises = [
    {
        id: 0,
        name: "Bench Press",
        muscle: "Chest" 
    },
    {
        id: 1,
        name: "Squat",
        muscle: "Legs" 
    },
    {
        id: 2,
        name: "Deadlift",
        muscle: "Legs" 
    },
    {
        id: 3,
        name: "Lateral Raise",
        muscle: "Back" 
    }
]

app.get("/api/exercises", (req, res) =>{
    res.send(exercises);
})

