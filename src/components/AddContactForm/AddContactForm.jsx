import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { createNewValidationSchema } from 'utils';
import {
  FormContainer,
  FormTitle,
  StyledForm,
  FormFieldContainer,
  FormField,
  FormFieldLabel,
} from './AddContactForm.styled';

export const AddContactForm = ({
  contacts,
  shouldShown,
  onNewContactAdd,
  onCancel,
}) => {
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
        <FormContainer shouldShown={shouldShown}>
          <FormTitle>Add new contact</FormTitle>
          <StyledForm autoComplete="off">
            <FormFieldContainer>
              <FormField
                id="contact-name"
                name="name"
                placeholder=" "
                type="text"
              />
              <FormFieldLabel htmlFor="contact-name">
                Contact name
              </FormFieldLabel>
              <ErrorMessage name="name" />
            </FormFieldContainer>

            <FormFieldContainer>
              <FormField
                id="contact-number"
                name="number"
                placeholder=" "
                type="tel"
              />
              <FormFieldLabel htmlFor="contact-number">
                Phone number
              </FormFieldLabel>
              <ErrorMessage name="number" />
            </FormFieldContainer>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" disabled={!values.name || !values.number}>
              Add contact
            </button>
          </StyledForm>
        </FormContainer>
      )}
    </Formik>
  );
};

AddContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  shouldShown: PropTypes.bool.isRequired,
  onNewContactAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
