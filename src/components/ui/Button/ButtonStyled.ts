import { HTMLProps } from 'react';
import styled from 'styled-components';
import { TChildren, TTheme } from '../../../types';

export const THEME_VARIANT = 'variants';

export type TVariant = keyof TTheme['button'];

interface IButtonProps {
  variant?: TVariant;
  children?: TChildren;
  bold?: boolean;
  uppercase?: boolean;
}

export interface IButton extends HTMLProps<HTMLButtonElement>, IButtonProps {}

export const DEFAULT_VARIANT = 'default';

export const ButtonStyled = styled.button<IButton>(
  ({ variant = DEFAULT_VARIANT, theme: { button }, bold = false, uppercase = false }) => {
    const {
      [variant]: {
        typography: { fontFamily, fontFamilyBold, fontSize, lineHeight },
        color,
        backgroundColor,
        borderRadius,
        padding,
        hover: { backgroundColor: backgroundColorHover },
        active: { backgroundColor: backgroundColorActive },
      },
    } = button;

    return `
      background-color: ${backgroundColor};
      color: ${color};
      padding: ${padding};
      border: none;
      border-radius: ${borderRadius};
      font-family: ${bold ? fontFamilyBold : fontFamily};
      font-size: ${fontSize}rem;
      line-height: ${lineHeight}rem;
      text-transform: ${uppercase ? 'uppercase' : 'none'};
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      z-index: 1;
      text-align: center;
      outline: none;
      &:hover {
        background-color: ${backgroundColorHover};
      }
      &:active {
        background-color: ${backgroundColorActive};
      }
    `;
  },
);
