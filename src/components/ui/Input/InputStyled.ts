import { HTMLProps } from 'react';
import styled from 'styled-components';

export interface IInput extends HTMLProps<HTMLInputElement> {
  error?: string;
}

export default styled.input<IInput>(
  ({
    theme: {
      input: {
        padding,
        borderRadius,
        typography: { fontFamily, fontSize, lineHeight },
        backgroundColor,
        color,
      },
      color: { black },
      typography: {
        textExtraSmall: { fontFamily: fontFamilyError, fontSize: fontSizeError, lineHeight: lineHeightError },
      },
    },
    error,
  }) => `
  padding: ${padding};
  border: none;
  border-radius: ${borderRadius}px;
  font-family: ${fontFamily};
  font-size: ${fontSize}px;
  line-height: ${lineHeight}px;
  background-color: ${backgroundColor};
  color: ${color};
  outline: none;
  &::placeholder {
    color: ${black};
  }
  ${
    error
      ? `
    &:before {
      content: ${error};
      color: red;
      font-family: ${fontFamilyError};
      font-size: ${fontSizeError}px;
      line-height: ${lineHeightError}px;
    }
    `
      : ''
  }
`,
);
