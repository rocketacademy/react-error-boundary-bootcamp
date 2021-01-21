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

class CounterErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.log("error detected! we are setting state");
    this.setState({hasError:true});
  }

  render() {
    if (this.state.hasError) {
      console.log("rendering error");
      // You can render any custom fallback UI
      return <h1>Something went wrong inside counter!!</h1>;
    }

    return this.props.children;
  }
}

export default function App() {
  console.log('App');
  return (
    <div>
      This is App.jsx
      <CounterErrorBoundary>
        <Counter/>
      </CounterErrorBoundary>
    </div>
  );
}
