import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      title: "From counter component",
    };
  }

  countTimer;
  static getDerivedStateFromProps(props, state) {
    // manipulate state based on parent props
    console.log("AppClass: getDerivedStateFromProps");

    return {
      title: props.appTitle,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("CounterClass : shouldComponentUpdate");

    return true;
  }

  componentDidUpdate() {
    console.log("CounterClass: componentDidUpdate");
    this.countTimer = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }
  componentWillUnmount() {
    console.log("CounterClass: componentWillUnmount");
    clearInterval(this.countTimer);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // manual DOM selection, update
    console.log("CounterClass: getSnapshotBeforeUpdate");
    return null;
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  handleReset = () => {
    this.setState({
      count: this.state.count - this.state.count,
    });
  };
  render() {
    console.log("CounterClass: Render");
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button
          onClick={this.handleDecrement}
          disabled={this.state.count <= 0 ? true : false}
        >
          Decrement
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default CounterClass;
