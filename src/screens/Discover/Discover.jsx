import { ContinueReadingFooter, DiscoverHeader } from '@atoms';
import { groupDataByChunks } from '@helpers';
import { CardList } from '@organisms';
import { Flex, theme } from '@styles';
import React from 'react';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const { data } = require('@mocks/mock.json');

const Discover = () => {
  const currentBook = useSelector((state) => state.readingSlice.currentBook);

  const listType = {
    banner: (item) => (
      <CardList
        cards={item.items}
        cardVariant={item.type}
        gap={16}
        scrollOffset={20}
      />
    ),
    books: (item) => (
      <CardList
        cards={item.items}
        cardVariant={item.type}
        gap={16}
        listNavigationKey={item.listNavigationKey}
        scrollOffset={20}
        titleText={item.titleText}
      />
    ),
    topSeries: (item) => (
      <CardList
        cards={groupDataByChunks(item.items, 3)}
        cardVariant={item.type}
        gap={16}
        scrollOffset={20}
        titleText={item.titleText}
      />
    ),
  };

  const renderPageContent = (item) => {
    const getListComponent = listType[item.type];

    if (!getListComponent) {
      return <></>;
    }
    return getListComponent(item);
  };

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
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ index, item }) => (
            <Flex
              {...(index !== data.length - 1
                ? {
                    marginBottom: '36px',
                  }
                : {
                    marginBottom: '130px',
                  })}
            >
              {renderPageContent(item)}
            </Flex>
          )}
          {...(!!currentBook && {
            ListFooterComponent: <ContinueReadingFooter book={currentBook} />,
          })}
          scrollEnabled={false}
        />
      </ScrollView>
    </Flex>
  );
};

export default Discover;
