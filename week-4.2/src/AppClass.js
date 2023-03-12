import React, { Component } from "react";
import CounterClass from "./CounterClass";

class AppClass extends Component {
  constructor(props) {
    // initialization
    // state declaration
    super(props);

    this.state = {
      showCounter: true,
      title: "Hello from AppClass",
    };
    console.log("AppClass : Constructor");
  }

  static getDerivedStateFromProps() {
    // manipulate state based on parent props
    console.log("AppClass: getDerivedStateFromProps");

    return null;
  }

  componentDidMount() {
    // API request
    // side effects (accessing DOM , Subscriptions)
    console.log("AppClass: componentDidMount");
  }

  toggleCounter = () => {
    this.setState({
      showCounter: !this.state.showCounter,
    });
  };
  render() {
    // showing the output

    const { showCounter, title } = this.state;
    console.log("AppClass: Render");
    return (
      <div>
        <h1>Counter App</h1>
        <button onClick={this.toggleCounter}>Toggle Counter</button>
        {/* {showCounter && <CounterClass />} */}
        {showCounter ? (
          <CounterClass appTitle={title} />
        ) : (
          <h3>Hidden Counter component</h3>
        )}
      </div>
    );
  }
}

export default AppClass;
