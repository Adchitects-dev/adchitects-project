import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)(
  ({
    theme: {
      link: { color },
    },
  }) => `
  color: ${color};
  text-decoration: none;
  text-transform: capitalize;
`,
);
