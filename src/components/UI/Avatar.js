import classNames from "classnames";
import { useState } from "react";
import styles from "./Avatar.module.css";

const Avatar = (props) => {
  const [loaded, setLoaded] = useState(false);
  const cssClass = classNames({ [styles.avatar]: loaded, [props.className]: loaded });

  return (
    <img
      onLoad={() => setLoaded(true)}
      className={cssClass}
      src={props.src}
      alt=""
    />
  );
};

export default Avatar;
