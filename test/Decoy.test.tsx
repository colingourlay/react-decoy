import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Decoy } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Decoy>
        <h1>Decoy</h1>
      </Decoy>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
