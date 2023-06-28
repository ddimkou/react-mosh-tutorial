import { MouseEvent } from "react";

const ListGroup = () => {
  const Items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //   event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {Items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {Items.map((item, index) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
