const express = require('express');
const path = require('path');


const PORT = process.env.PORT || 8080;
const app = express();
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
app.use(express.static(path.join(__dirname, '../client', 'dist')));

const workouts = [
    {
        name: "Bench",
        muscle: "Chest" 
    },
    {
        name: "Squat",
        muscle: "Legs" 
    }
]

app.get("/api/workouts", (req, res) =>{
    res.send(workouts);
})

