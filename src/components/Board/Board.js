import "./Board.css";
import BoardColumn from "./BoardColumn";

const Board = (props) => {
  const findCategoryTickets = (categoryId) => {
    return props.tickets.filter((ticket) => ticket.categoryId === categoryId);
  };

  return (
    <div className="board">
      {props.categories.map((category) => (
        <div key={category.id} className="board__column-wrapper">
          <BoardColumn
            header={category.name}
            tickets={findCategoryTickets(category.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Board;
