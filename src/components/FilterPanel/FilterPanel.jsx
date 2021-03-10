import React, { Component } from 'react';

import { Button, Radio } from 'antd';

import './FilterPanel.scss';

class FilterPanel extends Component {

  buttons = [
    { name: 'all', label: 'Все' },
    { name: 'active', label: 'Активые' },
    { name: 'done', label: 'Выполненные' }
  ];


  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      return (
        <Radio.Button
          value={name}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </Radio.Button>
      );
    });

    return (
      <Radio.Group value={filter}>
        {buttons}
      </Radio.Group>
    );
  }
};

export default FilterPanel;
