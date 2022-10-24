import classNames from 'classnames';
import './Search.css';

const Search = (props) => {
  const cssClass = classNames("search", props.className);
  return <input className={cssClass} />;
};

export default Search;
