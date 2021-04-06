import React from "react";

import "../styles/app.scss";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Sidebar({
  CategArr,
  onSelectCategory,
  onSelectSortBy,
}) {


  const { categoryName,sortBy } = useSelector(({ filters }) => filters);
  const sortArr = [
    { name: "Назві", sort: "nameU" },
    { name: "Даті створення", sort: "created_at",  order: "desc"},
    { name: "Автору", sort: "authorU" },        
  ];
  return (
    <div className="listBlock">
      <div className="listBlock__name"> Cписок категорій</div>
      <ul className="list">          
        {CategArr.map((obj, index) => (
          <Link to={`/home/category`} key={index}>
            <li
              onClick={() => onSelectCategory(obj)}
              className={obj.name === categoryName ? "active" : ""}
            >
              {obj.name}
            </li>
          </Link>
        ))}
      </ul>
      <h3 className="listBlock__name">Сортувати елементи категорії по :</h3>
      <ul className="list-sort">
        {sortArr.map((item, index) => (
          <li
            key={index}
            onClick={() => {if(item.sort === "created_at"){ return onSelectSortBy(item.sort,item.order) }   return onSelectSortBy(item.sort)}}
            className={item.sort === sortBy ? "active" : ""}
          >
            {item.name}
            
          </li>
        ))}
      </ul>
    </div>
  );
}
