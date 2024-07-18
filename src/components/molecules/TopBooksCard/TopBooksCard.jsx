import { BookInfoPreview } from '@atoms';
import { images } from '@mocks/images';
import BookCover from '@pngs/book/bookCover.png';
import { useNavigation } from '@react-navigation/native';
import { readingSlice } from '@store';
import { Flex } from '@styles';
import { arrayOf, shape } from 'prop-types';
import React, { useMemo } from 'react';
import { Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDispatch } from 'react-redux';

import { imageStyle } from './TopBooksCard.styles';

const TopBooksCard = ({ books }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleBookCardPress = (book) => () => {
    dispatch(readingSlice.actions.setCurrentBook(book));
    navigation.navigate('BookStack', { screen: 'Reading' });
  };

  const memorizedBooks = useMemo(() => books, [books]);

  return memorizedBooks.map((book, index) => (
    <Flex
      key={book.id}
      alignItems="center"
      as={Pressable}
      flexDirection="row"
      onPress={handleBookCardPress(book)}
      {...(index !== memorizedBooks.length - 1 && {
        marginBottom: '16px',
      })}
    >
      <FastImage source={BookCover} style={imageStyle.bookCover} />
      <FastImage source={images[book.imageUri]} style={imageStyle.image} />
      <BookInfoPreview
        bookOrder={book.order}
        bookTag={book.tag}
        marginLeft="24px"
        readsAmount={book.readsAmount}
        titleText={book.titleText}
      />
    </Flex>
  ));
};

TopBooksCard.propTypes = {
  books: arrayOf(shape({})).isRequired,
};

export default TopBooksCard;
