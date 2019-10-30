import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withDecoy } from '../src';

describe('it', () => {
  it('renders a wrapped intrinsic element component without crashing', () => {
    const div = document.createElement('div');
    const DecoyHeader = withDecoy('header');
    ReactDOM.render(
      <DecoyHeader>
        <h1>Decoy</h1>
      </DecoyHeader>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a wrapped function component without crashing', () => {
    const div = document.createElement('div');
    const DecoyHeader = withDecoy(({ children }) => (
      <header>{children}</header>
    ));
    ReactDOM.render(
      <DecoyHeader>
        <h1>Decoy</h1>
      </DecoyHeader>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
