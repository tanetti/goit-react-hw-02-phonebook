import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  sortContacts,
  normalizeFilterValue,
  normalizeNumber,
  normalizeNumberForCallLink,
} from 'utils';
import { theme } from 'constants/theme';
import {
  ContactsTableBox,
  ContactsTable,
  TableHeadCell,
  SortByNameButton,
  SotrByNameIconASC,
  SotrByNameIconDSC,
  SortByNumberButton,
  SotrByNumberIconASC,
  SotrByNumberIconDSC,
  TableDataRow,
  TableDataCell,
  NameDataContainer,
  NumberDataContainer,
  DeleteButton,
  DeleteIcon,
  CallLink,
  CallLinkIcon,
  TableDataCellEmpty,
  CenteredSpan,
  NoResultsIcon,
} from './ContactsList.styled';

export class ContactsList extends Component {
  state = {
    sortField: 'name',
    isSortOrderASC: {
      name: true,
      number: true,
    },
  };

  prepareFilteredContacts = () => {
    const normalizedFilterValue = normalizeFilterValue(this.props.filter);
    const prepearedContacts = [];

    this.props.contacts
      .sort(
        sortContacts(
          this.state.sortField,
          this.state.isSortOrderASC[this.state.sortField]
        )
      )
      .forEach(contact => {
        const normalizedName = contact.name.toLowerCase();
        const normalizedNumber = normalizeNumber(contact.number);

        if (
          normalizedName.includes(normalizedFilterValue) ||
          normalizedNumber.includes(normalizedFilterValue)
        )
          prepearedContacts.push(contact);
      });

    return prepearedContacts;
  };

  onSortButtonClick = ({ currentTarget: { value: targetSortField } }) => {
    this.setState(prevState => {
      if (prevState.sortField !== targetSortField)
        return { sortField: targetSortField };

      return {
        isSortOrderASC: {
          ...prevState.isSortOrderASC,
          [targetSortField]: !prevState.isSortOrderASC[targetSortField],
        },
      };
    });
  };

  render() {
    const { onContactDelete, filter: filterValue } = this.props;
    const preparedContacts = this.prepareFilteredContacts();
    const isSortFieldName = this.state.sortField === 'name';
    const isOrderByNameASC = this.state.isSortOrderASC.name;
    const isSortFieldNumber = this.state.sortField === 'number';
    const isOrderByNumberASC = this.state.isSortOrderASC.number;

    const sortButtonIconSize = theme.sizes.sortButtonIcon;
    const deleteButtonIconSize = theme.sizes.deleteButtonIcon;
    const callLinkIconSize = theme.sizes.callLinkIcon;
    const noResultIconSize = theme.sizes.noResultIcon;

    return (
      <ContactsTableBox>
        <ContactsTable>
          <thead>
            <tr>
              <TableHeadCell colSpan={2}>
                Contact name
                <SortByNameButton
                  type="button"
                  value="name"
                  isSortFieldName={isSortFieldName}
                  aria-label={`Sort contacts by contact name in ${
                    isOrderByNameASC ? 'ascending' : 'descending'
                  } order`}
                  onClick={this.onSortButtonClick}
                >
                  <SotrByNameIconASC
                    size={sortButtonIconSize}
                    value={isOrderByNameASC}
                  />
                  <SotrByNameIconDSC
                    size={sortButtonIconSize}
                    value={isOrderByNameASC}
                  />
                </SortByNameButton>
              </TableHeadCell>
              <TableHeadCell colSpan={2}>
                Phone number
                <SortByNumberButton
                  type="button"
                  value="number"
                  isSortFieldNumber={isSortFieldNumber}
                  aria-label={`Sort contacts by phone number in ${
                    isOrderByNumberASC ? 'ascending' : 'descending'
                  } order`}
                  onClick={this.onSortButtonClick}
                >
                  <SotrByNumberIconASC
                    size={sortButtonIconSize}
                    value={isOrderByNumberASC}
                  />
                  <SotrByNumberIconDSC
                    size={sortButtonIconSize}
                    value={isOrderByNumberASC}
                  />
                </SortByNumberButton>
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
                      aria-controls="DeletePrompt"
                      aria-expanded={false}
                      data-target="DeletePrompt"
                      onClick={onContactDelete}
                    >
                      <DeleteIcon size={deleteButtonIconSize} />
                    </DeleteButton>
                  </TableDataCell>
                  <TableDataCell>
                    <NameDataContainer>{name}</NameDataContainer>
                  </TableDataCell>
                  <TableDataCell>
                    <NumberDataContainer>{number}</NumberDataContainer>
                  </TableDataCell>
                  <TableDataCell>
                    <CallLink
                      href={`tel:${normalizeNumberForCallLink(number)}`}
                      aria-label={`Call ${name}`}
                    >
                      <CallLinkIcon size={callLinkIconSize} />
                    </CallLink>
                  </TableDataCell>
                </TableDataRow>
              ))
            ) : filterValue ? (
              <tr>
                <TableDataCellEmpty colSpan={4}>
                  <CenteredSpan>
                    Nothing was found
                    <NoResultsIcon size={noResultIconSize} />
                  </CenteredSpan>
                </TableDataCellEmpty>
              </tr>
            ) : (
              <tr>
                <TableDataCellEmpty colSpan={4}>
                  <CenteredSpan>
                    Phonebook is empty
                    <NoResultsIcon size={noResultIconSize} />
                  </CenteredSpan>
                </TableDataCellEmpty>
              </tr>
            )}
          </tbody>
        </ContactsTable>
      </ContactsTableBox>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};
