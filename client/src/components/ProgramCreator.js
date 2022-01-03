import React, { useEffect } from "react";
import WorkoutCreator from "./WorkoutCreator";
function ProgramCreator() {
  const [exercises, setExercises] = React.useState([]);

  useEffect(async () => {
    console.log("useEffect called");
    // make the api call to get the exercises
    const data = await fetch(process.env.API_BASE_URL + "/exercises");
  }, []);

  return (
    <div>
      <h1>Program Creator</h1>
      <label htmlFor="programName">Program Name</label>
      <input id="programName" type="text" placeholder="Program Name" />
      <label htmlFor="programDescription">Program Description</label>
      <input
        id="programDescription"
        type="text"
        placeholder="Workout Description"
      />
      <WorkoutCreator />
      <button className="btn btn-primary">Create Program</button>
    </div>
  );
}

export default ProgramCreator;
