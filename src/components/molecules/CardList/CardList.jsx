import { BannerCard, BookCard } from '@atoms';
import { withFlexProps } from '@hocs';
import { Flex } from '@styles';
import { arrayOf, instanceOf, number, oneOf, shape } from 'prop-types';
import React from 'react';
import { FlatList, useWindowDimensions } from 'react-native';

const CardList = ({ cardListRef, cardVariant, cards, gap, scrollOffset }) => {
  const { width: windowWidth } = useWindowDimensions();

  const snapToInterval = scrollOffset
    ? windowWidth - scrollOffset * 2 + gap
    : null;

  const cardWidth =
    cardVariant === 'book'
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
    book: (card) => (
      <BookCard imageUri={card.imageUri} titleText={card.titleText} />
    ),
  };

  const renderCardComponent = (card) => {
    const getCardComponent = cardType[cardVariant];

    if (!getCardComponent) {
      return <></>;
    }
    return getCardComponent(card);
  };

  return (
    <FlatList
      ref={cardListRef}
      bounces={false}
      contentContainerStyle={{
        paddingLeft: scrollOffset,
        paddingRight: scrollOffset,
      }}
      data={cards}
      decelerationRate={0}
      horizontal
      keyExtractor={({ id }) => id}
      renderItem={({ index, item: card }) => (
        <Flex
          width={cardWidth}
          {...(index !== cards.length - 1 && {
            marginRight: `${gap}px`,
          })}
        >
          {renderCardComponent(card)}
        </Flex>
      )}
      showsHorizontalScrollIndicator={false}
      snapToInterval={snapToInterval}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 50,
      }}
    />
  );
};

CardList.defaultProps = {
  cardListRef: null,
};

CardList.propTypes = {
  cardListRef: shape({ current: instanceOf(FlatList) }),
  cardVariant: oneOf(['book', 'banner']).isRequired,
  cards: arrayOf(shape({})).isRequired,
  gap: number.isRequired,
  scrollOffset: number.isRequired,
};

export default withFlexProps(CardList);
