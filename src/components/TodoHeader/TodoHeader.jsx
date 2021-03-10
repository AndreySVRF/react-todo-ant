import React from 'react';

import { SearchPanel, FilterPanel } from '../../components';

import './TodoHeader.scss';

const TodoHeader = ({ onFilterChange, filter, onSearch }) => {
  return (
    <div className="todo-header">
      <SearchPanel
        onSearchChange={onSearch}
      />
      <FilterPanel
        onFilterChange={onFilterChange}
        filter={filter}
      />
    </div>
  );
};

export default TodoHeader;
