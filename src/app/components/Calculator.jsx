import React from "react";

const Calculator = ({ calculatorFunc, value, allClear, del, resultFunc }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-t from-[#0a0a0a] to-[#3a4452] h-[100vh]">
      <div className="text-white rounded-2xl shadow-gray-600 shadow-lg border-2 border-[#717377] flex flex-col items-center justify-center gap-6 pb-12 pt-12">
        <div>
          <input
            value={value}
            type="text"
            className="text-3xl font-bold w-full py-6 bg-transparent shadow-xl rounded-lg outline-none text-right pr-4"
          />
        </div>

        <div className="text-green-400 flex gap-6">
          <button className="buttons" onClick={allClear}>
            AC
          </button>
          <button className="buttons" onClick={del}>
            DEL
          </button>
          <button className="buttons" onClick={calculatorFunc} name="%">
            %
          </button>
          <button className="buttons" onClick={calculatorFunc} name="/">
            /
          </button>
        </div>

        <div className="flex gap-6">
          <button className="buttons" onClick={calculatorFunc} name="7">
            7
          </button>
          <button className="buttons" onClick={calculatorFunc} name="8">
            8
          </button>
          <button className="buttons" onClick={calculatorFunc} name="9">
            9
          </button>
          <button
            className="buttons text-green-400"
            onClick={calculatorFunc}
            name="*"
          >
            *
          </button>
        </div>

        <div className="flex gap-6">
          <button className="buttons" onClick={calculatorFunc} name="4">
            4
          </button>
          <button className="buttons" onClick={calculatorFunc} name="5">
            5
          </button>
          <button className="buttons" onClick={calculatorFunc} name="6">
            6
          </button>
          <button
            className="buttons text-green-400"
            onClick={calculatorFunc}
            name="-"
          >
            -
          </button>
        </div>

        <div className="flex gap-6">
          <button className="buttons" onClick={calculatorFunc} name="1">
            1
          </button>
          <button className="buttons" onClick={calculatorFunc} name="2">
            2
          </button>
          <button className="buttons" onClick={calculatorFunc} name="3">
            3
          </button>
          <button
            className="buttons text-green-400"
            onClick={calculatorFunc}
            name="+"
          >
            +
          </button>
        </div>

        <div className="flex gap-6">
          <button className="buttons" onClick={calculatorFunc} name="00">
            00
          </button>
          <button className="buttons" onClick={calculatorFunc} name="0">
            0
          </button>
          <button className="buttons" onClick={calculatorFunc} name=".">
            .
          </button>
          <button
            onClick={resultFunc}
            className="w-[70px] h-[70px] bg-amber-600 rounded-full shadow-lg shadow-gray-500 text-3xl"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
