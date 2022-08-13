import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { createNewValidationSchema } from 'utils';
import { theme } from 'constants/theme';
import {
  FormContainer,
  FormTitle,
  StyledForm,
  FormFieldContainer,
  FormField,
  FormFieldLabel,
  UserFieldIcon,
  NumberFieldIcon,
  ButtonContainer,
  CancelButton,
  AddButton,
  ErrorMessageField,
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
      {({ values, errors, touched }) => (
        <FormContainer shouldShown={shouldShown}>
          <FormTitle>Add new contact</FormTitle>
          <StyledForm autoComplete="off">
            <FormFieldContainer isError={errors.name} isFilled={values.name}>
              <FormField
                id="contact-name"
                name="name"
                placeholder=" "
                type="text"
              />
              <UserFieldIcon size={theme.sizes.addFormFieldIcon} />
              <FormFieldLabel htmlFor="contact-name">
                Contact name
              </FormFieldLabel>
              <ErrorMessageField isError={errors.name}>
                {errors.name}
              </ErrorMessageField>
            </FormFieldContainer>
            <FormFieldContainer
              isError={errors.number}
              isFilled={values.number}
            >
              <FormField
                id="contact-number"
                name="number"
                placeholder=" "
                type="tel"
              />
              <NumberFieldIcon size={theme.sizes.addFormFieldIcon} />
              <FormFieldLabel htmlFor="contact-number">
                Phone number
              </FormFieldLabel>
              <ErrorMessageField isError={errors.number}>
                {errors.number}
              </ErrorMessageField>
            </FormFieldContainer>
            <ButtonContainer>
              <CancelButton type="button" onClick={onCancel}>
                Cancel
              </CancelButton>
              <AddButton
                type="submit"
                disabled={
                  !values.name || !values.number || errors.name || errors.number
                }
              >
                Add contact
              </AddButton>
            </ButtonContainer>
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
