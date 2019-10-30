import 'react-app-polyfill/ie11';
import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Decoy, withDecoy } from '../';
import { AutoCounter, Counter } from './Counter';

const TitleWithDecoy = withDecoy('h1');
const AutoCounterWithDecoy = withDecoy(AutoCounter);
const AutoCounterWithDecoyAndAlternativeActivePropName = withDecoy(
  AutoCounter,
  {
    activePropName: 'decoy',
  }
);
const DecoyCounter = withDecoy(Counter);

const App = () => {
  const [areDecoysActive, setAreDecoysActive] = useState(false);

  return (
    <div className="App">
      <nav>
        <button onClick={() => setAreDecoysActive(!areDecoysActive)}>
          {`${areDecoysActive ? 'Dea' : 'A'}ctivate Decoys`}
        </button>
      </nav>
      <article data-are-decoys-active={areDecoysActive ? '' : null}>
        <TitleWithDecoy decoy-active={areDecoysActive} decoy-as="header">
          Decoy
        </TitleWithDecoy>
        <section>
          <DecoyCounter step={1} decoy-active={areDecoysActive} />
          <AutoCounterWithDecoy
            step={2}
            intervalDuration={200}
            decoy-active={areDecoysActive}
          />
          <AutoCounterWithDecoyAndAlternativeActivePropName
            step={3}
            decoy={areDecoysActive}
          />
          <Decoy active={areDecoysActive} as="aside">
            <Counter step={4} />
          </Decoy>
          <Decoy active={areDecoysActive} as="article">
            <AutoCounter step={5} />
          </Decoy>
        </section>
      </article>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
