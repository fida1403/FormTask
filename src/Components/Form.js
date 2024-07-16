import React from 'react';
import { Formik, Form} from 'formik';
import { Button, TextField } from '@mui/material';

const FormComponent = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '' }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ handleChange, values }) => (
        <Form>
          <div>
            <TextField
              name="name"
              label="Name"
              value={values.name}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </div>
          <div>
            <TextField
              name="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </div>
          <div>
            <TextField
              name="phone"
              label="Phone"
              value={values.phone}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
