import PropTypes from 'prop-types';
import { prepareFilteredContacts, normalizeNumberForCallLink } from 'utils';
import { theme } from 'constants/theme';
import {
  ContactsTableBox,
  ContactsTable,
  TableHeadCell,
  SortByNameButton,
  SotrByNameIconASC,
  SotrByNameIconDSC,
  SortByPhoneButton,
  SotrByPhoneIconASC,
  SotrByPhoneIconDSC,
  TableDataRow,
  TableDataCell,
  DeleteButton,
  DeleteIcon,
  PhoneLink,
  PhoneIcon,
  TableDataCellEmpty,
  CenteredSpan,
  NoResultsIcon,
} from './ContactsList.styled';

export const ContactsList = ({ contacts, filter, onContactDelete }) => {
  const preparedContacts = prepareFilteredContacts(contacts, filter);

  return (
    <ContactsTableBox>
      <ContactsTable>
        <thead>
          <tr>
            <TableHeadCell colSpan={2}>
              Contact name
              <SortByNameButton type="button">
                <SotrByNameIconASC size={theme.sizes.sortButtonIcon} />
              </SortByNameButton>
            </TableHeadCell>
            <TableHeadCell colSpan={2}>
              Phone number
              <SortByPhoneButton type="button">
                <SotrByPhoneIconASC size={theme.sizes.sortButtonIcon} />
              </SortByPhoneButton>
            </TableHeadCell>
          </tr>
        </thead>

        <tbody>
          {preparedContacts.length ? (
            preparedContacts.map(({ id, name, number }, idx) => (
              <TableDataRow key={id} isLight={idx % 2 === 0}>
                <TableDataCell>
                  <DeleteButton
                    type="button"
                    value={id}
                    aria-label={`Delete contact ${name}`}
                    onClick={onContactDelete}
                  >
                    <DeleteIcon size={theme.sizes.deleteButtonIcon} />
                  </DeleteButton>
                </TableDataCell>
                <TableDataCell>{name}</TableDataCell>
                <TableDataCell>{number}</TableDataCell>
                <TableDataCell>
                  <PhoneLink
                    href={`tel:${normalizeNumberForCallLink(number)}`}
                    aria-label={`Call ${name}`}
                  >
                    <PhoneIcon size={theme.sizes.callButtonIcon} />
                  </PhoneLink>
                </TableDataCell>
              </TableDataRow>
            ))
          ) : filter ? (
            <tr>
              <TableDataCellEmpty colSpan={4}>
                <CenteredSpan>
                  Nothing was found
                  <NoResultsIcon size={theme.sizes.noResultIcon} />
                </CenteredSpan>
              </TableDataCellEmpty>
            </tr>
          ) : (
            <tr>
              <TableDataCellEmpty colSpan={4}>
                <CenteredSpan>
                  Phonebook is empty
                  <NoResultsIcon size={theme.sizes.noResultIcon} />
                </CenteredSpan>
              </TableDataCellEmpty>
            </tr>
          )}
        </tbody>
      </ContactsTable>
    </ContactsTableBox>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};
