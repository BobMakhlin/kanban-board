import Label from "../UI/Label";
import "./Ticket.css";

const Ticket = (props) => {
  let typeImg;
  switch (props.model.type) {
    case "task":
      typeImg = "/icons/task.svg";
      break;
    case "bug":
      typeImg = "/icons/bug.svg";
      break;
    case "story":
      typeImg = "/icons/story.svg";
      break;
    default:
      typeImg = "";
      break;
  }

  let priorityImg;
  switch (props.model.priority) {
    case "low":
      priorityImg = "/icons/low.svg";
      break;
    case "major":
      priorityImg = "/icons/major.svg";
      break;
    case "critical":
      priorityImg = "/icons/critical.svg";
      break;
    case "blocker":
      priorityImg = "/icons/blocker.svg";
      break;
    default:
      priorityImg = "";
      break;
  }

  return (
    <div className="ticket">
      <div className="ticket__summary">{props.model.summary}</div>
      <div className="ticket__epic">
        <Label text={props.model.epic.name} color={props.model.epic.color} />
      </div>
      <div className="ticket-footer">
        <div className="ticket-footer__left">
          <img className="ticket-footer__type" src={typeImg} alt="" />
          <img className="ticket-footer__priority" src={priorityImg} alt="" />
          <span className="ticket-footer__story-points">
            {props.model.storyPoints}
          </span>
        </div>
        <div className="ticket-footer__right">
          <span className="ticket-footer__number">{props.model.number}</span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
