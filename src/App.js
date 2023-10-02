import "./App.css";
import { useSpring, animated } from "react-spring";
import React from "react";
import AnimatedNumbers from "react-animated-numbers";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function App() {
  const [num, setNum] = React.useState(331231);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Number n={100} />
        </h1>
      </header>
      <hr />
      <hr />
      <header className="App-header">
        <div className="container">
          <AnimatedNumbers
            includeComma
            animateToNumber={num}
            fontStyle={{ fontSize: 40 }}
            locale="en-US"
            configs={[
              { mass: 1, tension: 220, friction: 100 },
              { mass: 1, tension: 180, friction: 130 },
              { mass: 1, tension: 280, friction: 90 },
              { mass: 1, tension: 180, friction: 135 },
              { mass: 1, tension: 260, friction: 100 },
              { mass: 1, tension: 210, friction: 180 },
            ]}
          ></AnimatedNumbers>
          <hr />
          <hr />
          <AnimatedNumbers
            animateToNumber={num}
            fontStyle={{ fontSize: 32 }}
            configs={(number, index) => {
              return { mass: 1, tension: 230 * (index + 1), friction: 140 };
            }}
          ></AnimatedNumbers>
          <div>
            <button onClick={() => setNum((state) => state + 31234)}>+</button>
            <button onClick={() => setNum((state) => state - 31234)}>-</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
