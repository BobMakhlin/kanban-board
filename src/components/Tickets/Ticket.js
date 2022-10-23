import Label from "../UI/Label";
import TicketType from "./TicketType";
import TicketPriority from "./TicketPriority";
import StoryPoints from "./StoryPoints";
import "./Ticket.css";

const Ticket = (props) => {
  return (
    <div className="ticket">
      <div className="ticket__summary">{props.model.summary}</div>
      <div className="ticket__epic">
        <Label text={props.model.epic.name} color={props.model.epic.color} />
      </div>
      <div className="ticket-footer">
        <div className="ticket-footer__left">
          <TicketType className="ticket-footer__type" type={props.model.type} />
          <TicketPriority
            className="ticket-footer__priority"
            priority={props.model.priority}
          />
          <StoryPoints
            className="ticket-footer__story-points"
            value={props.model.storyPoints}
          />
        </div>
        <div className="ticket-footer__right">
          <span className="ticket-footer__number">{props.model.number}</span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
