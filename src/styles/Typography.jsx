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

import { theme } from './theme';

export const Typography = styled((props) => (
  <Text {...props} allowFontScaling={false} maxFontSizeMultiplier={1} />
))`
  ${({ textColor, textDecoration }) => css`
    text-decoration: ${textDecoration};
    color: ${textColor || theme.colors.cinder};

    ${variant({
      variants: {
        'bold-s12-lh14': {
          fontFamily: 'AlbertSans',
          fontSize: '12px',
          fontWeight: 700,
          lineHeight: '14.4px',
        },
        'bold-s38-lh45': {
          fontFamily: 'AlbertSans',
          fontSize: '38px',
          fontWeight: 700,
          letterSpacing: '-1.7px',
          lineHeight: '45.6px',
        },
        'extraBold-s17-lh20': {
          fontFamily: 'AlbertSans',
          fontSize: '17px',
          fontWeight: 800,
          lineHeight: '20.4px',
        },
        'extraBold-s22-lh26': {
          fontFamily: 'AlbertSans',
          fontSize: '22px',
          fontWeight: 800,
          lineHeight: '26.4px',
        },
        'extraBold-s24-lh28': {
          fontFamily: 'AlbertSans',
          fontSize: '24px',
          fontWeight: 800,
          letterSpacing: '-0.68px',
          lineHeight: '28.8px',
        },
        'extraBold-s38-lh45': {
          fontFamily: 'AlbertSans',
          fontSize: '38px',
          fontWeight: 800,
          letterSpacing: '-1.5px',
          lineHeight: '45.6px',
        },
        'georgia-s16-lh24': {
          fontFamily: 'Georgia',
          fontSize: '16px',
          lineHeight: '24px',
        },
        'medium-s12-lh14': {
          fontFamily: 'AlbertSans',
          fontSize: '12px',
          fontWeight: 500,
          lineHeight: '14.4px',
        },
        'medium-s13-lh15': {
          fontFamily: 'AlbertSans',
          fontSize: '13px',
          fontWeight: 500,
          lineHeight: '15.6px',
        },
        'regular-s13-lh15': {
          fontFamily: 'AlbertSans',
          fontSize: '13px',
          fontWeight: 400,
          lineHeight: '15.6px',
        },
        'semiBold-s14-lh16': {
          fontFamily: 'AlbertSans',
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: '16.8px',
        },
        'semiBold-s15-lh18': {
          fontFamily: 'AlbertSans',
          fontSize: '15px',
          fontWeight: 600,
          lineHeight: '18px',
        },
        'semiBold-s20-lh24': {
          fontFamily: 'AlbertSans',
          fontSize: '20px',
          fontWeight: 600,
          letterSpacing: '-0.42px',
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
