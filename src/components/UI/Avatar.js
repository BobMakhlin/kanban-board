import classNames from "classnames";
import { useState } from "react";
import "./Avatar.css";

const Avatar = (props) => {
  const [loaded, setLoaded] = useState(false);
  const cssClass = classNames({ avatar: loaded, [props.className]: loaded });

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
