import React from "react";

import "./style.css";

class Log extends React.Component {
  render() {
    const { message, indent } = this.props;

    return (
      <li className="log" style={{ paddingLeft: `${16*indent}px` }}>
        <p className="log--message">
          { message }
        </p>
      </li>
    );
  }
}


export default Log;
