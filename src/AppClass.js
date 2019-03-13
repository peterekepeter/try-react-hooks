import React, { Component } from 'react';
import { store } from './SomeStore';

export class AppClass extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.handleStoreUpdate = this.handleStoreUpdate.bind(this);
  }
  componentDidMount() {
    store.subscribe(this.handleStoreUpdate);
  }
  componentWillUnmount() {
    store.unsubscribe(this.handleStoreUpdate);
  }
  handleStoreUpdate() {
    this.handleIncrement();
  }
  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (<article>
      <h1>Application with Class</h1>
      <div>Count: {this.state.count}</div>
      <button onClick={this.handleIncrement.bind(this)}>Increment</button>
    </article>);
  }
}
