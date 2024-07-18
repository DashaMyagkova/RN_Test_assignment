import { DiscoverHeader } from '@atoms';
import { groupDataByChunks } from '@helpers';
import { CardList } from '@organisms';
import Banner from '@pngs/banner/banner.png';
import Book from '@pngs/book/cover.png';
import { Flex, theme } from '@styles';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const books = [
  {
    id: 'arengkjqre',
    imageUri: Book,
    titleText: 'His Her, Sugar, Mila and other',
  },
  {
    id: 'ergekrmgleq',
    imageUri: Book,
    titleText: 'Stranded',
  },
  {
    id: 'wprgfwr',
    imageUri: Book,
    titleText: "The Mafia Boss' S*x Maid",
  },
  {
    id: 'wlekflwefn',
    imageUri: Book,
    titleText: 'Ex with benefits;\nBlackmail',
  },
];

const banners = [
  {
    id: 'lwkernfkwfe',
    imageUri: Banner,
    tag: 'Free',
    titleText: 'Special Event 1',
  },
  {
    id: 'jwrbfwjrgwr',
    imageUri: Banner,
    tag: 'Free',
    titleText: 'Special Event 2',
  },
  {
    id: 'wlkrflwrfqa',
    imageUri: Banner,
    tag: 'Free',
    titleText: 'Special Event 3',
  },
];

const topSeries = [
  {
    id: 'wnfkjwnrfkjwn',
    imageUri: Book,
    order: 1,
    readsAmount: 476788,
    tag: 'Funfiction',
    titleText: 'Man of Her Dreams',
  },
  {
    id: 'ynetynew',
    imageUri: Book,
    order: 2,
    readsAmount: 432422,
    tag: 'Funfiction',
    titleText: 'Fall for Dylan Lemiere',
  },
  {
    id: 'dferqgegrafgr',
    imageUri: Book,
    order: 3,
    readsAmount: 273647,
    tag: 'Funfiction',
    titleText: 'Not in the Contact',
  },
  {
    id: 'wefwsqqwv',
    imageUri: Book,
    order: 4,
    readsAmount: 102923,
    tag: 'Funfiction',
    titleText: 'Last Enchantment',
  },
  {
    id: '4thjrothj',
    imageUri: Book,
    order: 5,
    readsAmount: 98309,
    tag: 'Funfiction',
    titleText: 'The Silent Rogue',
  },
  {
    id: 'krnmkjnrkbn',
    imageUri: Book,
    order: 6,
    readsAmount: 7934,
    tag: 'Funfiction',
    titleText: 'Princezone',
  },
  {
    id: 'testwef',
    imageUri: Book,
    order: 7,
    readsAmount: 79,
    tag: 'Funfiction',
    titleText: "The Alpha Demon's Kidnapped Mate",
  },
];

const Discover = () => {
  const formattedTopSeriesBooks = groupDataByChunks(topSeries, 3);

  return (
    <Flex
      as={SafeAreaView}
      backgroundColor={theme.colors.white}
      edges={['top']}
      flex={1}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <DiscoverHeader
          borderBottomColor={theme.colors.whisper}
          borderBottomWidth="1px"
          marginBottom="11px"
          paddingX="20px"
        />
        <CardList
          cards={banners}
          cardVariant="banner"
          gap={16}
          marginBottom="36px"
          scrollOffset={20}
        />
        <CardList
          cards={books}
          cardVariant="book"
          gap={16}
          listNavigationKey="trending"
          marginBottom="36px"
          scrollOffset={20}
          titleText="Trending Now"
        />
        <CardList
          cards={formattedTopSeriesBooks}
          cardVariant="topSeries"
          gap={16}
          scrollOffset={20}
          titleText="Top Series"
        />
      </ScrollView>
    </Flex>
  );
};

export default Discover;
