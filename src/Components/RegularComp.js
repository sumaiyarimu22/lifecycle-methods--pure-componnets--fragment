import React, { Component } from "react";

export default class RegularComp extends Component {
  render() {
    console.log("Regular");
    return (
      <div>
        <h2>This is RegularComponent:{this.props.number}</h2>
      </div>
    );
  }
}
