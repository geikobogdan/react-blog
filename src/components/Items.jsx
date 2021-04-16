import React from "react";
import {  Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useStyles } from "../pages/themes";
function Items({ name, author, created_at, onDelete, id,path }) {
  const classes = useStyles();
  return (
    <div className="center">
      <div className="flexBoxCat">
        <div className="flexBoxCat__info">
          <div className="flexBoxCat__name">
            <b>Title: </b>
            {name}
          </div>
          <div className="flexBoxCat__author">
            <b>Author: </b>
            {author}
          </div>
          <div className="flexBoxCat__date">
            <b>Create: </b>
            {Intl.DateTimeFormat("ru").format(created_at)}
          </div>
        </div>
        <div className="flexBoxCat__buttons">
          <div className="flexBoxCat__update">
            <Link to={`/home/setting/${path}/updateForm/${id}`}>
            <Button
              variant="contained"
              
              size="small"
              color="primary"
              style={{ backgroundColor: "green" }}
              className={classes.but_log}
            >
              Редагувати
            </Button>
            </Link>
          </div>
          <div className="flexBoxCat__delete">
            <Button
              variant="contained"
              onClick={() => onDelete(id)}
              size="small"
              color="primary"
              style={{ backgroundColor: "red" }}
              className={classes.but_log}
            >
              Видалити
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
