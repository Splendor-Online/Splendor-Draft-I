import React from "react";

import "./style.css";
import Log from "./Log/index.jsx";


class Logs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [
        {
          message: 'Hepheir buys a card(lv1)',
          indent: 1,
        },
        {
          message: 'returns 1 ruby',
          indent: 2,
        },
        {
          message: 'returns 5 onyx',
          indent: 2,
        },
        {
          message: 'SJH reserves a card(lv2)',
          indent: 1,
        },
        {
          message: 'gains a gold',
          indent: 2,
        },
        {
          message: 'koreair takes 1 ruby',
          indent: 1,
        },
        {
          message: 'koreair takes 1 emerald',
          indent: 1,
        },
        {
          message: 'koreair takes 1 sapphire',
          indent: 1,
        },
        {
          message: 'isuke takes 2 ruby',
          indent: 1,
        },
      ],
    }

    this.pushLog = this.pushLog.bind(this);
    this.popLog = this.popLog.bind(this);
  }

  pushLog(message, indent) {
    this.state.logs.push({
      message: message,
      indent: indent,
    })
    this.forceUpdate();
  }

  popLog(message, indent) {
    this.state.logs.pop()
    this.forceUpdate();
  }

  render() {
    return (
      <ul className="logs">
        {
          this.state.logs.map(
            (log) => <Log message={log.message} indent={log.indent} />
          )
        }
      </ul>
    );
  }
}


export default Logs;
