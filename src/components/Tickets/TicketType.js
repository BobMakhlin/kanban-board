const TicketType = (props) => {
  let src;
  switch (props.type) {
    case "task":
      src = "/icons/task.svg";
      break;
    case "bug":
      src = "/icons/bug.svg";
      break;
    case "story":
      src = "/icons/story.svg";
      break;
    default:
      src = "";
      break;
  }

  return <img className={props.className} src={src} alt={props.type} />;
};

export default TicketType;
