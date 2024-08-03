import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { CONTACTS_SCHEMA } from "../../utils/validationSchemas";
import styles from "./ContactsForm.module.sass";
import classNames from "classnames";

function ContactsForm() {
  const initialValues = {
    userName: "",
    phoneNumber: "",
    email: "",
    birthday: "",
  };

  const handleSubmit = (values) => {};

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={CONTACTS_SCHEMA}
      >
        {(formikProps) => {
          const userNameClassName = classNames(styles.input, {
            [styles.valid]:
              !formikProps.errors.userName && formikProps.touched.userName,
            [styles.invalid]:
              formikProps.errors.userName && formikProps.touched.userName,
          });

          const phoneNumberClassName = classNames(styles.input, {
            [styles.valid]:
              !formikProps.errors.phoneNumber &&
              formikProps.touched.phoneNumber,
            [styles.invalid]:
              formikProps.errors.phoneNumber && formikProps.touched.phoneNumber,
          });

          const emailClassName = classNames(styles.input, {
            [styles.valid]:
              !formikProps.errors.email && formikProps.touched.email,
            [styles.invalid]:
              formikProps.errors.email && formikProps.touched.email,
          });

          const birthdayClassName = classNames(styles.input, {
            [styles.valid]:
              !formikProps.errors.birthday && formikProps.touched.birthday,
            [styles.invalid]:
              formikProps.errors.birthday && formikProps.touched.birthday,
          });

          return (
            <Form className={styles.form}>
              <label className={styles.label}>
                <span className={styles.inputCaption}>Name: </span>
                <Field
                  className={userNameClassName}
                  type="text"
                  name="userName"
                  placeHolder="User Name"
                  autoFocus
                />
                <ErrorMessage
                  className={styles.error}
                  name="userName"
                  component="span"
                />
              </label>
              <label className={styles.label}>
                <span className={styles.inputCaption}>Phone: </span>
                <Field
                  className={phoneNumberClassName}
                  type="text"
                  name="phoneNumber"
                  placeHolder="+380XXXXXXXXX"
                />
                <ErrorMessage
                  className={styles.error}
                  name="phoneNumber"
                  component="span"
                />
              </label>
              <label className={styles.label}>
                <span className={styles.inputCaption}>Email: </span>
                <Field
                  className={emailClassName}
                  type="email"
                  name="email"
                  placeHolder="your@mail"
                />
                <ErrorMessage
                  className={styles.error}
                  name="email"
                  component="span"
                />
              </label>
              <label className={styles.label}>
                <span className={styles.inputCaption}>Date of birth: </span>
                <Field
                  className={birthdayClassName}
                  type="date"
                  name="birthday"
                />
                <ErrorMessage
                  className={styles.error}
                  name="birthday"
                  component="span"
                />
              </label>
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default ContactsForm;
