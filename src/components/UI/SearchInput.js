import styles from "./SearchInput.module.css";
import { useEffect, useState } from "react";
import { useRef } from "react";

const DEFAULT_DELAY = 1000;
const BUTTON_ICONS = {
  false: "fa-circle-xmark",
  true: "fa-magnifying-glass",
};

const SearchInput = ({ onChange, delay = DEFAULT_DELAY }) => {
  const [value, setValue] = useState("");
  const timeoutId = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, []);

  const isEmpty = () => {
    return value === "";
  };

  const changeWithDebounce = (value) => {
    setValue(value);

    clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      onChange(value);
    }, delay);
  };

  const changeHandler = (event) => {
    changeWithDebounce(event?.target?.value ?? "");
  };
  const handleButtonClick = () => {
    if (isEmpty()) {
      return;
    }

    changeWithDebounce("");
  };

  return (
    <div className={styles.wrapper}>
      <input value={value} onChange={changeHandler} className={styles.search} />
      <button className={styles.iconButton} onClick={handleButtonClick}>
        <i className={`fa-solid ${BUTTON_ICONS[isEmpty()]}`}></i>
      </button>
    </div>
  );
};

export default SearchInput;
