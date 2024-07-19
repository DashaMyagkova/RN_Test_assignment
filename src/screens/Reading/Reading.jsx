import { Button, ReadingFooter, ReadingHeader } from '@atoms';
import {
  MAX_CHAPTER_NUMBER,
  MIN_CHAPTER_NUMBER,
  STATIC_TEXT_CONTENT,
} from '@constants';
import { readingSlice } from '@store';
import { Flex, theme, Typography } from '@styles';
import React, { useEffect, useMemo, useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

const { data } = require('@mocks/chapters.json');

const Reading = () => {
  const currentBook = useSelector((state) => state.readingSlice.currentBook);
  const chapterByBookId = useSelector(
    (state) => state.readingSlice.chapterByBookId
  );

  const dispatch = useDispatch();
  const scrollViewRef = useRef();

  const handleNextChapterButtonPress = () => {
    dispatch(
      readingSlice.actions.setChapterByBookId({
        [currentBook.id]: chapterByBookId[currentBook.id] + 1,
      })
    );
  };

  const handlePreviousChapterButtonPress = () => {
    dispatch(
      readingSlice.actions.setChapterByBookId({
        [currentBook.id]: chapterByBookId[currentBook.id] - 1,
      })
    );
  };

  const chapterContent = useMemo(
    () => data[chapterByBookId[currentBook.id] - 1],
    [chapterByBookId, currentBook.id]
  );

  useEffect(() => {
    scrollViewRef.current?.scrollTo({
      animated: false,
      y: 0,
    });
  }, [chapterContent]);

  return (
    <Flex
      as={SafeAreaView}
      backgroundColor={theme.colors.white}
      edges={['top']}
      flex={1}
    >
      <ReadingHeader
        borderBottomColor={theme.colors.whisper}
        borderBottomWidth="1px"
        chapterNumber={chapterByBookId[currentBook.id]}
        marginBottom="10px"
        paddingX="20px"
      />
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
        <Typography
          marginBottom="62px"
          paddingX="20px"
          variant="georgia-s16-lh24"
        >
          {chapterContent}
        </Typography>
        {chapterByBookId[currentBook.id] !== MAX_CHAPTER_NUMBER && (
          <Button
            marginBottom="20px"
            onButtonPress={handleNextChapterButtonPress}
            paddingX="20px"
            titleText={STATIC_TEXT_CONTENT.NEXT_CHAPTER}
          />
        )}
      </ScrollView>
      <ReadingFooter
        leftNavigationButtonDisabled={
          chapterByBookId[currentBook.id] === MIN_CHAPTER_NUMBER
        }
        onLeftNavigationButtonPress={handlePreviousChapterButtonPress}
        onRightNavigationButtonPress={handleNextChapterButtonPress}
        rightNavigationButtonDisabled={
          chapterByBookId[currentBook.id] === MAX_CHAPTER_NUMBER
        }
      />
    </Flex>
  );
};

export default Reading;
