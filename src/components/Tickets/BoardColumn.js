import "./BoardColumn.css";
import Ticket from './Ticket';

const BoardColumn = (props) => {
  return (
    <div className="board-column">
      <Ticket />
    </div>
  );
};

export default BoardColumn;
