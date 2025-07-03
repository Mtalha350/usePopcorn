import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');

  function handleClick(newCount) {
    if (newCount < 0) {
      setError('Count cannot be less than 0');
      return;
    }

    if (newCount > 10) {
      setError('Count cannot be greater than 100');
      return;
    }

    setCount(newCount);
    setError('');
  }

  return (
    <div>
      <button onClick={() => handleClick(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => handleClick(count + 1)}>+</button>
      <p style={{ color: 'red' }}>{error}</p>
    </div>
  );
}
