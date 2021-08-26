import React from "react";

import Number from "../../Shared/Number";
import GemCard from "../../Shared/GemCard";
import GemToken from "../../Shared/GemToken";
import "./style.css";

import get_user_data from "../../../api/splendor";

class PlayerBoard extends React.Component {
  constructor(props) {
    super(props);

    const { user_name } = this.props;

    // TODO: Make splendor game model on back end first,
    // then continue implementing front end
    this.state = {
      user: {
        user_name: user_name,
        user_is_logged_in: false,
        user_in_game: false
      },
      loaded: false,
    };

    this.update_board = this.update_board.bind(this);
  }


  update_board() {
    get_user_data(this.state.user.user_name)
      .then((user_data) => this.setState({user: user_data, loaded: true}))
      .catch((reason) => { console.log(reason) });
  }

  render() {
    if (!this.state.loaded) {
      this.update_board();
    }

    return (
      <li className="player-board">
        <div className="player-board--nickname">
          {this.state.user.user_name}
          {this.state.loaded ? null : ' (...loading)'}
        </div>
        <div className="player-board--prestige-points">
          0 PP
        </div>
        <div className="player-board--hand">
          <div className="player-board--gems">
            <div className="player-board--gem">
              <GemCard type="diamond" count={1} />
              <GemToken type="diamond" count={1} />
            </div>
            <div className="player-board--gem">
              <GemCard type="sapphire" count={1}/>
              <GemToken type="sapphire" count={0}/>
            </div>
            <div className="player-board--gem">
              <GemCard type="emerald" count={0}/>
              <GemToken type="emerald" count={5}/>
            </div>
            <div className="player-board--gem">
              <GemCard type="ruby" count={0}/>
              <GemToken type="ruby" count={2}/>
            </div>
            <div className="player-board--gem">
              <GemCard type="onyx" count={4}/>
              <GemToken type="onyx" count={3}/>
            </div>
            <div className="player-board--gem">
              <GemCard type="none"/>
              <GemToken type="gold" count={2}/>
            </div>
          </div>
          <div className="player-board--noble-tiles"></div>
        </div>
      </li>
    );
  }
}

export default PlayerBoard;
