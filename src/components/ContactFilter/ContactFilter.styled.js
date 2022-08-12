import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const FilterContainer = styled.label`
  position: relative;

  color: ${({ theme }) => theme.colors.searchIcon};

  cursor: text;

  transition: ${({ theme }) => theme.transitions.transform},
    ${({ theme }) => theme.transitions.color};

  &:focus-within,
  &:hover {
    color: ${({ theme }) => theme.colors.searchIconHovered};

    transform: scale(1.05);
  }
`;

export const FilterField = styled.input`
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  padding-left: ${({ theme }) => theme.space[5]};

  border: ${({ theme }) => theme.borders.generic};
  border-radius: ${({ theme }) => theme.radii.generic};

  box-shadow: ${({ theme }) => theme.shadows.generic};

  outline: transparent;

  transition: ${({ theme }) => theme.transitions.borderColor},
    ${({ theme }) => theme.transitions.boxShadow};

  &:hover,
  &:focus {
    border: ${({ theme }) => theme.borders.genericHovered};
    box-shadow: ${({ theme }) => theme.shadows.genericHovered};
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.space[3]};

  transform: translateY(-50%);

  fill: currentColor;
`;
