import styles from "./SearchInput.module.css";
import { useEffect, useState } from "react";
import { useRef } from "react";

const DEFAULT_DELAY = 1000;

const SearchInput = ({ onChange, delay }) => {
  const [value, setValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const timeoutId = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, []);

  const changeWithDebounce = (value) => {
    setValue(value);
    setIsEmpty(!value);

    clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      onChange(value);
    }, delay ?? DEFAULT_DELAY);
  };

  const changeHandler = (event) => {
    changeWithDebounce(event?.target?.value ?? "");
  };
  const clearButtonClickHandler = () => {
    changeWithDebounce("");
  };

  return (
    <div className={styles.wrapper}>
      <input value={value} onChange={changeHandler} className={styles.search} />
      <button
        className={styles.iconButton}
        onClick={!isEmpty ? clearButtonClickHandler : undefined}
      >
        <i
          class={`fa-solid ${
            !isEmpty ? "fa-circle-xmark" : "fa-magnifying-glass"
          }`}
        ></i>
      </button>
    </div>
  );
};

export default SearchInput;
