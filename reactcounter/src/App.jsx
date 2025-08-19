import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen flex items-center justify-center  font-sans">
      <div className="rounded-xl  p-12 text-center max-w-xs w-full">
        <h1 className="text-2xl font-semibold mb-8 text-gray-900 select-none">AlfidoTech React Counter App</h1>
        <div className="text-7xl font-extrabold mb-12 text-black select-none">{count}</div>
        <div className="flex justify-center gap-4">
          <button
            onClick={decrement}
            className="bg-blue-100 text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-md transition hover:bg-blue-200 focus:outline-none"
          >
            Decrease
          </button>
          <button
            onClick={reset}
            className="bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-md transition hover:bg-gray-400 focus:outline-none"
          >
            Reset
          </button>
          <button
            onClick={increment}
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition hover:bg-blue-700 focus:outline-none"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
