import React, { Component } from 'react';

import { Input } from 'antd';

import './SearchPanel.scss';

class SearchPanel extends Component {

  state = {
    term: ''
  };

  onSearchChange = (event) => {
    const term = event.target.value.toLowerCase();

    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <Input.Search
        style={{ width: 300 }}
        placeholder="Введите искомую заметку..."
        allowClear
        onChange={this.onSearchChange}
        value={this.state.term}
      />
    );
  }
}

export default SearchPanel;
