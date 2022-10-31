import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import styles from "./Search.module.css";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const DEFAULT_DELAY = 1000;

const Search = (props) => {
  const [value, setValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const changeHandler = ({ target: { value } }) => {
    setValue(value);

    if (value) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }

    // TODO: debounce.
    setTimeout(() => {
      props.onChange(value);
    }, props.delay ?? DEFAULT_DELAY);
  };
  const clearHandler = () => {
    changeHandler({ target: { value: "" } });
  };

  let icon;
  if (isEmpty) {
    icon = <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} />;
  } else {
    icon = (
      <FontAwesomeIcon
        onClick={clearHandler}
        className={styles.icon}
        icon={faCircleXmark}
      />
    );
  }

  const cssClass = classNames(styles.search, props.className);
  return (
    <div className={styles.wrapper}>
      <input value={value} onChange={changeHandler} className={cssClass} />
      {icon}
    </div>
  );
};

export default Search;
