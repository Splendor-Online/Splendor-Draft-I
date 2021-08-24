import React from "react";

import "./style.css";

class Number extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value || 0
    };
  }

  render() {
    const style_bgpos = {};

    if (this.state.value <= 0) {
      style_bgpos.backgroundPositionX = '-900%';
      style_bgpos.backgroundPositionY = '0';
    }
    else if (this.state.value < 10) {
      style_bgpos.backgroundPositionX = `-${this.state.value-1}00%`;
      style_bgpos.backgroundPositionY = '-200%';
    }
    else {
      style_bgpos.backgroundPositionX = '-900%';
      style_bgpos.backgroundPositionY = '-200%';
    }

    return (
      <div className="number--container">
        <div className="number--sprite" style={style_bgpos}></div>
      </div>
    );
  }
}


export default Number;
