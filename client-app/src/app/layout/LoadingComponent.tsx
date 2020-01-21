//This file is responsible for the dimmer that is used that something
//is loading but not the whole page, only a component
import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoadingComponent: React.FC<{ inverted?: boolean; content?: string }> = ({
  inverted = true,
  content
}) => {
  return (
    <Dimmer active inverted={inverted}>
      <Loader content={content} />
    </Dimmer>
  );
};

export default LoadingComponent;
