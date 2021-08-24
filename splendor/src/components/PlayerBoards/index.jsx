import "./style.css";
import PlayerBoard from "./PlayerBoard/index";


function PlayerBoards() {
  return (
    <ul className={['player-boards']}>
      Player Boards
      <PlayerBoard user_id="0" />
      <PlayerBoard user_id="7" />
      <PlayerBoard user_id="3" />
      {/* <PlayerBoard user_id="2" /> */}
    </ul>
  );
}

export default PlayerBoards;
