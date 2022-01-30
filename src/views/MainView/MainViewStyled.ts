import styled from 'styled-components';
import { Text } from '../../components';

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

export const UpperSection = styled.section(
  ({
    theme: {
      size: { l: columnGapSize },
    },
  }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: ${columnGapSize}px;
  padding: 128px 172px 152px;
`,
);

export const MiddleSection = styled.section(
  ({
    theme: {
      color: { black },
    },
  }) => `
  background-color: ${black};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 132px 0 128px 172px;
`,
);

export const LowerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 128px 0;
`;

export const Quote = styled(Text)`
  margin: 68px 0 96px;
  width: 72vw;
  max-width: 1400px;
`;

export const Signature = styled(Text)`
  line-height: 29px;
`;
