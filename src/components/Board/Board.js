import "./Board.css";
import BoardColumn from "./BoardColumn";

const Board = (props) => {
  return (
    <div className="board">
      <div className="board__column-wrapper">
        <BoardColumn header="TO DO" />
      </div>
      <div className="board__column-wrapper">
        <BoardColumn header="IN PROGRESS" />
      </div>
      <div className="board__column-wrapper">
        <BoardColumn header="IN REVIEW" />
      </div>
      <div className="board__column-wrapper">
        <BoardColumn header="DONE" />
      </div>
    </div>
  );
};

export default Board;
