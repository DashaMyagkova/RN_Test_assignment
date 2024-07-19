import { withFlexProps } from '@hocs';
import { Flex, theme, Typography } from '@styles';
import { func, string } from 'prop-types';
import React from 'react';
import { Pressable } from 'react-native';

const Button = ({ onButtonPress, titleText }) => (
  <Flex
    alignItems="center"
    as={Pressable}
    backgroundColor={theme.colors.electricViolet}
    borderRadius={200}
    onPress={onButtonPress}
    paddingY="18px"
    width="100%"
  >
    <Typography
      color={theme.colors.white}
      textAlign="center"
      variant="extraBold-s17-lh20"
    >
      {titleText}
    </Typography>
  </Flex>
);

Button.propTypes = {
  onButtonPress: func.isRequired,
  titleText: string.isRequired,
};

export default withFlexProps(Button);
