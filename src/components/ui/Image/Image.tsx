import React, { HTMLProps } from 'react';
import ImageStyled from './ImageStyled';

export default function Image({ src, width = 200, height = 200, alt }: HTMLProps<HTMLImageElement>): JSX.Element {
  return <ImageStyled src={src} width={width} height={height} alt={alt} />;
}
