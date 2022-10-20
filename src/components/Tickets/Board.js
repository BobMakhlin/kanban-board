import "./Board.css";
import BoardColumn from "./BoardColumn";
import Ticket from "./Ticket";

const Board = (props) => {
  return (
    <div className="board">
      <div className="board__column-wrapper">
        <BoardColumn />
      </div>
      <div className="board__column-wrapper">
        <BoardColumn />
      </div>
      <div className="board__column-wrapper">
        <BoardColumn />
      </div>
      <div className="board__column-wrapper">
        <BoardColumn />
      </div>
    </div>
  );
};

export default Board;
