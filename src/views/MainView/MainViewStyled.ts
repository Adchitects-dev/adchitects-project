import styled from 'styled-components';

export default styled.div(
  ({
    theme: {
      mainView: { backgroundColor },
    },
  }) => `
    width: 100%;
    background-color: ${backgroundColor};
  `,
);
