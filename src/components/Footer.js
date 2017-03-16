import React from 'react';

class Footer extends React.Component {
	constructor(...args) {
    super(...args);
  }
  render() {
    let leftCount = this.props.listLength - this.props.completed;
    let clearBtn = null;
    if(this.props.completed > 0){
      clearBtn = (
        <div className="clearCount">
          <a href="##" onClick={this.props.clearCompleted}>Clear Completed</a>
        </div>
      );
    }

    return (
      <div className="control-bar">
        <div className="item-num">
          {leftCount} {leftCount === 1 ? 'item' : 'items'} left
        </div>
        <div className="select-way">
          <ul>
            <li>
              <a href="##" className={(this.props.showWay === 'all') ? 'selected' : ''} onClick={this.props.filter.bind(this, 'all')}>All</a>
            </li>
            <li>
              <a href="##" className={(this.props.showWay === 'active') ? 'selected' : ''} onClick={this.props.filter.bind(this, 'active')}>Active</a>
            </li>
            <li>
              <a href="##" className={(this.props.showWay === 'completed') ? 'selected' : ''} onClick={this.props.filter.bind(this, 'completed')}>Completed</a>
            </li>
          </ul>
        </div>
        {clearBtn}
      </div>
    );
  }
}


export default Footer;