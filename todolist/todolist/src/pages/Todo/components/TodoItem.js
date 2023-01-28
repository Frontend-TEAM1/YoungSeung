import React from 'react';

function TodoItem(props) {

  return (
    <React.Fragment>
      <div>{props.item}</div>
    </React.Fragment>
  );
}

export default TodoItem;
