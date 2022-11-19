var workoutSet1 = ["20 Pushups", "1 Min Wall sit", "30 Mountain Climbers", "15 Jump Lunges", "30 Sec Side Planks (2 times, each Side)", "15 Jump Squats", "20 Burpees", "20 Tricep Dips", "30 Bicycle Crunches", "30 Walking Lunges", "30 Russian Twist", "15 Pushups", "15 Supermans", "20 Mountain Climbers", "30 Jump Jacks", "30 Sec Side Planks (2 times, each Side)", "15 Sumo Squats", "15 Burpees", "15 Floor Dips", "25 Bicycle Crunches", "15 Lateral Lunges", "15 Skaters", "20 Stationary Lunges"];




var numberOfExercises = prompt("How many Exercises, would you like to preform?");



const exercisePicker = function(numberOfExercises) {
    let picker = workoutSet1[Math.floor(Math.random() * workoutSet1.length)];
    return (picker);
   
}



let text = "";
for (let i = 0; i < numberOfExercises; i++) {
    text += exercisePicker() + "<br>";
    document.getElementById("routineSet").innerHTML = text;
}

