import React, { Component } from 'react';

import { Checkbox, List, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import './TodoListItem.scss';

class TodoListItem extends Component {

  render() {
    const { label, description, onDeleted, onToggleDone, done } = this.props;

    let classNames = null;
    let descriptionItem;

    if (done) {
      classNames += ' done';
    }

    if (description) {
      descriptionItem = <span className="list-item-description">{description}</span>;
    }

    return (
      <List.Item>
        <Checkbox onChange={onToggleDone} className={classNames}>
          {label}
          <br/>
          {descriptionItem}
        </Checkbox>

        <Button
          type="primary"
          danger
          shape="circle"
          icon={<DeleteOutlined/>}
          size="small"
          onClick={onDeleted}
        />
      </List.Item>

    );
  }
}

export default TodoListItem;
