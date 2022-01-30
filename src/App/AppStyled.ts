import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle(
  ({
    theme: {
      color: { white, black },
    },
  }) => `
    html {
      font-size: 6.25%;
      font-family: montserrat-regular, sans-serif;
      body {
        margin: 0;
        padding: 0;
        color: ${black};
        background-color: ${white};
      }
    }
    * {
      box-sizing: border-box;
    }
  `,
);

export const ContentStyled = styled.div``;
