import React from "react";
import Calculator from "./Calculator";

const Functions = ({ value, setValue }) => {
  const calculatorFunc = (e) => {
    if (value === "0") {
      setValue(e.target.name);
    } else {
      setValue(value + e.target.name);
    }
  };

  const allClear = () => {
    setValue("0");
  };

  const del = () => {
    setValue(value.slice(0, -1));
  };

  const resultFunc = () => {
    try {
      const result = eval(value);
      setValue(result.toString());
    } catch (err) {
      console.log("ERROR");
    }
  };

  return (
    <div>
      <Calculator
        calculatorFunc={calculatorFunc}
        value={value}
        allClear={allClear}
        del={del}
        resultFunc={resultFunc}
      />
    </div>
  );
};

export default Functions;
