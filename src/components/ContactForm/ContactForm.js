import { Formik, Field, Form } from 'formik';

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={values => {}}
    >
      <Form>
        <label>
          Name
          <Field id="name" name="name" placeholder="Jane" />
        </label>

        <label>
          Number
          <Field id="lastName" name="number" placeholder="Doe" />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
