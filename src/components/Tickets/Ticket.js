import './Ticket.css';

const Ticket = (props) => {
  return <div className="ticket">
    <div className="ticket__summary">Engage Jupiter Express for outer solar system travel</div>
    <div className="ticket__epic">SPACE TRAVEL PARTNERS</div> 
    <div className="ticket-footer">
        <div className="ticket-footer__left">
            <img className="ticket-footer__type" src="/icons/task.svg" alt="" />
            <img className="ticket-footer__priority" src="/icons/major.svg" alt="" />
            <span className="ticket-footer__story-points">5</span>
        </div>
        <div className="ticket-footer__right">
            <span className="ticket-footer__number">TIS-25</span>
        </div>
    </div>
  </div>;
};

export default Ticket;
