import { type } from "@testing-library/user-event/dist/type";

const TicketPriority = (props) => {
  let src;
  switch (props.priority) {
    case "low":
      src = "/icons/low.svg";
      break;
    case "major":
      src = "/icons/major.svg";
      break;
    case "critical":
      src = "/icons/critical.svg";
      break;
    case "blocker":
      src = "/icons/blocker.svg";
      break;
    default:
      src = "";
      break;
  }

  return <img className={props.className} src={src} alt={type.priority} />;
};

export default TicketPriority;
