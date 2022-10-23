import "./Label.css";

const YELLOW = "#ffc200";
const ORANGE = "#f18100";
const BLUE = "#4ac9de";
const VIOLET = "#604ebd";
const DEFAULT = "#c0c8d2";
const BLACK = "#000000";
const WHITE = "#ffffff";

const Label = (props) => {
  let backgroundColor;
  let textColor;

  switch (props.color) {
    case "yellow":
      backgroundColor = YELLOW;
      textColor = BLACK;
      break;
    case "orange":
      backgroundColor = ORANGE;
      textColor = WHITE;
      break;
    case "blue":
      backgroundColor = BLUE;
      textColor = WHITE;
      break;
    case "violet":
      backgroundColor = VIOLET;
      textColor = WHITE;
      break;
    default:
      backgroundColor = DEFAULT;
      textColor = BLACK;
      break;
  }

  return (
    <span className="label" style={{ backgroundColor, color: textColor }}>
      {props.text}
    </span>
  );
};

export default Label;
