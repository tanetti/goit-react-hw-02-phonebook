import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createNewValidationSchema } from './validation';

export const AddContactForm = ({ contacts, onNewContactAdd }) => {
  const validationSchema = createNewValidationSchema(contacts);

  const onNewContactSubmit = contact => {
    onNewContactAdd(contact);
  };

  return (
    <Formik
      initialValues={{
        name: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => onNewContactSubmit(validationSchema.cast(values))}
    >
      {({ values, errors, touched }) => (
        <Form autoComplete="off">
          <label>
            Name:
            <Field name="name" />
            <ErrorMessage name="name" />
          </label>
          <button
            type="submit"
            disabled={values.name.length === 0 && errors.name && touched.name}
          >
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
