import { Flex } from '@styles';
import React from 'react';

const withFlexProps = (Component) => (props) => (
  <Flex {...props}>
    <Component {...props} />
  </Flex>
);

export default withFlexProps;
