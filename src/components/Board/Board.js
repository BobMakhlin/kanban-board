import Search from "../UI/Search";
import "./Board.css";
import BoardColumn from "./BoardColumn";

const Board = (props) => {
  const findCategoryTickets = (categoryId) => {
    return props.tickets.filter((ticket) => ticket.categoryId === categoryId);
  };

  return (
    <div className="board">
      <h1>Board</h1>

      <div className="board__toolbar">
        <Search className="board__search" />
      </div>

      <div className="tickets">
        {props.categories.map((category) => (
          <div key={category.id} className="board__column-wrapper">
            <BoardColumn
              header={category.name}
              tickets={findCategoryTickets(category.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
