import React, { ReactElement } from 'react';

import { IButton as ButtonInterface, DEFAULT_VARIANT, ButtonStyled } from './ButtonStyled';

interface IButtonAttrs {
  className?: string;
}

export interface IButton extends ButtonInterface, IButtonAttrs {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  variant = DEFAULT_VARIANT,
  value,
  children,
  onClick,
  bold,
  uppercase,
  className,
}: IButton): ReactElement {
  return (
    <ButtonStyled variant={variant} onClick={onClick} bold={bold} uppercase={uppercase} className={className}>
      {children || value}
    </ButtonStyled>
  );
}
