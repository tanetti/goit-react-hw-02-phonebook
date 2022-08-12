import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { createNewValidationSchema } from 'utils';

export const AddContactForm = ({ contacts, onNewContactAdd }) => {
  const validationSchema = createNewValidationSchema(contacts);

  const onNewContactSubmit = (newContact, actions) => {
    onNewContactAdd({ id: nanoid(14), ...newContact });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) =>
        onNewContactSubmit(validationSchema.cast(values), actions)
      }
    >
      {({ values }) => (
        <Form autoComplete="off">
          <label>
            Name:
            <Field name="name" placeholder="Enter contact name" type="text" />
            <ErrorMessage name="name" />
          </label>
          <label>
            Phone number:
            <Field name="number" placeholder="Enter phone number" type="tel" />
            <ErrorMessage name="number" />
          </label>
          <button type="submit" disabled={!values.name || !values.number}>
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
