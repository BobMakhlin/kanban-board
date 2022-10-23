import classNames from "classnames";
import "./StoryPoints.css";

const StoryPoints = (props) => {
  const cssClass = classNames("story-points", props.className);
  return <span className={cssClass}>{props.value}</span>;
};

export default StoryPoints;
