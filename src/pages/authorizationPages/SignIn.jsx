import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Alert } from "@material-ui/lab";
import { fetchAddUsers, isAuthorized } from "../../redux/actions/auth";
import { Link } from "react-router-dom";
import { useStyles } from "../themes";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import Snackbar from "@material-ui/core/Snackbar";

import { useDispatch, useSelector } from "react-redux";

const indexOf = (users, username) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      return i;
    }
  }
};
export default function SignIn() {
  const [user, setUser] = React.useState(false);
  const [submit, setSubmit] = React.useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { users } = useSelector(({ auth }) => auth);
  const { authorized } = useSelector(({ auth }) => auth);
  const usersNames = users.map((user) => user.username);
  const usersPassword = users.map((user) => user.password);
  const classes = useStyles();

  const validationsSchema = yup.object().shape({
    username: yup
      .string()
      .required("Обов'язкове поле")
      .test("validateUsername", "", function (value) {
        setUser(value);
        return true;
      }),
    password: yup
      .string()
      .required("Обов'язкове поле")
      .min(6, "Закороткий!")
      .max(30, "Задовгий!")
      .test("validateUsername", "", function (value) {
        if (
          !(
            usersNames.includes(user) &&
            usersPassword.includes(value) &&
            usersNames.indexOf(user) === usersPassword.indexOf(value)
          )
        ) {
          return this.createError({
            message: `Логін і пароль не збігаються`,
          });
        }
        return true;
      }),
  });

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
          Sign in
        </Typography>
        <Formik
          className={classes.form}
          initialValues={{
            username: "",
            password: "",
          }}
          validateOnBlur={false}
          onSubmit={() => {
            setSubmit(true);
            let index = indexOf(users, user);
            const activeUser =
              users[index].firstName + " " + users[index].lastName;
            dispatch(isAuthorized(true, activeUser));
            setTimeout(() => {
              history.push("/home");
            }, 1500);
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

              {touched.username && touched.password && errors.password && (
                <Alert severity="info">
                  <strong>{errors.password}</strong>
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
                Sign In
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link className={classes.link} to="/signUp" variant="body2">
                    {"Don't have an account? Sign Up"}
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
          <Alert severity="success">Авторизація пройшла успішно</Alert>
        </Snackbar>
      )}
    </Container>
  );
}
