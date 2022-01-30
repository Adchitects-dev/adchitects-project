import React, { ReactElement } from 'react';
import { TTheme } from '../../../styled';
import Text from '../Text';
import LinkStyled from './LinkStyled';

export interface ILink {
  to: string;
  value: string;
  color?: keyof TTheme['color'];
}

export default function LinkComponent({ to, value, color = 'black' }: ILink): ReactElement {
  return (
    <LinkStyled to={to}>
      <Text typography="textSmall" color={color}>
        {value}
      </Text>
    </LinkStyled>
  );
}
