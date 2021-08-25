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
        user_name: `${user_name} (loading...)`,
        user_is_logged_in: false,
        user_in_game: false
      },
    };

    get_user_data(user_name).then((res) => this.setState({ user: res }));

    this.count_prestige_point = this.count_prestige_point.bind(this);
  }

  count_prestige_point() {
    // TODO
    return 0;
  }

  render() {
    return (
      <li className="player-board">
        <div className="player-board--nickname">{this.state.user.user_name}</div>
        <div className="player-board--prestige-points">
          {this.count_prestige_point()} PP
        </div>
        <div className="player-board--hand">
          <div className="player-board--gems">
            <div className="player-board--gem">
              <GemCard type="diamond">
                <Number value={1} />
              </GemCard>
              <GemToken type="diamond">
                <Number value={1} />
              </GemToken>
            </div>
            <div className="player-board--gem">
              <GemCard type="sapphire">
                <Number value={1} />
              </GemCard>
              <GemToken type="sapphire">
                <Number value={0} />
              </GemToken>
            </div>
            <div className="player-board--gem">
              <GemCard type="emerald">
                <Number value={0} />
              </GemCard>
              <GemToken type="emerald">
                <Number value={2} />
              </GemToken>
            </div>
            <div className="player-board--gem">
              <GemCard type="ruby">
                <Number value={0} />
              </GemCard>
              <GemToken type="ruby">
                <Number value={2} />
              </GemToken>
            </div>
            <div className="player-board--gem">
              <GemCard type="onyx">
                <Number value={4} />
              </GemCard>
              <GemToken type="onyx">
                <Number value={3} />
              </GemToken>
            </div>
            <div className="player-board--gem">
              <GemCard type="none"/>
              <GemToken type="gold">
                <Number value={2} />
              </GemToken>
            </div>
          </div>
          <div className="player-board--noble-tiles"></div>
        </div>
      </li>
    );
  }
}

export default PlayerBoard;
