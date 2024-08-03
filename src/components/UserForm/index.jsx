import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { USER_NAME_SCHEMA } from "../../utils/validationSchemas";

function UserForm() {
  // const [name, setName] = useState("");

  const initialValues = { userName: "" };

  const handleSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_NAME_SCHEMA}
    >
      {(formikProps) => (
        <Form>
          <Field
            type="text"
            name="userName"
            // value={formikProps.values.userName}
            // onChange={formikProps.handleChange}
          />
          <ErrorMessage name="userName" />
          {/* {formikProps.errors.userName && (
            <span>{formikProps.errors.userName}</span>
          )} */}
          <button type="submit">OK</button>
          <button type="reset" disabled={!formikProps.dirty}>
            Reset
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default UserForm;
