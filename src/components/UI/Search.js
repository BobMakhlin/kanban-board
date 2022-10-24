import classNames from "classnames";
import "./Search.css";

const DEFAULT_DELAY = 1000;

const Search = (props) => {
  const changeHandler = (event) => {
    setTimeout(() => {
      props.onChange(event.target.value);
    }, props.delay ?? DEFAULT_DELAY);
  };

  const cssClass = classNames("search", props.className);
  return <input onChange={changeHandler} className={cssClass} />;
};

export default Search;
