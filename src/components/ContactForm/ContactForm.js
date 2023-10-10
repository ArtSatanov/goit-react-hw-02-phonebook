import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm, StyledLabelName, StyledField } from './ContactForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(9, 'Too Short!')
    .max(9, 'Too Long!')
    .required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, action) => {
        onAdd(values);
        action.resetForm();
      }}
    >
      <StyledForm>
        <label>
          <StyledLabelName>Name</StyledLabelName>
          <StyledField id="name" name="name" placeholder="Jane Derossa" />
          <ErrorMessage name="name" />
        </label>
        <label>
          <StyledLabelName>Number</StyledLabelName>
          <StyledField id="lastName" name="number" placeholder="***-**-**" />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
