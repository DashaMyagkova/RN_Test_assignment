import { convertReadsAmount } from '@helpers';
import { withFlexProps } from '@hocs';
import { Flex, theme, Typography } from '@styles';
import { number, string } from 'prop-types';
import React from 'react';

const BookInfoPreview = ({ bookOrder, bookTag, readsAmount, titleText }) => (
  <Flex alignItems="center" flexDirection="row" justifyContent="space-between">
    <Typography
      color={theme.colors.waterloo}
      marginRight="24px"
      variant="bold-s38-lh45"
    >
      {bookOrder}
    </Typography>
    <Flex>
      <Typography
        color={theme.colors.electricViolet}
        marginBottom="3px"
        variant="bold-s12-lh14"
      >
        {bookTag.toUpperCase()}
      </Typography>
      <Typography
        marginBottom="3px"
        variant="semiBold-s15-lh18"
        {...(titleText.length > 25 && { width: '80%' })}
      >
        {titleText}
      </Typography>
      <Typography color={theme.colors.waterloo} variant="regular-s13-lh15">
        {convertReadsAmount(readsAmount)}
      </Typography>
    </Flex>
  </Flex>
);

BookInfoPreview.propTypes = {
  bookOrder: number.isRequired,
  bookTag: string.isRequired,
  readsAmount: number.isRequired,
  titleText: string.isRequired,
};

export default withFlexProps(BookInfoPreview);
