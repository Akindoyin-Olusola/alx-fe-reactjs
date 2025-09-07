import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '10px', borderRadius: '5px', maxWidth: '200px' }}>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ margin: '5px' }}>Reset</button>
    </div>
  );
};

export default Counter;
