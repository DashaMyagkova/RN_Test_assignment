import { BannerCard, BookCard, NavigationTitle } from '@atoms';
import { withFlexProps } from '@hocs';
import { TopBooksCard } from '@molecules';
import { Flex } from '@styles';
import { arrayOf, number, oneOf, shape, string } from 'prop-types';
import React from 'react';
import { FlatList, useWindowDimensions } from 'react-native';

const CardList = ({
  cardVariant,
  cards,
  gap,
  listNavigationKey,
  scrollOffset,
  titleText,
}) => {
  const { width: windowWidth } = useWindowDimensions();

  const snapToInterval = scrollOffset
    ? windowWidth - scrollOffset * 2 + gap
    : null;

  const cardWidth =
    cardVariant === 'books'
      ? (windowWidth - scrollOffset * 2) / 2 - gap / 2
      : windowWidth - scrollOffset * 2;

  const cardType = {
    banner: (card) => (
      <BannerCard
        bannerTag={card.tag}
        imageUri={card.imageUri}
        titleText={card.titleText}
      />
    ),
    books: (card) => <BookCard book={card} />,
    topSeries: (card) => <TopBooksCard books={card} />,
  };

  const renderCardComponent = (card) => {
    const getCardComponent = cardType[cardVariant];

    if (!getCardComponent) {
      return <></>;
    }
    return getCardComponent(card);
  };

  return (
    <>
      {titleText && (
        <NavigationTitle
          navigationKey={listNavigationKey}
          paddingX="20px"
          titleText={titleText}
        />
      )}
      <FlatList
        bounces={false}
        contentContainerStyle={{
          paddingLeft: scrollOffset,
          paddingRight: scrollOffset,
        }}
        data={cards}
        decelerationRate={0}
        horizontal
        keyExtractor={({ id }) => id}
        renderItem={({ index, item }) => (
          <Flex
            width={cardWidth}
            {...(index !== cards.length - 1 && {
              marginRight: `${gap}px`,
            })}
          >
            {renderCardComponent(
              cardVariant === 'topSeries' ? item.chunk : item
            )}
          </Flex>
        )}
        showsHorizontalScrollIndicator={false}
        snapToInterval={snapToInterval}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />
    </>
  );
};

CardList.defaultProps = {
  listNavigationKey: null,
  titleText: null,
};

CardList.propTypes = {
  cardVariant: oneOf(['books', 'banner', 'topSeries']).isRequired,
  cards: arrayOf(shape({})).isRequired,
  gap: number.isRequired,
  listNavigationKey: string,
  scrollOffset: number.isRequired,
  titleText: string,
};

export default withFlexProps(CardList);
