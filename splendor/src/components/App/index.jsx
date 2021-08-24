import "./style.css";
import PlayerBoards from "../PlayerBoards";
import Logs from "../Logs";


function App() {
  return (
    <>
      <aside id="player_boards" className="side-bar left">
        {/*  */}
        <PlayerBoards />
      </aside>
      <main id="main_board" className="main-board">
        {/*  */}
        main board
      </main>
      <aside id="logs" className="side-bar right">
        {/*  */}
        <Logs />
      </aside>
    </>
  );
}

export default App;
