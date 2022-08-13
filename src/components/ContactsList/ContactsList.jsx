import PropTypes from 'prop-types';
import { prepareFilteredContacts, normalizeNumberForCallLink } from 'utils';
import { theme } from 'constants/theme';
import {
  ContactsTableBox,
  ContactsTable,
  TableHeadCell,
  TableDataRow,
  TableDataCell,
  PhoneLink,
  PhoneIcon,
  DeleteButton,
  DeleteIcon,
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
            <TableHeadCell />
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Phone</TableHeadCell>
            <TableHeadCell />
          </tr>
        </thead>

        <tbody>
          {preparedContacts.length ? (
            preparedContacts.map(({ id, name, number }, idx) => (
              <TableDataRow key={id} isLight={idx % 2 === 0}>
                <TableDataCell>
                  <PhoneLink
                    href={`tel:${normalizeNumberForCallLink(number)}`}
                    aria-label={`Call ${name}`}
                  >
                    <PhoneIcon size={theme.sizes.callButtonIcon} />
                  </PhoneLink>
                </TableDataCell>
                <TableDataCell>{name}</TableDataCell>
                <TableDataCell>{number}</TableDataCell>
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
