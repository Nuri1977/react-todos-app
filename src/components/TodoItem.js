/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.todo.comleted} onChange={() => this.props.handleChangeProps(this.props.todo.id)} />
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
