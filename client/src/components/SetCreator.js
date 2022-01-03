import React from "react";
import NumberInput from "./NumberInput";

function SetCreator() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <NumberInput min={0} max={2000} />
        </div>
        <div className="col">
          <NumberInput min={1} max={100} />
        </div>
      </div>
    </div>
  );
}

export default SetCreator;
