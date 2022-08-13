import styled from 'styled-components';
import { FaUserPlus } from 'react-icons/fa';

export const HeaderContainer = styled.header`
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: ${({ theme }) => theme.sizes.headerH};
  padding: ${({ theme }) => theme.space[4]};

  background-color: ${({ theme }) => theme.colors.lightTransparentBG};
  backdrop-filter: blur(4px);

  border-bottom: ${({ theme }) => theme.borders.light};

  box-shadow: ${({ theme }) => theme.shadows.generic};
`;

export const AddContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ theme }) => theme.sizes.filterFieldH};
  margin-right: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[2]};
  padding-left: ${({ theme }) => theme.space[3]};
  padding-right: ${({ theme }) => theme.space[3]};

  color: ${({ theme }) => theme.colors.whiteBG};
  background-color: ${({ theme }) => theme.colors.addButtonBG};

  border: ${({ theme }) => theme.borders.generic};
  border-radius: ${({ theme }) => theme.radii.generic};

  box-shadow: ${({ theme }) => theme.shadows.generic};

  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.backgroundColor},
    ${({ theme }) => theme.transitions.transform},
    ${({ theme }) => theme.transitions.borderColor},
    ${({ theme }) => theme.transitions.boxShadow};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.addButtonHovered};
    background-color: ${({ theme }) => theme.colors.addButtonHoveredBG};

    border: ${({ theme }) => theme.borders.genericHovered};

    box-shadow: ${({ theme }) => theme.shadows.genericHovered};

    transform: scale(1.1);
  }
`;

export const AddContactIcon = styled(FaUserPlus)`
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

export const SectionTitle = styled.h2`
  margin: ${({ theme }) => theme.space[0]};
  margin-bottom: ${({ theme }) => theme.space[5]};

  font-size: ${({ theme }) => theme.fontSizes.l};
  text-align: center;
  text-transform: uppercase;
`;
