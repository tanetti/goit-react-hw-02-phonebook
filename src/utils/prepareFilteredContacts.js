import { sorting, normalizeFilterValue, normalizeNumber } from 'utils';

export const prepareFilteredContacts = (contacts, filterValue) => {
  const sortField = 'name';
  const isOrderASC = true;
  const normalizedFilterValue = normalizeFilterValue(filterValue);

  const prepearedContacts = [];

  contacts.sort(sorting(sortField, isOrderASC)).forEach(contact => {
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
