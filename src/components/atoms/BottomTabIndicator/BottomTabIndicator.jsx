import { Flex, theme } from '@styles';
import { bool, oneOf } from 'prop-types';
import React from 'react';

import { indicatorIconByVariant } from './BottomTabIndicator.layoutProps';

const BottomTabIndicator = ({ indicatorVariant, isIndicatorFocused }) => {
  const indicatorIcon = indicatorIconByVariant[indicatorVariant];

  return (
    <>
      {indicatorIcon[isIndicatorFocused]}
      <Flex
        backgroundColor={
          isIndicatorFocused ? theme.colors.electricViolet : theme.colors.white
        }
        borderRadius={10}
        bottom={0}
        height="5px"
        position="absolute"
        width="5px"
      />
    </>
  );
};

BottomTabIndicator.propTypes = {
  indicatorVariant: oneOf(['achievement', 'discover', 'library', 'profile'])
    .isRequired,
  isIndicatorFocused: bool.isRequired,
};

export default BottomTabIndicator;
