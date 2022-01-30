import styled from 'styled-components';

export default styled.div(
  ({
    theme: {
      size: { l: paddingVertical },
    },
  }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${paddingVertical}px 64px;
`,
);

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 48px;
  margin-left: 97px;
`;
