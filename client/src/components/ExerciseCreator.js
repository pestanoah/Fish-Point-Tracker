import React from "react";
import Dropdown from "./Dropdown";
import SetCreator from "./SetCreator";

function ExerciseCreator() {
  const [sets, setSets] = React.useState([]);

  const removeSet = (event) => {
    event.preventDefault();
    console.log(event.target.getAttribute("setid"));
    console.log(sets);
    setSets(
      sets.filter((set, index) => {
        console.log("setid", set.id === event.target.getAttribute("setid"));
        console.log("setid", set.id);
        return set.id !== event.target.getAttribute("setid");
      })
    );
  };

  const renderedSets = sets.map((set, index) => {
    return (
      <div className="container" key={index}>
        <SetCreator />
        {/* <button setid={set.id} onClick={removeSet}>
          Remove
        </button> */}
      </div>
    );
  });

  const addSet = (event) => {
    event.preventDefault();
    setSets(
      sets.concat({
        id: sets.length,
      })
    );
  };

  return (
    <div>
      <h3>Exercise Creator</h3>
      <Dropdown
        options={[
          { name: "Bench", value: 1 },
          { name: "Squat", value: 2 },
        ]}
      />
      {renderedSets}
      <button className="btn btn-secondary btn-sm" onClick={addSet}>
        Add Set
      </button>
    </div>
  );
}

export default ExerciseCreator;
