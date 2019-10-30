import { MutableRefObject, useEffect, useRef } from 'react';

export default function useInterval(callback: Function, delay: number) {
  const savedCallback: MutableRefObject<Function | undefined> = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
