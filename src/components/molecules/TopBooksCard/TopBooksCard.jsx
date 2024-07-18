import { BookInfoPreview } from '@atoms';
import BookCover from '@pngs/book/bookCover.png';
import { useNavigation } from '@react-navigation/native';
import { Flex } from '@styles';
import { arrayOf, shape } from 'prop-types';
import React, { useMemo } from 'react';
import { Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';

import { imageStyle } from './TopBooksCard.styles';

const TopBooksCard = ({ books }) => {
  const navigation = useNavigation();

  const handleBookCardPress = () => {
    navigation.navigate('BookStack', { screen: 'Reading' });
  };

  const memorizedBooks = useMemo(() => books, [books]);

  return memorizedBooks.map((book, index) => (
    <Flex
      key={book.id}
      alignItems="center"
      as={Pressable}
      flexDirection="row"
      onPress={handleBookCardPress}
      {...(index !== memorizedBooks.length - 1 && {
        marginBottom: '16px',
      })}
    >
      <FastImage source={BookCover} style={imageStyle.bookCover} />
      <FastImage source={book.imageUri} style={imageStyle.image} />
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
