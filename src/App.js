import React, { Component } from 'react';

import { TodoHeader, TodoList, TodoBottom } from './components';

import 'antd/dist/antd.css';
import './App.scss';

class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Купить хлеб', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, culpa expedita in ipsa ipsam laborum obcaecati quasi recusandae sed voluptatem?'),
      this.createTodoItem('Зарядить телефон'),
      this.createTodoItem('Заплатить за интернет', 'Lorem ipsum dolor sit amet, consectetur')
    ],
    filter: 'all',
    term: ''
  };

  createTodoItem(label, description = null) {
    return {
      label,
      description,
      done: false,
      id: this.maxId++
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    });
  };

  addItem = (text, description = null) => {
    const newItem = this.createTodoItem(text, description);

    this.setState(({ todoData }) => {
      const newArray = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArray
      }
    });
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter(item => !item.done);
      case 'done':
        return items.filter(item => item.done);
      default:
        return items;
    }
  }

  onFilterChange = (filter) => {
    if (this.state.filter !== filter) {
      this.setState({ filter });
    }
  };

  search(items, term) {
    if (term.length === 0) return items;

    return items.filter(item => item.label.toLowerCase().indexOf(term.trim()) > -1);
  }

  onSearch = (term) => {
    this.setState({ term });
  };

  render() {
    const { todoData, filter, term } = this.state;

    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length;

    return (
      <div className="App">
        <TodoHeader
          onFilterChange={this.onFilterChange}
          filter={filter}
          onSearch={this.onSearch}
        />
        <TodoList
          data={visibleItems}
          onToggleDone={this.onToggleDone}
          deleteItem={this.deleteItem}
        />
        <TodoBottom doneCount={doneCount} todoCount={todoCount} onItemAdded={this.addItem}/>
      </div>
    );
  }
}

export default App;
