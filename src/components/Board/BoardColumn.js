import "./BoardColumn.css";
import Ticket from "../Tickets/Ticket";

const BoardColumn = (props) => {
  return (
    <div className="board-column">
      <div className="board-column__header">{props.header}</div>
      <div className="board-column__tickets">
        {props.tickets?.map((ticketModel) => (
          <div key={ticketModel.id} className="board-column__ticket">
            <Ticket model={ticketModel} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardColumn;
