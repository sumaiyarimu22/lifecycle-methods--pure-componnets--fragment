// import React, { Component } from "react";

// export default class LifeCycleUpdating extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "shohanur rahaman",
//     };
//     console.log("constructor");
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log(" static getDerivedStateFromProps");
//     return null;
//   }
//   componentDidMount() {
//     console.log("componentDidMount");
//   }
//   shouldComponentUpdate() {
//     console.log("shouldComponentUpdate");
//     return true;
//   }
//   getSnapshotBeforeUpdate(previousProps, previousState) {
//     console.log(" getSnapshotBeforeUpdate");
//     return null;
//   }

//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//   }

//   updateState = () => {
//     this.setState({
//       name: "tumpa",
//     });
//   };

//   render() {
//     console.log("render ");
//     return (
//       <div>
//         <button onClick={this.updateState}>Update state</button>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

export default class LifeCycleUpdating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sohan",
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedFromProps");
    return null;
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  getSnapshotBeforeUpdate(previousProps, previousState) {
    console.log(" getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  updateState = () => {
    this.setState({
      name: " tumpa",
    });
  };
  render() {
    console.log("render");
    return (
      <div>
        <h1>name: {this.state.name}</h1>
        <button onClick={this.updateState}>click</button>
      </div>
    );
  }
}
