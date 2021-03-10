import React, { Component } from 'react';

import { Modal, Button, Input } from 'antd';

import './TodoBottom.scss';

class TodoBottom extends Component {

  state = {
    isModalVisible: false,
    label: '',
    description: ''
  };

  showModal = () => {
    this.setState({
      isModalVisible: true
    });
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false
    });
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    });
  }

  onDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const label = this.state.label.trim();
    const description = this.state.description.trim();

    if (label) {
      this.props.onItemAdded(label, description);

      this.setState({
        label: '',
        description: '',
        isModalVisible: false
      });
    }
  }

  render() {
    const { todoCount, doneCount } = this.props;

    let todoInfo;

    if (todoCount) {
      todoInfo = `Выполнено ${doneCount} из ${todoCount}`;
    }

    return (
      <div className="todo-bottom">
        <div className="todo-info">
          {todoInfo}
        </div>

        <Button type="primary" onClick={this.showModal}>
          Создать заметку
        </Button>

        <Modal
          title="Новая заметка"
          visible={this.state.isModalVisible}
          onOk={this.onSubmit}
          onCancel={this.handleCancel}
          okText="Добавить"
          cancelText="Отмена"
        >
          <form onSubmit={this.onSubmit}>
          <Input
            placeholder="Имя заметки"
            style={{ marginBottom: '15px' }}
            onChange={this.onLabelChange}
            value={this.state.label}
          />
          <Input.TextArea placeholder="Подробное описание заметки" autoSize onChange={this.onDescriptionChange} value={this.state.description}/>
          </form>
        </Modal>
      </div>
    );
  }
};

export default TodoBottom;
