import React, { useState } from "react";

const PositiveMessage = () => (
  <h2 className="text-green-600">You entered a positive number! 😊</h2>
);

const NegativeMessage = () => (
  <h2 className="text-red-600">You entered a negative number! 😢</h2>
);

const ZeroMessage = () => (
  <h2 className="text-gray-600">You entered zero! 😐</h2>
);

const ConditionComponent = () => {
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  let message;
  if (number !== "") {
    const num = Number(number);
    if (num > 0) {
      message = <PositiveMessage />;
    } else if (num < 0) {
      message = <NegativeMessage />;
    } else {
      message = <ZeroMessage />;
    }
  } else {
    message = <h2 className="text-gray-400">Please enter a number!</h2>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-xl font-bold mb-4">Enter a Number</h1>
      <input
        type="number"
        value={number}
        onChange={handleChange}
        placeholder="Enter a number"
        className="border p-2 rounded w-full mb-4"
      />
      {message}
    </div>
  );
};

export default ConditionComponent;
