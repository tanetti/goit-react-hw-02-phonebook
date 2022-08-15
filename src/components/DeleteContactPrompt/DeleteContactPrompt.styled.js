import styled from 'styled-components';

export const PromptContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  min-width: ${({ theme }) => theme.sizes.addFormMin};
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.addFormMax};
  padding: ${({ theme }) => theme.space[5]};

  background-color: ${({ theme }) => theme.colors.whiteBG};

  border: ${({ theme }) => theme.borders.accentTransparent};
  border-radius: ${({ theme }) => theme.radii.generic};

  opacity: ${({ shouldShown }) => (shouldShown ? 1 : 0)};

  pointer-events: ${({ shouldShown }) => (shouldShown ? 'initial' : 'none')};

  transform: translate(-50%, -50%)
    scale(${({ shouldShown }) => (shouldShown ? 1 : 2)});

  transition: ${({ theme }) => theme.transitions.opacity},
    ${({ theme }) => theme.transitions.transform};
`;
