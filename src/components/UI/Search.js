import classNames from "classnames";
import "./Search.css";

const Search = (props) => {
  const changeHandler = (event) => {
    props.onChange(event.target.value);
  };

  const cssClass = classNames("search", props.className);
  return <input onChange={changeHandler} className={cssClass} />;
};

export default Search;
