import styled from 'styled-components';
import { TTheme } from '../../../types';

export interface IText {
  typography?: keyof TTheme['typography'];
  bold?: boolean;
  uppercase?: boolean;
  color?: keyof TTheme['color'];
  className?: string;
}

interface IAttrs {
  className?: string;
}

export default styled.span.attrs<IAttrs>({})<IText>(
  ({
    typography: typographyProp = 'textSmall',
    bold = false,
    uppercase = false,
    theme: { typography, color },
    color: colorProp,
  }) => {
    const {
      [typographyProp]: { fontFamily, fontFamilyBold, fontSize, lineHeight },
    } = typography;

    return `
      font-family: ${bold ? fontFamilyBold : fontFamily};
      font-size: ${fontSize}rem;
      line-height: ${lineHeight}rem;
      text-transform: ${uppercase ? 'uppercase' : ''};
      ${colorProp ? `color: ${color[colorProp]};` : ''}
    `;
  },
);
