import React, {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = (event) => {
    console.log(`current value of count is: ${count}`);

    // call the hooks function when we want to manipulate the DOMM.
    setCount(count + 1);
  };

  console.log('counter function component');
  if( count > 3 ){

    // make a runtime rendering error, assign the click event to something else
    incrementCount = <h1>This assignment causes error!!!! :(</h1>;
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
}

export default function App() {
  console.log('App');
  return (
    <div>
      This is App.jsx
      <Counter/>
    </div>
  );
}
