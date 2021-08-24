import "./style.css";
import PlayerBoards from "../PlayerBoards";


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
        logs
      </aside>
    </>
  );
}

export default App;
