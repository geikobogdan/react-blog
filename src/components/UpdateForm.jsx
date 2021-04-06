import React from "react";
import { Alert } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { fetchUpdateItem } from "../redux/actions/galeryItems";
import { fetchUpdateCategory } from "../redux/actions/categories";
import { useHistory, useParams } from "react-router-dom";
import "../styles/form.scss";

const toUpper = (str) => {
  return str.toUpperCase();
};
let defaultdata=[];

function UpdateForm({ path, activeUser, categories, allItems }) {
  const params = useParams();
  const id = params.id;
  
  if (path === "category") {
    defaultdata = categories.filter((item) => item.id === +id);
  
} else {
  defaultdata = allItems.filter((item) => {
    if (item.id === +id) {
      return true;
    }
    return false;
  });
}
 
 
  const history = useHistory();
  const [submit, setSubmit] = React.useState(false);
  const dispatch = useDispatch();
  const formInfo = {
    name: defaultdata[0].name,
    author: activeUser ,
    image: defaultdata[0].image,
    description: defaultdata[0].description,
    category_id: categories[0].id,
    updated_at: Date.now(),
  };
  const [state, setState] = React.useState(formInfo);
  //console.log(path);
  const onSubmit = (e) => {
    e.preventDefault();
    let data = {};
    if (path === "items") {
      data = state;
      data.nameU = toUpper(data.name);

      dispatch(fetchUpdateItem(id,data));
    } else {
      data = state;
      data = {
        name: state.name,
        nameU: toUpper(data.name),
        author: activeUser,
        created_at: Date.now(),
      };
      dispatch(fetchUpdateCategory(id,data));
    }
    setSubmit(true);
    setTimeout(() => {
      history.push(`/home/setting/${path}`);
    }, 1500);

    //console.log(state);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  

  const { name, author, image, description, category_id } = state;
  return (
    <div className="form">
      <div className="form__title">
        <b>Редагуйте інформацію </b>
      </div>
      <form>
        {path === "items" ? (
          <>
            <div className="flexForm">
              <div className="flexForm__title" onChange={onChange}>
                <b> Назва : </b>
              </div>
              <input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
              ></input>
            </div>
            <div className="flexForm">
              <div className="flexForm__authorItem">
                <b>Автор : </b>
              </div>
              <input
                type="text"
                readOnly
                disabled
                name="author"
                value={author}
              ></input>
            </div>
            <div className="flexForm">
              <div className="flexForm__image" onChange={onChange}>
                <b>URL картинки : </b>
              </div>
              <input
                type="text"
                name="image"
                value={image}
                onChange={onChange}
              ></input>
            </div>
            <div className="flexForm">
              <div className="flexForm__name">
                <b> Опис : </b>
              </div>
              <textarea
                name="description"
                onChange={onChange}
                value={description}
              ></textarea>
            </div>
            <div className="flexForm">
              <div className="flexForm__name">
                <b> Категорія : </b>
              </div>
              <select
                id="country"
                name="category_id"
                value={category_id}
                onChange={onChange}
              >
                {categories.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </>
        ) : (
          <>
            <div className="flexForm">
              <div className="flexForm__name">
                <b> Назва категорії : </b>
              </div>
              <input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
              ></input>
            </div>
            <div className="flexForm">
              <div className="flexForm__author">
                <b>Автор : </b>
              </div>
              <input
                type="text"
                readOnly
                disabled
                name="author"
                value={author}
              ></input>
            </div>
          </>
        )}
        <div className={"form__btn"}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            style={{ backgroundColor: "green" }}
            onClick={onSubmit}
          >
            Зберегти
          </Button>
        </div>
      </form>
      {submit && (
        <Snackbar
          open={true}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Alert severity="success">
            {path === "items" ? "Елемент" : "Категорія"} редагована успішно
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}

export default UpdateForm;
