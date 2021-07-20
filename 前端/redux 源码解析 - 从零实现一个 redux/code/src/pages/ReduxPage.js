import React, { Component } from 'react';
import store from '../store';

export default class ReduxPage extends Component {
  componentDidMount() {
    // 在没有使用其他库配合前，暂时使用这种方式更新界面
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  add = () => {
    store.dispatch({ type: 'ADD' });
  };

  minus = () => {
    store.dispatch({ type: 'MINUS' });
  };

  render() {
    return (
      <div>
        ReduxPage
        <div>count: {store.getState()}</div>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={() => this.unsubscribe()}>unsubscribe</button>
      </div>
    );
  }
}