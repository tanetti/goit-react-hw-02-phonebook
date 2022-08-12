import PropTypes from 'prop-types';
import { prepareFilteredContacts } from 'utils';

export const ContactsList = ({ contacts, filter, onContactDelete }) => {
  const preparedContacts = prepareFilteredContacts(contacts, filter);

  return (
    <table>
      <caption>Contacts</caption>
      <thead>
        <tr>
          <td>Name</td>
          <td>Phote</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {preparedContacts.length ? (
          preparedContacts.map(({ id, name, number }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{number}</td>
              <td>
                <button type="button" value={id} onClick={onContactDelete}>
                  X
                </button>
              </td>
            </tr>
          ))
        ) : filter ? (
          <tr>
            <td>Nothing was found</td>
          </tr>
        ) : (
          <tr>
            <td>Phonebook is empty</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};
