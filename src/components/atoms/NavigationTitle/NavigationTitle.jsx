import { withFlexProps } from '@hocs';
import { Flex, Typography } from '@styles';
import ArrowRightIcon from '@svgs/arrow-right.svg';
import { string } from 'prop-types';
import React from 'react';
import { Pressable } from 'react-native';

const NavigationTitle = ({ navigationKey, titleText }) => {
  const handleNavigationTitleButtonPress = () => {
    // console.log(navigationKey);
  };

  return (
    <Flex
      alignItems="center"
      flexDirection="row"
      {...(navigationKey && {
        as: Pressable,
        onPress: handleNavigationTitleButtonPress,
      })}
    >
      <Typography marginRight="4px" variant="extraBold-s24-lh28">
        {titleText}
      </Typography>
      {navigationKey && <ArrowRightIcon />}
    </Flex>
  );
};

NavigationTitle.defaultProps = {
  navigationKey: null,
};

NavigationTitle.propTypes = {
  navigationKey: string,
  titleText: string.isRequired,
};

export default withFlexProps(NavigationTitle);
