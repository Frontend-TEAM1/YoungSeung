import React from 'react';

function TodoItem(item) {
  return (
    <React.Fragment>
      <div>{item.item}</div>
    </React.Fragment>
  );
}

export default TodoItem;
