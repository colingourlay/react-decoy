import * as React from 'react';
import { Component, useState } from 'react';
import useInterval from './use-interval';

interface CounterProps {
  step: number;
}

export class Counter extends Component<CounterProps> {
  state = {
    count: 0,
  };

  render() {
    const { step } = this.props;
    const { count } = this.state;

    return (
      <button onClick={() => this.setState({ count: count + step || 1 })}>
        {this.state.count}
      </button>
    );
  }
}

export function AutoCounter({ step = 1, intervalDuration = 1000 }) {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + step);

  useInterval(increment, intervalDuration);

  return <button onClick={increment}>{count}</button>;
}
