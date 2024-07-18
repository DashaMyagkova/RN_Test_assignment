import { STATIC_TEXT_CONTENT } from '@constants';
import { withFlexProps } from '@hocs';
import { Flex, Typography } from '@styles';
import SearchButtonIcon from '@svgs/search.svg';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const DiscoverHeader = () => {
  const handleSearchButtonPress = () => {};

  return (
    <>
      <Flex
        alignItems="flex-end"
        as={TouchableOpacity}
        marginBottom="14px"
        onPress={handleSearchButtonPress}
      >
        <SearchButtonIcon />
      </Flex>
      <Typography marginBottom="6px" variant="extraBold-s38-lh45">
        {STATIC_TEXT_CONTENT.DISCOVER}
      </Typography>
    </>
  );
};

export default withFlexProps(DiscoverHeader);
