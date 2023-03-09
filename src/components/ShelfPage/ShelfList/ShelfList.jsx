import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShelfItem from "../ShelfItem/ShelfItem";

function ShelfList() {
  const dispatch = useDispatch();
  const shelfList = useSelector((store) => store.shelf);

  useEffect(() => {
    console.log("in use effect");
    dispatch({
      type: "FETCH_SHELF",
    });
  }, []);

  //   const shelfList = [
  //     {
  //       description: "super yummy strawberries",
  //       image_url:
  //         "https://assets.bonappetit.com/photos/5cfa7e1fdf8e95e1e62ca6a3/5:4/w_3515,h_2812,c_limit/Basically-Strawberry-Shortcake-Strawberries.jpg",
  //       user_id: 1,
  //     },
  //     {
  //       description: "grapefruit, yucky.",
  //       image_url: "https://i.ytimg.com/vi/ca89G9ADotA/maxresdefault.jpg",
  //       user_id: 2,
  //     },
  //   ];

  return (
    <section className="shelf-list-style">
      {shelfList.map((item) => {
        return <ShelfItem key={item.id} item={item} />;
      })}
    </section>
  );
}

export default ShelfList;
