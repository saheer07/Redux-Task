import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/slices/counterSlice';

const CounterComponent = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Count: {count}{count === 0 && <p>Minimum limit reached</p>}
      </h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
};

export default CounterComponent;
