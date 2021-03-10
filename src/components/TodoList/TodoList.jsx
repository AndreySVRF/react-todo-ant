import React from 'react';

import { List, Empty } from 'antd';
import { TodoListItem } from '../../components';

import './TodoList.scss';

const TodoList = ({ data, onToggleDone, deleteItem }) => {

  const elements = data.map(item => {
    const { id, ...itemProps } = item;

    return (
      <TodoListItem
        {...itemProps}
        key={id}
        onToggleDone={() => onToggleDone(id)}
        onDeleted={() => deleteItem(id)}
      />
    );
  });

  let blockItems;

  if (elements.length) {
    blockItems = <List size="small" bordered>{elements}</List>;
  } else {
    blockItems = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Заметок не найдено"/>;
  }

  return (
    blockItems
  );

};

export default TodoList;
