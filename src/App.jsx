import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Counter from './CounterComponent';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Counter />} />
    </Routes>
  );
};

export default App;
