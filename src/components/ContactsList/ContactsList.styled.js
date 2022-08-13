import styled from 'styled-components';
import {
  FaSortAlphaDown,
  FaSortAlphaUpAlt,
  FaSortNumericDown,
  FaSortNumericUpAlt,
  FaPhoneAlt,
  FaTimes,
  FaRegSadTear,
} from 'react-icons/fa';

export const ContactsTableBox = styled.div`
  min-width: ${({ theme }) => theme.sizes.contactsTableMin};
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.contactsTableMax};
  margin-left: auto;
  margin-right: auto;

  border: ${({ theme }) => theme.borders.light};
  border-radius: ${({ theme }) => theme.radii.generic};

  box-shadow: ${({ theme }) => theme.shadows.generic};

  overflow: hidden;
`;

export const ContactsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeadCell = styled.td`
  position: relative;

  padding: ${({ theme }) => theme.space[3]};

  text-align: center;

  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  color: ${({ theme }) => theme.colors.whiteText};
  background-color: ${({ theme }) => theme.colors.tableHead};

  &:not(:last-child) {
    border-right: ${({ theme }) => theme.borders.light};
  }
`;

export const SortByNameButton = styled.button`
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.space[2]};

  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ theme }) => theme.sizes.sortButton};

  color: ${({ theme }) => theme.colors.whiteText};
  background-color: ${({ theme }) => theme.colors.sortButtonBG};

  border-width: 0;

  cursor: pointer;

  transform: translateY(-50%);

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.transform};
`;

export const SotrByNameIconASC = styled(FaSortAlphaDown)`
  fill: currentColor;
`;

export const SotrByNameIconDSC = styled(FaSortAlphaUpAlt)`
  fill: currentColor;
`;

export const SortByPhoneButton = styled.button`
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.space[2]};

  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ theme }) => theme.sizes.sortButton};

  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.sortButtonBG};

  border-width: 0;

  cursor: pointer;

  transform: translateY(-50%);

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.transform};
`;

export const SotrByPhoneIconASC = styled(FaSortNumericDown)`
  fill: currentColor;
`;

export const SotrByPhoneIconDSC = styled(FaSortNumericUpAlt)`
  fill: currentColor;
`;

export const TableDataRow = styled.tr`
  background-color: ${({ theme, isLight }) =>
    isLight ? theme.colors.tableRowLight : theme.colors.tableRowDark};

  transition: ${({ theme }) => theme.transitions.backgroundColor};

  &:hover {
    background-color: ${({ theme, isLight }) =>
      isLight
        ? theme.colors.tableRowLightHovered
        : theme.colors.tableRowDarkHovered};
  }
`;

export const TableDataCell = styled.td`
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};

  font-size: ${({ theme }) => theme.fontSizes.s};

  color: ${({ theme }) => theme.colors.darkText};

  &:first-child {
    width: ${({ theme }) => theme.sizes.callButton};
    padding: ${({ theme }) => theme.space[2]};
  }

  &:nth-child(2) {
    border-right: ${({ theme }) => theme.borders.light};
  }

  &:nth-child(3) {
    text-align: right;
  }

  &:last-child {
    width: ${({ theme }) => theme.sizes.deleteButton};
    padding: ${({ theme }) => theme.space[2]};
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ theme }) => theme.sizes.deleteButton};
  height: ${({ theme }) => theme.sizes.deleteButton};

  color: ${({ theme }) => theme.colors.deleteButtonIcon};
  background-color: ${({ theme }) => theme.colors.deleteButtonBG};

  border-width: 0;

  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.transform};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.deleteButtonIconHovered};

    transform: scale(1.2);
  }
`;

export const DeleteIcon = styled(FaTimes)`
  fill: currentColor;
`;

export const PhoneLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ theme }) => theme.sizes.callButton};
  height: ${({ theme }) => theme.sizes.callButton};

  color: ${({ theme }) => theme.colors.phoneIcon};

  text-decoration: none;

  outline-offset: -1px;

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.transform};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.phoneIconHovered};

    transform: scale(1.2);
  }
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  fill: currentColor;
`;

export const TableDataCellEmpty = styled.td`
  padding: ${({ theme }) => theme.space[4]};

  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  background-color: ${({ theme }) => theme.colors.tableRowLight};

  color: ${({ theme }) => theme.colors.darkText};
`;

export const CenteredSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoResultsIcon = styled(FaRegSadTear)`
  margin-left: ${({ theme }) => theme.space[3]};

  fill: currentColor;
`;
