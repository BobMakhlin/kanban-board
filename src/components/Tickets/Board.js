import "./Board.css";
import Ticket from "./Ticket";

const Board = (props) => {
  return (
    <div className="board">
      <div className="board__column">
        <Ticket />
        <Ticket />
      </div>
      <div className="board__column">
        <Ticket />
      </div>
      <div className="board__column">
        <Ticket />
      </div>
      <div className="board__column">
        <Ticket />
      </div>
    </div>
  );
};

export default Board;
