import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { Link } from "react-router-dom";
import { useStyles } from "../themes";


export default function SignIn() {
  const classes = useStyles();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChangeUsername = (e) => {
    if (e.currentTarget) {
      setUsername(e.currentTarget.value);
    }
  };
  const handleChangePassword = (e) => {
    if (e.currentTarget) {
      setPassword(e.currentTarget.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  

  };

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
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            onChange={handleChangeUsername}
            value={username}
            variant="outlined"
            margin="normal"
            fullWidth
            name="username"
            placeholder="Username"
            id="username"
          />

          <TextField
            onChange={handleChangePassword}
            value={password}
            variant="outlined"
            margin="normal"
            
            fullWidth
            name="password"
            placeholder="Password"
            type="password"
            id="password"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
           
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link   className={classes.link} to="/signUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
