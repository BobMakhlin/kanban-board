import classNames from "classnames";
import styles from "./StoryPoints.module.css";

const StoryPoints = (props) => {
  const cssClass = classNames(styles.storyPoints, props.className);
  return <span className={cssClass}>{props.value}</span>;
};

export default StoryPoints;
