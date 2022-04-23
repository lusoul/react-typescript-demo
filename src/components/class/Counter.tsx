import { Component } from "react";

type CounterProps = {
  message: string;
};
type CounterState = {
  count: number;
};

// if you don't have props:
// export class Counter extends Component<{}, CounterState> {
// if you don't have state:
// export class Counter extends Component<CounterProps> {
export class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    //setState()方法的参数可以是一个新的state也可以是一个带有prevState参数的方法
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
