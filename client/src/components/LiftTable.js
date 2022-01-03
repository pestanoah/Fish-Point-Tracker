import React from "react";
import "../css/LiftTable.css";
function LiftTable() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 className="table-title">test</h3>
        </div>
      </div>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Weight</th>
              <th scope="col">Reps</th>
              <th scope="col">Date</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>185</td>
              <td>5</td>
              <td>11/30/2021</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LiftTable;
