import styled from 'styled-components';

export const SectionTitle = styled.h2`
  margin: ${({ theme }) => theme.space[0]};

  font-size: ${({ theme }) => theme.fontSizes.l};
  text-align: center;
  text-transform: uppercase;
`;
