import styled from 'styled-components';

export default styled.div(
  ({
    theme: {
      header: { padding },
    },
  }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${padding};
`,
);

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinksWrapper = styled.div(
  ({
    theme: {
      header: { linksMargin },
    },
  }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 48px;
  margin-left: ${linksMargin}px;
`,
);
