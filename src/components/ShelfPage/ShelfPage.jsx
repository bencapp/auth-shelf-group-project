import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

function ShelfPage() {
  const [itemToSend, setItemToSend] = useState({});
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Add item to shelf</h2>
      <label>Item Description</label>
      <input
        type="text"
        onChange={(event) => setItemToSend({ description: event.target.value })}
      ></input>
      <label>Image URL</label>
      <input
        type="text"
        onChange={(event) =>
          setItemToSend({
            ...itemToSend,
            imageUrl: event.target.value,
          })
        }
      ></input>
      <button
        onClick={() => {
          dispatch({
            type: "POST_ITEM",
            payload: itemToSend,
          });
        }}
      >
        Add item
      </button>
    </div>
  );
}

export default ShelfPage;
