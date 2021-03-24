import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Alert } from "@material-ui/lab";

import Snackbar from "@material-ui/core/Snackbar";

import { Link } from "react-router-dom";
import { useStyles } from "../themes";

import { Formik } from "formik";
import * as yup from "yup";

export default function SignUp() {
  const arr = ["bodya12001", "yura22002"];

  const [auth, setAuth] = React.useState(false);
  const validationsSchema = yup.object().shape({
    username: yup
      .string()
      .typeError("Повинно бути стрічкою")
      .required("Обов'язкове поле")
      .test("validateUsername", "", function (value) {
        if (arr.includes(value)) {
          return this.createError({
            message: `Username повинен бути унікальним`,
          });
        }
        return true;
      }),

    firstName: yup
      .string()
      .typeError("Повинно бути стрічкою")
      .required("Обов'язкове поле"),
    lastName: yup
      .string()
      .typeError("Повинно бути стрічкою")
      .required("Обов'язкове поле"),
    password: yup
      .string()
      .min(6, "Закороткий!")
      .max(30, "Задовгий!")

      .typeError("Повинно бути стрічкою")
      .required("Обов'язкове поле"),
    confirmPassword: yup
      .string()
      .typeError("Повинно бути стрічкою")
      .required("Обов'язкове поле")
      .oneOf([yup.ref("password")], "Паролі не співпадають"),
    email: yup
      .string()
      .email("Введіть коректний email")
      .required("Обов'язкове поле"),
  });

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          className={classes.form}
          initialValues={{
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validateOnBlur
          onSubmit={(values) => {
            console.log(values);

            setAuth(true);
          }}
          validationSchema={validationsSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <>
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                disabled={auth}
                variant="outlined"
                margin="normal"
                fullWidth
                name="username"
                placeholder="Username"
                id="username"
              />

              {touched.username && errors.username && (
                <Alert severity="info">
                  <strong>{errors.username}</strong>
                </Alert>
              )}

              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                disabled={auth}
                variant="outlined"
                margin="normal"
                fullWidth
                name="firstName"
                placeholder="First name"
                id="firstName"
              />
              {touched.firstName && errors.firstName && (
                <Alert severity="info">
                  <strong>{errors.firstName}</strong>
                </Alert>
              )}
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                disabled={auth}
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="Last name"
                name="lastName"
                id="lastName"
              />
              {touched.lastName && errors.lastName && (
                <Alert severity="info">
                  <strong>{errors.lastName}</strong>
                </Alert>
              )}
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                disabled={auth}
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                autoComplete="false"
              />
              {touched.email && errors.email && (
                <Alert severity="info">
                  <strong>{errors.email}</strong>
                </Alert>
              )}
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                disabled={auth}
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
              />
              {touched.password && errors.password && (
                <Alert severity="info">
                  <strong>{errors.password}</strong>
                </Alert>
              )}

              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                disabled={auth}
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="Confirm password"
                name="confirmPassword"
                type="password"
                id="confirmPassword"
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Alert severity="info">
                  <strong>{errors.confirmPassword}</strong>
                </Alert>
              )}

              <Button
                disabled={!isValid || !dirty}
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link className={classes.link} to="/signIn" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </>
          )}
        </Formik>
      </div>
      {auth && (
        <Snackbar
          open={true}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Alert severity="success">Реєстрація пройшла успішно</Alert>
        </Snackbar>
      )}
      <Box mt={5}></Box>
    </Container>
  );
}
