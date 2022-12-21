import React, { PureComponent } from "react";

export default class PureCom extends PureComponent {
  render() {
    console.log("Pure");
    return (
      <div>
        <h1>This is PureComponent:{this.props.number}</h1>
      </div>
    );
  }
}
