import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { useStyles } from "../pages/themes";
import { isLogout } from "../redux/actions/auth";
import { useDispatch } from "react-redux";

import { Link, Route } from "react-router-dom";
import { BackButton } from "./BackButton";
function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <AppBar className={classes.appBar} position="static">
        <Route path={"/home/setting/:any"}>
          <div className={"backButton"}>
            <div>
              <BackButton />
            </div>
            <div></div>
          </div>
        </Route>

        <div>
          <Link to={`/home/setting/category`}>
            <Button
              variant="contained"
              color="primary"
              className={classes.but_log}
            >
              Налаштування категорій
            </Button>
          </Link>
        </div>
        <div>
          <Link to={`/home/setting/items`}>
            <Button
              variant="contained"
              color="primary"
              className={classes.but_log}
            >
              Налаштування елементів категорії
            </Button>
          </Link>
        </div>
        <div>
          <Button
            variant="contained"
            onClick={()=>dispatch(isLogout(false,null))}
            color="primary"
            className={classes.but_log}
          >
            LogOut
          </Button>
        </div>
      </AppBar>
    </>
  );
}

export default Header;
