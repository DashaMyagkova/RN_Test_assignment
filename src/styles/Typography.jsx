import React from 'react';
import { Text } from 'react-native';
import styled, { css } from 'styled-components/native';
import {
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
  variant,
} from 'styled-system';

export const Typography = styled((props) => (
  <Text {...props} maxFontSizeMultiplier={1} />
))`
  ${({ textDecoration }) => css`
    text-decoration: ${textDecoration};

    ${variant({
      variants: {
        'bold-s12-lh14': {
          fontFamily: 'AlbertSans-Bold',
          fontSize: '12px',
          lineHeight: '14.4px',
        },
        'bold-s38-lh45': {
          fontFamily: 'AlbertSans-Bold',
          fontSize: '38px',
          lineHeight: '45.6px',
        },
        'extraBold-s17-lh20': {
          fontFamily: 'AlbertSans-ExtraBold',
          fontSize: '17px',
          lineHeight: '20.4px',
        },
        'extraBold-s22-lh26': {
          fontFamily: 'AlbertSans-ExtraBold',
          fontSize: '22px',
          lineHeight: '26.4px',
        },
        'extraBold-s24-lh28': {
          fontFamily: 'AlbertSans-ExtraBold',
          fontSize: '24px',
          lineHeight: '28.8px',
        },
        'extraBold-s38-lh45': {
          fontFamily: 'AlbertSans-ExtraBold',
          fontSize: '38px',
          lineHeight: '45.6px',
        },
        'georgia-s16-lh24': {
          fontFamily: 'Georgia',
          fontSize: '16px',
          lineHeight: '24px',
        },
        'medium-s12-lh14': {
          fontFamily: 'AlbertSans-Medium',
          fontSize: '12px',
          lineHeight: '14.4px',
        },
        'medium-s13-lh15': {
          fontFamily: 'AlbertSans-Medium',
          fontSize: '13px',
          lineHeight: '15.6px',
        },
        'regular-s13-lh15': {
          fontFamily: 'AlbertSans-Regular',
          fontSize: '13px',
          lineHeight: '15.6px',
        },
        'semiBold-s14-lh16': {
          fontFamily: 'AlbertSans-SemiBold',
          fontSize: '14px',
          lineHeight: '16.8px',
        },
        'semiBold-s15-lh18': {
          fontFamily: 'AlbertSans-SemiBold',
          fontSize: '15px',
          lineHeight: '18px',
        },
        'semiBold-s20-lh24': {
          fontFamily: 'AlbertSans-SemiBold',
          fontSize: '20px',
          lineHeight: '24px',
        },
      },
    })}

    ${border};
    ${color};
    ${flexbox};
    ${layout};
    ${position};
    ${space};
    ${typography};
  `}
`;
