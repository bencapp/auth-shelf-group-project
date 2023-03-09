import React from "react";
import ShelfList from "./ShelfList/ShelfList";
import ShelfForm from "./ShelfForm/ShelfForm";

function ShelfPage() {
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ShelfForm />
      <ShelfList />
    </div>
  );
}

export default ShelfPage;
