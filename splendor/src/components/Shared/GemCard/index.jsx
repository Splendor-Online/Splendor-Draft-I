import React from "react";

import Number from "../Number";
import "./style.css";

class GemCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.type,
      count: this.props.count,
    };
  }

  render() {
    const style = {...this.props.style};

    // style.backgroundPositionY = '0';

    if (this.state.type === 'onyx') {
      // style.backgroundPositionX = '0';
      style.background = "radial-gradient(ellipse, #000 30%, #413b3a)";
    }
    else if (this.state.type === 'diamond') {
      // style.backgroundPositionX = '-100%';
      style.background = "radial-gradient(ellipse, #fff 30%, #cecfd1)";
    }
    else if (this.state.type === 'sapphire') {
      // style.backgroundPositionX = '-200%';
      style.background = "radial-gradient(ellipse, #5bcbf5 30%, #193180)";
    }
    else if (this.state.type === 'emerald') {
      // style.backgroundPositionX = '-300%';
      style.background = "radial-gradient(ellipse, #80c341 30%, #006830)";
    }
    else if (this.state.type === 'ruby') {
      // style.backgroundPositionX = '-400%';
      style.background = "radial-gradient(ellipse, #f36f21 30%, #a21b1f)";
    }
    else {
      // style.backgroundPositionX = '-900%';
      style.opacity = '0';
    }

    return (
      <div className="gem-card--container" style={style}>
        <div className="gem-card--inner">
          {this.state.count ? <Number value={this.state.count}/> : null}
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default GemCard;
