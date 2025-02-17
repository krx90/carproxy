import { Fragment } from "react";

let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
items =[]

function ListGroup() {
  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 ? <p>No Item Found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
