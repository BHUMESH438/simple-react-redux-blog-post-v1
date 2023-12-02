import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementBy, reset } from '../counterSlice';
import { useState } from 'react';

const Counter = () => {
  //useselector-higherorder fn
  const count = useSelector(state => state.counterSlice.count);
  const dispatch = useDispatch();
  const [first, setfirst] = useState(0);

  const isletter = isNaN(first);
  if (isletter) {
    alert('return a number');
    setfirst(0);
  }
  const checknumber = Number(first) || 0;

  const resetall = () => {
    setfirst(0);
    dispatch(reset());
  };
  return (
    <>
      <h1>{count}</h1>
      <input
        type='text'
        onChange={e => {
          setfirst(e.target.value);
        }}
      />
      <button onClick={() => dispatch(incrementBy(checknumber))}>addnumber</button>
      <button onClick={() => dispatch(increment())}>add</button>
      <button onClick={() => dispatch(decrement())}>minus</button>
      <button onClick={() => resetall()}>reset</button>
    </>
  );
};
export default Counter;
