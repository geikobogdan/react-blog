import React from 'react'

 // var date = Date.now() 
//Intl.DateTimeFormat('ru').format(1537043086974) // "15.09.2018"
function Item({image,name,description,author,created_at,updated_at}) {
  return (
    <div className="galery-item">
     <img className="galery-item__image" src={image} alt="Картинка" />
      <h4 className="galery-item__title">Title: {name}</h4>
      <div className="galery-item__text">{description} </div>
      <div className="galery-item__author"><b>Author:</b> {author}</div>
      <div className="galery-item__create">Create: {Intl.DateTimeFormat('ru').format(created_at)} </div>
      { updated_at && <div className="galery-item__update">Update: {Intl.DateTimeFormat('ru').format(updated_at)}</div>}
      </div>
  )
}

export default Item
