import styled from 'styled-components';
import { FaUserPlus } from 'react-icons/fa';

export const SectionTitle = styled.h2`
  margin: ${({ theme }) => theme.space[0]};

  font-size: ${({ theme }) => theme.fontSizes.l};
  text-align: center;
  text-transform: uppercase;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;

  padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[0]};
`;

export const AddContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[2]};
  padding-left: ${({ theme }) => theme.space[3]};
  padding-right: ${({ theme }) => theme.space[3]};

  color: ${({ theme }) => theme.colors.whiteBG};
  background-color: ${({ theme }) => theme.colors.addButtonBG};

  border-width: ${({ theme }) => theme.space[0]};
  border-radius: ${({ theme }) => theme.radii.generic};

  box-shadow: ${({ theme }) => theme.shadows.generic};

  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.backgroundColor},
    ${({ theme }) => theme.transitions.transform};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.addButtonHoveredBG};

    transform: scale(1.1);
  }
`;

export const AddUserIcon = styled(FaUserPlus)`
  fill: currentColor;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  opacity: ${({ shouldShown }) => (shouldShown ? 1 : 0)};
  visibility: ${({ shouldShown }) => (shouldShown ? 'initial' : 'hidden')};
  pointer-events: ${({ shouldShown }) => (shouldShown ? 'initial' : 'none')};

  transition: ${({ theme }) => theme.transitions.opacity},
    ${({ theme }) => theme.transitions.visibility};
`;
