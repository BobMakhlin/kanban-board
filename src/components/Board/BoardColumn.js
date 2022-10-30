import Ticket from "../Tickets/Ticket";
import styles from './BoardColumn.module.css'

const BoardColumn = (props) => {
  return (
    <div className={styles.column}>
      <div className={styles.header}>{props.header}</div>
      <div>
        {props.tickets?.map((ticketModel) => (
          <div key={ticketModel.id} className={styles.ticket}>
            <Ticket model={ticketModel} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardColumn;
