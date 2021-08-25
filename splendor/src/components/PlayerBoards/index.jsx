import "./style.css";
import PlayerBoard from "./PlayerBoard/index";


function PlayerBoards() {
  return (
    <ul className={['player-boards']}>
      Player Boards
      <PlayerBoard user_name="Hepheir" />
      <PlayerBoard user_name="isuke12" />
      <PlayerBoard user_name="koreair" />
      {/* <PlayerBoard user_id="2" /> */}
    </ul>
  );
}

export default PlayerBoards;
