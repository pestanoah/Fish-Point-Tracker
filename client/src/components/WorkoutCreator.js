import React from "react";
import ExerciseCreator from "./ExerciseCreator";
import NumberInput from "./NumberInput";

function WorkoutCreator() {
  const [exercises, setExercises] = React.useState([]);

  const addExercise = (event) => {
    event.preventDefault();
    setExercises(
      exercises.concat({
        id: exercises.length,
      })
    );
  };

  const renderedExercises = exercises.map((exercise, index) => {
    return <ExerciseCreator key={index} />;
  });

  return (
    <div>
      <h2>Workout creator</h2>
      <p>Day</p>
      <NumberInput />
      {renderedExercises}
      <button className="btn btn-secondary" onClick={addExercise}>
        Add Exercise
      </button>
    </div>
  );
}

export default WorkoutCreator;
