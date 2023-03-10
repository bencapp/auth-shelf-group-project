import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShelfItem from "../ShelfItem/ShelfItem";
import "./ShelfList.css";

function ShelfList() {
  const dispatch = useDispatch();
  const shelfList = useSelector((store) => store.shelf);
  const user = useSelector((store) => store.user);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    console.log("in use effect");
    dispatch({
      type: "FETCH_SHELF",
    });
  }, []);

  return (
    <section className="shelf-list-style">
      {id === user.id && <h1>My Shelf</h1>}
      {shelfList.map((item) => {
        return <ShelfItem key={item.id} item={item} />;
      })}
    </section>
  );
}

export default ShelfList;
