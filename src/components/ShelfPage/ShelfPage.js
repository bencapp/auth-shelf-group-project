import React from "react";
import ShelfList from "./ShelfList/ShelfList";
import ShelfForm from "./ShelfForm/ShelfForm";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ShelfPage() {
  const { id } = useParams();

  const user = useSelector((store) => store.user);

  return (
    <div className="container">
      {id && Number(id) === Number(user.id) ? (
        <>
          <h2>My Shelf</h2> <p>This is the list of items that you added.</p>
        </>
      ) : (
        <>
          <h2>Shelf</h2>
          <p>All of the available items can be seen here.</p>
        </>
      )}

      <ShelfForm />
      <ShelfList myShelf={id && Number(id) === Number(user.id)} />
    </div>
  );
}

export default ShelfPage;
