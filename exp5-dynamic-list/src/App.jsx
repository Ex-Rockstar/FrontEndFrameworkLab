import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);       // State to store list items
  const [inputValue, setInputValue] = useState(""); // State to store input value

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);         // Add item to the list
      setInputValue("");                        // Clear input after adding
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Dynamic List in React</h1>
      <div className="flex space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter item"
          className="border p-2 rounded"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Item
        </button>
      </div>

      <ul className="mt-4 w-full max-w-sm">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-white p-2 m-1 shadow rounded text-center"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
