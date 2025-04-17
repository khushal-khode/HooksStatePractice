import React from 'react';
import {useHookstate } from '@hookstate/core';

export const App = () => {
  const count = useHookstate(0);
  return (
    <div className="body_cont">
      <div className="header">
        <h1>Practicing React HookState</h1>
      </div>
      <div className="body">
        {'Count: '}
        <span className="count">{count.get()}</span>
      </div>
      <div className="footer">
        <button onClick={() => count.set(p => p + 1)}>Increment</button>
        <button onClick={() => count.set(p => p - 1)}>Decrement</button>
        <button onClick={() => count.set(0)}>Reset</button>
      </div>
    </div>
  );
};
