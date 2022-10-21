import "./BoardColumn.css";
import Ticket from "./Ticket";

const BoardColumn = (props) => {
  const ticket1Model = {
    summary: "Engage Jupiter Express for outer solar system travel",
    epic: "SPACE TRAVEL PARTNERS",
    storyPoints: 5,
    number: "TIS-25",
    type: "task",
    priority: "major"
  };
  
  const ticket2Model = {
    summary: "Create 90 day plan for all departments in the Mars Office",
    epic: "LOCAL MARS OFFICE",
    storyPoints: 9,
    number: "TIS-12",
    type: "story",
    priority: "low"
  };

  return (
    <div className="board-column">
      <div className="board-column__header">{props.header}</div>
      <div className="board-column__tickets">
        <div className="board-column__ticket">
          <Ticket model={ticket1Model} />
        </div>
        <div className="board-column__ticket">
          <Ticket model={ticket2Model} />
        </div>
      </div>
    </div>
  );
};

export default BoardColumn;
