import React from 'react';

class TodoItem extends React.Component {
	constructor(...args) {
    super(...args);
  }
  render() {
    return (
      <li className={this.props.completed ? 'completed' : ''}>
        <div className="view">
          <input
          id={this.props.unique}
          className="toggle fa"
          type="checkbox"
          checked={this.props.completed}
          onChange={this.props.onToggle}
          />
          <label htmlFor={this.props.unique}>
            {this.props.title}
          </label>
          <button className="destory" onClick={this.props.onDestroy}>
            <i className="fa fa-times"></i>
          </button>
        </div>
      </li>
    );
  }
}


export default TodoItem;