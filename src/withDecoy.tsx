import React from 'react';
import { Decoy } from './Decoy';

function getDisplayName<P extends {}>(
  Component: React.ComponentType<P> | keyof JSX.IntrinsicElements
): string {
  return typeof Component === 'string'
    ? Component
    : Component.displayName || Component.name || 'Component';
}

interface IWithDecoyProps {
  [key: string]: any;
}

interface IWithStatusOptions {
  activePropName?: string;
  asPropName?: string;
}

export const withDecoy = <P extends {}>(
  Component: React.ComponentType<P> | keyof JSX.IntrinsicElements,
  { activePropName = 'decoy', asPropName = 'decoy-as' }: IWithStatusOptions = {}
) => {
  function WithDecoy(props: P & IWithDecoyProps) {
    const {
      [activePropName]: active,
      [asPropName]: as,
      ...componentProps
    } = props;

    return (
      <Decoy active={active} as={as}>
        <Component {...(componentProps as P)} />
      </Decoy>
    );
  }

  WithDecoy.displayName = `withDecoy(${getDisplayName(Component)})`;

  return WithDecoy;
};
