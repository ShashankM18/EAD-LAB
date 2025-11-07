import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div>
      <h1>{seconds} seconds</h1>
      <button onClick={() => setActive(true)}>Start</button>
      <button onClick={() => setActive(false)}>Stop</button>
      <button onClick={() => { setActive(false); setSeconds(0); }}>Reset</button>
    </div>
  );
}

export default Timer;
