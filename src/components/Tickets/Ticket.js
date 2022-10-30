import Label from "../UI/Label";
import Avatar from "../UI/Avatar";
import TicketType from "./TicketType";
import TicketPriority from "./TicketPriority";
import StoryPoints from "./StoryPoints";
import styles from "./Ticket.module.css";

const Ticket = (props) => {
  return (
    <div className={styles.ticket}>
      <div>{props.model.summary}</div>
      <div className={styles.epic}>
        <Label text={props.model.epic.name} color={props.model.epic.color} />
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <TicketType className={styles.type} type={props.model.type} />
          <TicketPriority
            className={styles.priority}
            priority={props.model.priority}
          />
          {props.model.storyPoints && <StoryPoints
            className={styles.storyPoints}
            value={props.model.storyPoints}
          />}
        </div>
        <div className={styles.footerRight}>
          <span>{props.model.number}</span>
          <Avatar className={styles.avatar} src={props.model.avatar} />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
