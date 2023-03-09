import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function ShelfItem({ item }) {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const [editing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(item.description);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_FROM_SHELF",
      payload: item.id,
    });
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "EDIT_SHELF",
      payload: { id: item.id, description: newDescription },
    });
    setEditing(false);
  };

  return (
    <Card sx={{ width: 300 }}>
      <CardMedia sx={{ height: 140 }} image={item.image_url} />
      {/* what to render if we are not editing */}
      {!editing ? (
        <>
          {" "}
          <CardContent>
            <Typography variant="body" color="text">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            {user.id === item.user_id ? (
              <>
                <Button onClick={handleDelete}>Delete</Button>
                <Button onClick={handleEdit}>EDIT</Button>
              </>
            ) : (
              <>
                <Button disabled>Delete</Button>
                <Button disabled>Edit</Button>
              </>
            )}
          </CardActions>
        </>
      ) : (
        <CardContent>
          <form onSubmit={handleSubmit}>
            <input
              value={newDescription}
              onChange={(event) => setNewDescription(event.target.value)}
            ></input>
            <Button type="submit">SUBMIT</Button>
          </form>
        </CardContent>
      )}
    </Card>
  );
}

export default ShelfItem;
