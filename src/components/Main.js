import 'normalize.css/normalize.css';
import 'styles/App.css';
import 'font-awesome-webpack';

import React from 'react';
import Todolist from './Todolist';

class AppComponent extends React.Component {
	constructor(...args) {
    super(...args);
    this.state = {
      newTodo: ''
    };
    this.handleNewTodoKeyDown = function(e){
      if(e.keyCode !== 13){
        return;
      }
      e.preventDefault();
      let val = this.state.newTodo.trim();
      if(val){
        this.refs['todoApp'].onAdd(val);
        this.setState({
          newTodo: ''
        });
      }
    };
    this.handleChange = function(e){
      this.setState({
        newTodo: e.target.value
      })
    }
  }
  render() {
    return (
    	<div className="todoapp">
        <header className="header">
          <h1>todos</h1>
        </header>
        <div className="inputgroup">
          <input
            type="text"
            className="newtodo"
            placeholder="What needs to be done?"
            autoFocus={true}
            onKeyDown={this.handleNewTodoKeyDown.bind(this)}
            onChange={this.handleChange.bind(this)}
            value={this.state.newTodo}
          />
        </div>
        <Todolist ref="todoApp" />
    	</div>
    );
  }
}


AppComponent.defaultProps = {
};

export default AppComponent;
