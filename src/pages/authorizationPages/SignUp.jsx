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
import { useHistory } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";

import { Link } from "react-router-dom";
import { useStyles } from "../themes";

import { Formik } from "formik";
import * as yup from "yup";
import {
  signUpUser,
  fetchAddUsers,
  isAuthorized,
} from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";



export default function SignUp() {
  const dispatch = useDispatch();
  const { users } = useSelector(({ auth }) => auth);
  const history = useHistory();
  const usersNames = users.map((user) => user.username);
  const { authorized } = useSelector(({ auth }) => auth);

  const [submit, setSubmit] = React.useState(false);
  const validationsSchema = yup.object().shape({
    username: yup
      .string()
      .typeError("Повинно бути стрічкою")
      .required("Обов'язкове поле")
      .test("validateUsername", "", function (value) {
        if (usersNames.includes(value)) {
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
  React.useEffect(() => {
    dispatch(fetchAddUsers());
  }, [dispatch]);

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
            setSubmit(true);
           
            const activeUser =
            values.firstName  + " " +  values.lastName;
            dispatch(isAuthorized(true, activeUser));
            delete values["confirmPassword"];
            values.jwt = Math.random().toString(36).substr(2);
            dispatch(signUpUser(values));
            setTimeout(() => history.push("/home"), 1500);
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
                disabled={authorized}
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
                disabled={authorized}
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
                disabled={authorized}
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
                disabled={authorized}
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
                disabled={authorized}
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
                disabled={authorized}
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
                disabled={!isValid || !dirty || submit}
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
      {authorized && (
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
