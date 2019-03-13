import React, { useState, useEffect } from 'react';
import { store } from './SomeStore';

export const AppHooks = props => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const handleStoreUpdate = () => handleIncrement();
    store.subscribe(handleStoreUpdate);
    return () => store.unsubscribe(handleStoreUpdate);
  });
  function handleIncrement() {
    setCount(count + 1);
  }
  return <article>
    <h1>Application with Hooks</h1>
    <div>Count: {count}</div>
    <button onClick={handleIncrement}>Increment</button>
  </article>;
};
