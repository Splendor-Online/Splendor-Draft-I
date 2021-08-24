import React from "react";

import get_user_nickname from "../../../api/splendor";
import "./style.css";

class PlayerBoard extends React.Component {
  constructor(props) {
    super(props);

    if (!props.user_id) {
      console.error('[user_id] is required to show PlayerBoard.');
      return;
    }

    // TODO: Make splendor game model on back end first,
    // then continue implementing front end
    this.state = {
      user: {
        id: props.user_id,
        nickname: 'loading...',
      },
      board: {
        summary: {
          prestige_point: 0,
          gem_coin: 0,
        },
        hand: {
          coin: {
            diamond: 0,
            sapphire: 0,
            emerald: 0,
            ruby: 0,
            onyx: 0,
            gold: 0,
          },
          card: {
            reserving: [],

          }
        }
      }
    };

    get_user_nickname(this.props.user_id)
      .then(res => this.setState({user: res}))
  }

  render() {
    return (
      <li className="player-board">
        <div className="player-board--nickname">
          {this.state.user.nickname}
        </div>
        <div className="player-board--prestige-points">
          {this.state.board.summary.prestige_point} PP
        </div>
      </li>
    );
  }
}


export default PlayerBoard;
