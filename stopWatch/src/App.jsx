import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="max-w-md mx-auto p-4 pt-6">
      <h1 className="text-3xl font-bold mb-4 px-20">Stop Watch</h1>
      <div className="flex justify-center mb-4">
        <span className="text-2xl">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span className="text-2xl">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span className="text-2xl">{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="flex justify-center mb-4">
        {running ? (
          <button
            onClick={() => setRunning(false)}
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Stop
          </button>
        ) : (
          <button
            onClick={() => setRunning(true)}
            type="button"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Start
          </button>
        )}
        <button
          onClick={() => setTime(0)}
          type="button"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;