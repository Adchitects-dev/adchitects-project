import { HTMLProps } from 'react';
import styled from 'styled-components';

export default styled.img<HTMLProps<HTMLImageElement>>(
  ({ width, height }) => `
    ${width ? `min-width: ${width}px;` : ''}
    ${height ? `min-height: ${height}px;` : ''}
  `,
);
