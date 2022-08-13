import styled from 'styled-components';
import { FaPhoneAlt, FaTimes, FaRegSadTear } from 'react-icons/fa';

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
  padding: ${({ theme }) => theme.space[2]};

  text-align: center;

  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  color: ${({ theme }) => theme.colors.whiteText};
  background-color: ${({ theme }) => theme.colors.tableHead};

  &:nth-child(2) {
    border-right: ${({ theme }) => theme.borders.light};
  }
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
  padding: ${({ theme }) => theme.space[2]};

  text-align: center;

  font-size: ${({ theme }) => theme.fontSizes.s};

  color: ${({ theme }) => theme.colors.darkText};

  &:first-child {
    width: ${({ theme }) => theme.sizes.callButton};
  }

  &:nth-child(2) {
    border-right: ${({ theme }) => theme.borders.light};
  }

  &:last-child {
    width: ${({ theme }) => theme.sizes.deleteButton};
  }
`;

export const PhoneLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ theme }) => theme.sizes.callButton};
  height: ${({ theme }) => theme.sizes.callButton};

  color: ${({ theme }) => theme.colors.phoneIcon};

  text-decoration: none;

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
