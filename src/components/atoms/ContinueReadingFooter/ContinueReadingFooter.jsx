import { STATIC_TEXT_CONTENT } from '@constants';
import { withFlexProps } from '@hocs';
import { images } from '@mocks/images';
import BookCover from '@pngs/book/bookCover.png';
import { useNavigation } from '@react-navigation/native';
import { Flex, theme, Typography } from '@styles';
import ArrowRightIcon from '@svgs/arrow-right.svg';
import { shape } from 'prop-types';
import React from 'react';
import { Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';

import { imageStyle } from './ContinueReadingFooter.styles';

const ContinueReadingFooter = ({ book }) => {
  const navigation = useNavigation();

  const handleContinueButtonPress = () => {
    navigation.navigate('BookStack', { screen: 'Reading' });
  };

  return (
    <Flex
      alignItems="center"
      as={Pressable}
      borderTopColor={theme.colors.whisper}
      borderTopWidth="1px"
      flexDirection="row"
      justifyContent="space-between"
      onPress={handleContinueButtonPress}
      paddingX="20px"
      paddingY="6.5px"
    >
      <Flex alignItems="center" flexDirection="row">
        <FastImage source={BookCover} style={imageStyle.bookCover} />
        <FastImage source={images[book.imageUri]} style={imageStyle.image} />
        <Flex marginLeft="12px">
          <Typography
            color={theme.colors.trout}
            marginBottom="2px"
            variant="medium-s12-lh14"
          >
            {STATIC_TEXT_CONTENT.CONTINUE_READING}
          </Typography>
          <Typography variant="semiBold-s14-lh16">{book.titleText}</Typography>
        </Flex>
      </Flex>
      <ArrowRightIcon />
    </Flex>
  );
};

ContinueReadingFooter.propTypes = {
  book: shape({}).isRequired,
};

export default withFlexProps(ContinueReadingFooter);
