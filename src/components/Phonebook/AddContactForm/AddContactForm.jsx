import PropTypes from 'prop-types';
import { Formik } from 'formik';

export const AddContactForm = ({ contacts, onNewContactSubmit }) => {
  return <h3>1241515</h3>;
};

AddContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  onNewContactSubmit: PropTypes.func.isRequired,
};
