import { Fragment } from "react";

const items = [
  'New York',
  'San Francisco',
  'Tokyo',
  'London',
  'Paris'
];


function ListGroup() {
  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {items.map(item => (
          <li>{item}</li>
          ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
