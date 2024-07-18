import { Flex, theme } from '@styles';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Reading = () => (
  <Flex
    as={SafeAreaView}
    backgroundColor={theme.colors.white}
    edges={['top']}
    flex={1}
  >
    <View />
  </Flex>
);

export default Reading;
