import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState(""); // Stores the calculator input

  // Handle button clicks to update the display
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear the display
  const handleClear = () => {
    setInput("");
  };

  // Perform the calculation safely
  const handleCalculate = () => {
    try {
      if (input.trim() === "") return;
      const result = eval(input); // Temporary use of eval() (better alternatives exist)
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      {/* Display Input */}
      <input
        type="text"
        value={input || "0"} // Show input or "0" if empty
        readOnly
        className="display"
      />

      {/* Buttons */}
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((item) => (
          <button
            key={item}
            onClick={() => (item === "=" ? handleCalculate() : handleClick(item))}
            className={`btn ${item === "=" ? "equals" : ""}`}
          >
            {item}
          </button>
        ))}
        <button onClick={handleClear} className="btn clear">C</button>
      </div>

      {/* Styles */}
      <style jsx>{`
        .calculator {
          width: 300px;
          margin: 50px auto;
          text-align: center;
          border: 2px solid #333;
          padding: 20px;
          border-radius: 20px;
          background: #f4f4f4;
        }
        .display {
          width: 100%;
          height: 60px;
          font-size: 28px;
          text-align: right;
          margin-bottom: 20px;
          padding: 10px;
          border: 2px solid #ccc;
          border-radius: 10px;
          
        }
        .buttons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        .btn {
          padding: 20px;
          font-size: 20px;
          background: #e6e6e6;
          border: none;
          border-radius: 10px;
          cursor: pointer;
        }
        .btn:hover {
          background: #d4d4d4;
        }
        .equals {
          
          background: #4caf50;
          color: white;
        }
        .clear {
          grid-column: span 4;
          background: #ff4444;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Calculator;
