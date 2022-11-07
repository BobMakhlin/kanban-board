import { useState } from "react";
import SearchInput from "../UI/SearchInput";
import styles from "./Board.module.css";
import BoardColumn from "./BoardColumn";

const Board = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const findCategoryTickets = (categoryId) => {
    return props.tickets
      .filter((ticket) =>
        ticket.summary.toUpperCase().includes(searchValue.toUpperCase())
      )
      .filter((ticket) => ticket.categoryId === categoryId);
  };

  return (
    <div className={styles.board}>
      <h1>Board</h1>

      <div className={styles.toolbar}>
        <SearchInput onChange={(value) => setSearchValue(value)} />
      </div>

      <div className={styles.tickets}>
        {props.categories.map((category) => (
          <div key={category.id} className={styles.columnWrapper}>
            <BoardColumn
              header={category.name}
              tickets={findCategoryTickets(category.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
