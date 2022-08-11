import * as Yup from 'yup';

Yup.addMethod(
  Yup.string,
  'notOneOfInLowercase',
  function (paramArr, errorMessage) {
    return this.test(`not-One-Of-In-Lowercase`, errorMessage, function (value) {
      const { path, createError } = this;

      if (paramArr.includes(value?.toLowerCase())) {
        return createError({ path, message: errorMessage });
      }
      return true;
    });
  }
);

export const createNewValidationSchema = contacts => {
  const existingContactNames = contacts.map(contact =>
    contact.name.toLowerCase()
  );

  return Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(2, 'Minimal lenght - 2')
      .max(50, 'Minimal lenght - 50')
      .notOneOfInLowercase(existingContactNames, 'Contact already exist')
      .required('Please enter contact name'),
  });
};
