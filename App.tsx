import * as React from 'react';
import './style.css';
import { useState, useReducer } from 'react';

export default function App() {
  const dishes = ['Tortas Ahogadas', 'Barbacoa', 'Tejuino'];
  const dishObject = dishes.map((dish, i) => ({ id: i, title: dish }));
  const [hidde, toggle] = useReducer((current) => !current, false);

  //This is the initial state
  const initialState = { count: 0, name: 'Aaron' };

  //This a reducer function
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'change_name':
        return { name: state.name };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <button onClick={toggle}>{hidde ? 'SHOW' : 'HIDDE'}</button>
      Count: {state.count}
      <div className="buttons">
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      </div>
    </div>
  );
}
