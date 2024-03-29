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

const SearchInput = ({ onChange, delay = DEFAULT_DELAY }) => {
  const isMounted = useRef(false);
  const [value, setValue] = useState("");
  const isEmpty = value === "";

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      if (!isMounted) {
        return;
      }

      onChange(value);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [value, onChange, delay]);

  const changeHandler = useCallback((event) => {
    setValue(event?.target?.value ?? "");
  }, []);

  const handleButtonClick = useCallback(() => {
    if (isEmpty) {
      return;
    }
    setValue("");
  }, [isEmpty]);

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
