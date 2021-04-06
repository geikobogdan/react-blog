import React from "react";
import { Sidebar, Header, Item, Items, AddForm, UpdateForm } from "../../components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  fetchAddCategories,
  fetchDeleteCategory,
  
} from "../../redux/actions/categories";
import {
  fetchAddItems,
  fetchAddAllItems,
  fetchDeleteItem,
} from "../../redux/actions/galeryItems";
import { setCategory, setSortBy } from "../../redux/actions/filters";
import { useDispatch, useSelector } from "react-redux";
import { Route, Link } from "react-router-dom";

import "../../styles/app.scss";

function Home({location}) {
  const dispatch = useDispatch();
  const { categories } = useSelector(({ categories }) => categories);
  const { activeUser } = useSelector(({ auth }) => auth);

  let path = location.pathname.split("/");

  const { items, allItems } = useSelector(({ items }) => items);
  const { categoryIndex, sortBy, order } = useSelector(
    ({ filters }) => filters
  );
  const onSelectCategory = (obj) => {
    dispatch(setCategory(obj));
  };
  const onSelectSortBy = (name, ord) => {
    dispatch(setSortBy(name, ord));
  };
  const onDeleteCategory = (id) => {
    if (window.confirm("Ви дійсно хочете видалити категорію?")) {
      dispatch(fetchDeleteCategory(id));
    }
  };
  const onDeleteItem = (id) => {
    if (window.confirm("Ви дійсно хочете видалити елемент категорії?")) {
      dispatch(fetchDeleteItem(id));
    }
  };
 
  

  const [text, setText] = React.useState("");
  const handleChangeTextarea = (e) => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }    
  };

  React.useEffect(() => {
    dispatch(fetchAddAllItems());
    dispatch(fetchAddCategories());
    if (categoryIndex) {
      dispatch(fetchAddItems(categoryIndex, sortBy, order));
    }
  }, [dispatch, categoryIndex, sortBy, order]);
  return (
    <div className={"page"}>
      <Route path={"/:any"}>
        <div className={"header"}>
          <Header />
          <Route exact path={["/home/setting/category", "/home/setting/items"]}>
            <div className="btn">
              <Link to={`/home/setting/${path[path.length - 1]}/addForm`}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "green" }}
                >
                  Додати{" "}
                  {path[path.length - 1] === "category"
                    ? "категорію"
                    : "елемент категорії"}
                </Button>
              </Link>
            </div>
          </Route>
        </div>
      </Route>

      <div className={"flexItems"}>
        <Route exact path={["/home/category", "/home"]}>
          <div className={"flexItems__sidebar"}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder={"Search"}
              onChange={handleChangeTextarea}
              value={text}
            />

            <Sidebar
              CategArr={
                text
                  ? categories.filter((category) => text === category.name)
                  : categories
              }
              onSelectCategory={onSelectCategory}
              onSelectSortBy={onSelectSortBy}
            />
          </div>
        </Route>
        <div className={"flexItems__content"}>
          <Route exact path={"/home/category/"}>
            {items.map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </Route>
          <Route exact path={["/home/setting/category", "/home/setting/items"]}>
            <div className="flex">
              {path[path.length - 1] === "category"
                ? categories.map((item, index) => (
                    <Items
                      key={index}
                      {...item}
                     
                      onDelete={onDeleteCategory}
                      path={path[path.length - 1]}
                    />
                  ))
                : allItems.map((item, index) => (
                    <Items
                      key={index}
                      {...item}
                    
                      onDelete={onDeleteItem}
                      path={path[path.length - 1]}
                    />
                  ))}
            </div>
          </Route>
          <Route
            exact
            path={[
              "/home/setting/category/addForm",
              "/home/setting/items/addForm",
            ]}
          >
            <AddForm
              path={path[path.length - 2]}
              categories={categories}
            
              activeUser={activeUser}
            />
          </Route>
          <Route
            exact
            path={[
              "/home/setting/category/updateForm/:id",
              "/home/setting/items/updateForm/:id",
            ]}
          >
            <UpdateForm
              path={path[path.length - 3]}
              categories={categories}
              activeUser={activeUser}
              allItems={allItems}
            />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default Home;
