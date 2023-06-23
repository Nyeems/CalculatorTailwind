import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState('0');

  const handleClick = (value) => {
    setResult((prevResult) => {
      if (value === 'AC') return '0';

      if (prevResult === '0') {
        return value;
      } else {
        return prevResult + value;
      }
    });
  };

  const calculateResult = () => {
    try {
      setResult((prevResult) => eval(prevResult).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-64 p-4 border border-gray-300 rounded-md bg-white">
        <div className="bg-gray-200 border-4 border-gray-300 rounded-md p-4 text-right text-18 mb-4 overflow-hidden">
          {result}
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button className="p-2 text-14 rounded-md border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-500 active:bg-gray-700 " onClick={() => handleClick('7')}>
            7
          </button>
          <button className="p-2 text-14 rounded-md border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-500 active:bg-gray-700" onClick={() => handleClick('8')}>
            8
          </button>
          <button className="p-2 text-14 rounded-md border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-500 active:bg-gray-700" onClick={() => handleClick('9')}>
            9
          </button>
          <button className="p-2 text-14 rounded-md border-2 border-gray-400 bg-gray-100 cursor-pointer hover:bg-gray-500 active:bg-gray-700" onClick={() => handleClick('/')}>
            /
          </button>
          <button className="p-2 text-14 rounded-md border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-500 active:bg-gray-700" onClick={() => handleClick('4')}>
            4
          </button>
          <button className="p-2 text-14 rounded-md border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-500 active:bg-gray-700" onClick={() => handleClick('5')}>
            5
          </button>
          <button className="p-2 text-14 rounded-md border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-500 active:bg-gray-700" onClick={() => handleClick('6')}>
            6
          </button>
          <button className="p-2 text-14 rounded-md border-2 border-gray-400 bg-gray-100 cursor-pointer hover:bg-gray-500 active:bg-gray-700" onClick={() => handleClick('*')}>
            *
          </button>
          <button className="p-2 text-14 rounded-md border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-500 active:bg-gray-700" onClick={() => handleClick('1')}>
            1
          </button>
          <button className="p-2 text-14 rounded-md border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-500 active:bg-gray-700" onClick={() => handleClick('2')}>
            2
          </button>
          <button className="p-2 text-14 rounded-md border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-500 active:bg-gray-700" onClick={() => handleClick('3')}>
            3
          </button>
          <button className="p-2 text-14 rounded-md border-2 border-gray-400 bg-gray-100 cursor-pointer hover:bg-gray-500 active:bg-gray-700" onClick={() => handleClick('-')}>
            -
          </button>
          <button className="p-2 text-14 rounded-md border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-500 active:bg-gray-700" onClick={() => handleClick('0')}>
            0
          </button>
          <button className="p-2 text-14 rounded-md border-2 border-gray-400 bg-gray-100 cursor-pointer hover:bg-gray-500 active:bg-gray-700" onClick={() => handleClick('.')}>
            .
          </button>
          <button className="p-2 text-14 rounded-md border-2 border-gray-400 bg-gray-100 cursor-pointer hover:bg-gray-500 active:bg-gray-700" onClick={() => calculateResult()}>
            =
          </button>
          <button className="p-2 text-14 rounded-md border-2 border-gray-400 bg-gray-100 cursor-pointer hover:bg-gray-500 active:bg-gray-700" onClick={() => handleClick('+')}>
            +
          </button>
          <button className="p-2 text-14 rounded-md border-2 border-gray-400 bg-gray-100 cursor-pointer hover:bg-gray-500 active:bg-gray-700 " onClick={() => handleClick('AC')}>
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
