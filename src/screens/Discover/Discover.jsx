import { BannerCard, BookCard, DiscoverHeader } from '@atoms';
import { Flex, theme } from '@styles';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import Banner from '@pngs/banner/banner.png';
import Book from '@pngs/book/cover.png';
import { containerStyles } from './Discover.styles';
import { CardList } from '@molecules';

const books = [
  {
    id:'arengkjqre',
    titleText: 'His Her, Sugar, Mila and other',
    imageUri: Book,
  },
  {
    id:'ergekrmgleq',
    titleText: 'Stranded',
    imageUri: Book,
  },
  {
    id:'wprgfwr',
    titleText: "The Mafia Boss' S*x Maid",
    imageUri: Book,
  },
  {
    id:'wlekflwefn',
    titleText: "Ex with benefits;\nBlackmail",
    imageUri: Book,
  }
];

const banners = [
  {
    id: 'lwkernfkwfe',
    tag: 'Free',
    titleText: 'Special Event 1',
    imageUri: Banner,
  },
  {
    id: 'jwrbfwjrgwr',
    tag: 'Free',
    titleText: 'Special Event 2',
    imageUri: Banner,
  },
  {
    id: 'wlkrflwrfqa',
    tag: 'Free',
    titleText: 'Special Event 3',
    imageUri: Banner,
  }
];


const Discover = () => {
  const la = 1;

  return (
    <Flex as={SafeAreaView} backgroundColor={theme.colors.white} flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DiscoverHeader paddingX="20px" borderBottomColor={theme.colors.whisper} borderBottomWidth="1px" marginBottom="11px"/>
        <CardList cardVariant='banner' cards={banners} gap={16} scrollOffset={20} marginBottom="36px"/>
        <CardList cardVariant="book" cards={books} gap={16} scrollOffset={20} />
      </ScrollView>
    </Flex>
  );
};

export default Discover;
