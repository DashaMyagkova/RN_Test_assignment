import { withFlexProps } from '@hocs';
import { useNavigation } from '@react-navigation/native';
import { Flex, theme, Typography } from '@styles';
import { string } from 'prop-types';
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
      <FastImage source={imageUri} style={imageStyle} />
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
  imageUri: string.isRequired,
  titleText: string.isRequired,
};

export default withFlexProps(BookCard);
