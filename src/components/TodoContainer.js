/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import TodoList from './TodoList';
import Header from './Header';

class TodoContainer extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoContainer;
