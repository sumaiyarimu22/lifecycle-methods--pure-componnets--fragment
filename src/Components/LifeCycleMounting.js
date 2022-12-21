// import React, { Component } from "react";

// export default class LifeCycleMounting extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "ayesha",
//     };
//     console.log("Constructor ran");
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log("static getDerivedStateFromProps ran");
//     return null;
//   }

//   componentDidMount() {
//     console.log("componentDidMount ran");
//   }

//   render() {
//     console.log("render ran");
//     return <div>LifeCycleMounting</div>;
//   }
// }

import React, { Component } from "react";

export default class LifeCycleMounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ayesha",
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    return <div>mounting</div>;
  }
}
