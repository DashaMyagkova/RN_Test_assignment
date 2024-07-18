import { withFlexProps } from '@hocs';
import { Flex, theme, Typography } from '@styles';
import { number, string } from 'prop-types';
import React from 'react';
import { Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';

import { imageStyle } from './BannerCard.styles';

const BannerCard = ({ bannerTag, imageUri, titleText }) => {
  const handleBannerCardPress = () => {};

  return (
    <Flex as={Pressable} onPress={handleBannerCardPress}>
      <Typography color={theme.colors.electricViolet} variant="bold-s12-lh14">
        {bannerTag.toUpperCase()}
      </Typography>
      <Typography paddingBottom="12px" variant="semiBold-s20-lh24">
        {titleText}
      </Typography>
      <FastImage source={imageUri} style={imageStyle} />
    </Flex>
  );
};

BannerCard.propTypes = {
  bannerTag: string.isRequired,
  imageUri: number.isRequired,
  titleText: string.isRequired,
};

export default withFlexProps(BannerCard);
