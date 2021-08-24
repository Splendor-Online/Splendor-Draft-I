import React from "react";

import "./style.css";

class GemToken extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.type
    };
  }

  render() {
    const style_bgpos = {};

    style_bgpos.backgroundPositionY = '0';

    if (this.state.type === 'emerald') {
      style_bgpos.backgroundPositionX = '0';
    }
    else if (this.state.type === 'diamond') {
      style_bgpos.backgroundPositionX = '-100%';
    }
    else if (this.state.type === 'sapphire') {
      style_bgpos.backgroundPositionX = '-200%';
    }
    else if (this.state.type === 'onyx') {
      style_bgpos.backgroundPositionX = '-300%';
    }
    else if (this.state.type === 'ruby') {
      style_bgpos.backgroundPositionX = '-400%';
    }
    else if (this.state.type === 'gold') {
      style_bgpos.backgroundPositionX = '-500%';
    }
    else {
      style_bgpos.backgroundPositionX = '-900%';
    }

    return (
      <div className="token--container">
        <div className="token--sprite" style={style_bgpos}></div>
        {this.props.children}
      </div>
    );
  }
}


export default GemToken;
