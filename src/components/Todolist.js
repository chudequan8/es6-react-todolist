import React from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';

class Todolist extends React.Component {
	constructor(...args) {
    super(...args);
    this.ids = 0;
    this.state = {
      db: [],
      count: 0,
      currentShow: 'all'
    };
    this.onAdd = function(val){
      this.state.db.push({
        title: val,
        completed: false,
        id: 'item' + ++this.ids
      });
      this.setState(this.state);
    };
    this.onToggle = function(id){
      for (let i = 0, k = this.state.db.length; i < k; i++) {
        let item = this.state.db[i];
        if(item.id == id){
          item.completed = !item.completed;
          if(item.completed){
            this.state.count++;
          }
          else {
            this.state.count--;
          }
          break;
        }
      }
      this.setState(this.state);
    };
    this.onDestroy = function(id){
      for (let i = 0, k = this.state.db.length; i < k; i++) {
        let item = this.state.db[i];
        if(item.id == id){
          if(item.completed){
            this.state.count--;
          }
          this.state.db.splice(i, 1);
          break;
        }
      }
      this.setState(this.state);
    };
    this.toggleAll = function(){
      if(this.state.count === this.state.db.length){
        for (let i = 0, k = this.state.db.length; i < k; i++) {
          let item = this.state.db[i];
          item.completed = false;
        }
        this.state.count = 0;
      }
      else {
        for (let i = 0, k = this.state.db.length; i < k; i++) {
          let item = this.state.db[i];
          item.completed = true;
        }
        this.state.count = this.state.db.length;
      }
      this.setState(this.state);
    };
    this.clearCompleted = function(){
      for (let i = this.state.db.length - 1; i >= 0; i--) {
        let item = this.state.db[i];
        if(item.completed){
          this.state.db.splice(i, 1);
        }
      }
      this.state.count = 0;
      this.setState(this.state);
    };
    this.filter = function(way){
      this.setState({currentShow: way});
    }
  }
  render() {

    let todos = this.state.db.filter((ele) => (
      (this.state.currentShow === 'all') ? true : ((this.state.currentShow === 'active') ? !ele.completed : ele.completed)
    ));

    todos = todos.map((item) => (
      <TodoItem
      key={item.id}
      title={item.title}
      unique={item.id}
      completed={item.completed}
      onToggle={this.onToggle.bind(this, item.id)}
      onDestroy={this.onDestroy.bind(this, item.id)}
      />
    ));

    if(this.state.db.length === 0){
      return null;
    }
    else {
      return (
        <section className="main">
          <input
          type="checkbox"
          className="toggleall fa"
          checked={this.state.count === this.state.db.length ? true : false}
          onChange={this.toggleAll.bind(this)}
          />
          <ul className="todo-list">
            {todos}
          </ul>
          <Footer
          listLength={this.state.db.length}
          completed={this.state.count}
          clearCompleted={this.clearCompleted.bind(this)}
          filter={this.filter.bind(this)}
          showWay={this.state.currentShow}
          />
        </section>
      );
    }
    
  }
}


export default Todolist;