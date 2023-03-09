import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
    <Card sx={{ width: 300 }}>
      <CardMedia sx={{ height: 140 }} image={item.image_url} />
      <CardContent>
        <Typography variant="body" color="text">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        {user.id === item.user_id ? (
          <Button onClick={handleDelete}>Delete</Button>
        ) : (
          <Button disabled>Delete</Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ShelfItem;
