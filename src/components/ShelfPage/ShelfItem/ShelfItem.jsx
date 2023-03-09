import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ShelfItem({ item }) {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_FROM_SHELF",
      payload: item.id,
    });
  };

  return (
    <div className="Shelf-item-wrapper">
      <p>{item.description}</p>
      <img src={item.image_url} />
      {user.id === item.user_id ? (
        <button onClick={handleDelete}>Delete</button>
      ) : (
        <button disabled>Delete</button>
      )}
    </div>
  );
}

export default ShelfItem;
