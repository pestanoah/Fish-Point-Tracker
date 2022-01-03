import React from "react";

function Dropdown(props) {
  /**
   * options - name of the options and a value for each option
   */
  const { options } = props;
  const renderedOptions = options.map((option, index) => {
    return (
      <option value={option.value} key={index}>
        {option.name}
      </option>
    );
  });
  return (
    <div>
      <select className="form-select">{renderedOptions}</select>
    </div>
  );
}

export default Dropdown;
