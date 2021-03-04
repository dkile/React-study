import React, { useReducer } from "react";

/*class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>fixed : {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState((prevState, props) => {
              console.log("once clicked");
              return {
                number: prevState.number + 1,
              };
            });
            this.setState((prevState, props) => {
              console.log("twice clicked");
              return {
                number: prevState.number + 1,
              };
            });
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("now setState called");
                console.log(this.state);
              }
            );
          }}
        >
          {" "}
          +1
        </button>
      </div>
    );
  }
}*/

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
