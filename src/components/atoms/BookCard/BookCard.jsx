import { withFlexProps } from '@hocs';
import BookCover from '@pngs/book/bookCover.png';
import { useNavigation } from '@react-navigation/native';
import { Flex, theme, Typography } from '@styles';
import { number, string } from 'prop-types';
import React from 'react';
import { Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';

import { imageStyle } from './BookCard.styles';

const BookCard = ({ imageUri, titleText }) => {
  const navigation = useNavigation();

  const handleBookCardPress = () => {
    navigation.navigate('BookStack', { screen: 'Reading' });
  };

  return (
    <Flex as={Pressable} onPress={handleBookCardPress}>
      <FastImage source={BookCover} style={imageStyle.bookCover} />
      <FastImage source={imageUri} style={imageStyle.image} />
      <Typography
        color={theme.colors.waterloo}
        flex={1}
        paddingTop="7px"
        variant="medium-s13-lh15"
      >
        {titleText}
      </Typography>
    </Flex>
  );
};

BookCard.propTypes = {
  imageUri: number.isRequired,
  titleText: string.isRequired,
};

export default withFlexProps(BookCard);
