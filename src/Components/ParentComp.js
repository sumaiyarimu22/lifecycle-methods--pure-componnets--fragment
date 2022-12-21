import React, { Component } from "react";
// import RegularComp from "./RegularComp";
// import PureCom from "./PureCom";
export default class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 10,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        number: 20,
      });
    }, 30000);
  }

  render() {
    console.log("Parent");
    return (
      <div>
        <h3>This is ParentComponent</h3>
        {/* <RegularComp number={this.state.number} /> */}
        {/* <PureCom number={this.state.number} /> */}
      </div>
    );
  }
}
