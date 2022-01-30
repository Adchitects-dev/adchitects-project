import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)(
  ({
    theme: {
      color: { black },
    },
  }) => `
  color: ${black};
  text-decoration: none;
  text-transform: capitalize;
`,
);
