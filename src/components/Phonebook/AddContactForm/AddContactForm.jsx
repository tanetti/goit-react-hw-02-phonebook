import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createNewValidationSchema } from './validation';

export const AddContactForm = ({ contacts, onNewContactAdd }) => {
  const validationSchema = createNewValidationSchema(contacts);

  const onNewContactSubmit = (newContact, actions) => {
    onNewContactAdd(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) =>
        onNewContactSubmit(validationSchema.cast(values), actions)
      }
    >
      {({ dirty, errors }) => (
        <Form autoComplete="off">
          <label>
            Name:
            <Field name="name" type="text" />
            <ErrorMessage name="name" />
          </label>
          <button type="submit" disabled={!dirty}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

AddContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  onNewContactAdd: PropTypes.func.isRequired,
};
