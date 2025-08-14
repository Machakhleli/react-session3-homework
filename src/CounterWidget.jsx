import React, { useState } from "react";

function CounterWidget() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-6 bg-gray-200 rounded-lg shadow-md flex flex-col items-center justify-center max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">დინამიური მრიცხველი</h3>
      <div className="flex space-x-2 justify-center">
        <button
          className="bg-blue-600 rounded-xl p-2"
          onClick={() => setCount(count + 1)}
        >
          გაზრდა
        </button>
        <button
          className="p-2 bg-amber-600 rounded-xl"
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
        >
          შემცირება
        </button>
        <button
          className="p-2 bg-lime-600 rounded-xl"
          onClick={() => setCount(0)}
        >
          გადატვირთვა
        </button>
      </div>
      <p className="w-xs mt-4 p-2 bg-purple-400 rounded-lg">
        მრიცხველის მნიშვნელობა: {count}
      </p>
    </div>
  );
}

export default CounterWidget;
