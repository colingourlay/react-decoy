import React, { useLayoutEffect, useRef } from 'react';

function activeLayoutEffect(el?: Element) {
  if (!el) {
    return;
  }

  const cloneEl = el.cloneNode(true);
  const parentEl = el.parentElement;

  if (parentEl) {
    parentEl.insertBefore(cloneEl, el);
    parentEl.removeChild(el);
  }

  return () => {
    if (parentEl) {
      parentEl.insertBefore(el, cloneEl);
      parentEl.removeChild(cloneEl);
    }
  };
}

interface IDecoyProps {
  active?: boolean;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

export function Decoy({ active = false, as = 'div', children }: IDecoyProps) {
  const ref = useRef();

  useLayoutEffect(() => {
    if (!active) {
      return;
    }

    return activeLayoutEffect(ref.current);
  }, [active]);

  return React.createElement(as, { children, ref });
}
