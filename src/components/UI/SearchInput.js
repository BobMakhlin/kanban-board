import styles from "./SearchInput.module.css";
import { useState } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const DEFAULT_DELAY = 1000;
const BUTTON_ICONS = {
  false: "fa-circle-xmark",
  true: "fa-magnifying-glass",
};

let timeoutId;

const SearchInput = ({ onChange, delay = DEFAULT_DELAY }) => {
  const isMounted = useRef(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const isEmpty = value === "";

  const changeWithDebounce = useCallback(
    (value) => {
      if (!isMounted) {
        return;
      }
      
      setValue(value);

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        onChange(value);
      }, delay);
    },
    [onChange, delay]
  );

  const changeHandler = useCallback(
    (event) => {
      changeWithDebounce(event?.target?.value ?? "");
    },
    [changeWithDebounce]
  );

  const handleButtonClick = useCallback(() => {
    if (isEmpty) {
      return;
    }
    changeWithDebounce("");
  }, [isEmpty, changeWithDebounce]);

  return (
    <div className={styles.wrapper}>
      <input value={value} onChange={changeHandler} className={styles.search} />
      <button className={styles.iconButton} onClick={handleButtonClick}>
        <i className={`fa-solid ${BUTTON_ICONS[isEmpty]}`}></i>
      </button>
    </div>
  );
};

export default SearchInput;
