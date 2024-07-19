import { STATIC_TEXT_CONTENT } from '@constants';
import { withFlexProps } from '@hocs';
import { useNavigation } from '@react-navigation/native';
import { Flex, Typography } from '@styles';
import CloseButtonIcon from '@svgs/close.svg';
import { number } from 'prop-types';
import React from 'react';
import { Pressable } from 'react-native';

const ReadingHeader = ({ chapterNumber }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Flex
      alignItems="center"
      flexDirection="row"
      justifyContent="center"
      minHeight="52px"
      paddingBottom="14px"
    >
      <Flex as={Pressable} minWidth="32px" onPress={handleGoBack}>
        <CloseButtonIcon />
      </Flex>
      <Flex alignItems="center" flex={1}>
        <Typography textAlign="center" variant="extraBold-s22-lh26">
          {`${STATIC_TEXT_CONTENT.CHAPTER} ${chapterNumber}`}
        </Typography>
      </Flex>
      <Flex minWidth="32px" />
    </Flex>
  );
};

ReadingHeader.propTypes = {
  chapterNumber: number.isRequired,
};

export default withFlexProps(ReadingHeader);
