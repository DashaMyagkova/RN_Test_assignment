import { MIN_CHAPTER_NUMBER } from '@constants';
import { withFlexProps } from '@hocs';
import { images } from '@mocks/images';
import BookCover from '@pngs/book/bookCover.png';
import { useNavigation } from '@react-navigation/native';
import { readingSlice } from '@store';
import { Flex, theme, Typography } from '@styles';
import { shape } from 'prop-types';
import React from 'react';
import { Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDispatch, useSelector } from 'react-redux';

import { imageStyle } from './BookCard.styles';

const BookCard = ({ book }) => {
  const chapterByBookId = useSelector(
    (state) => state.readingSlice.chapterByBookId
  );

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleBookCardPress = () => {
    dispatch(readingSlice.actions.setCurrentBook(book));
    if (!Object.keys(chapterByBookId).includes(book.id)) {
      dispatch(
        readingSlice.actions.setChapterByBookId({
          [book.id]: MIN_CHAPTER_NUMBER,
        })
      );
    }

    navigation.navigate('BookStack', { screen: 'Reading' });
  };

  return (
    <Flex as={Pressable} onPress={handleBookCardPress}>
      <FastImage source={BookCover} style={imageStyle.bookCover} />
      <FastImage source={images[book.imageUri]} style={imageStyle.image} />
      <Typography
        color={theme.colors.waterloo}
        flex={1}
        paddingTop="7px"
        variant="medium-s13-lh15"
      >
        {book.titleText}
      </Typography>
    </Flex>
  );
};

BookCard.propTypes = {
  book: shape({}).isRequired,
};

export default withFlexProps(BookCard);
