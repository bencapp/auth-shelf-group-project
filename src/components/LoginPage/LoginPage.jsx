import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory } from "react-router-dom";

import ShelfList from "../ShelfPage/ShelfList/ShelfList";

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />
      <h2>Shelf</h2>

      <ShelfList />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push("/registration");
          }}
        >
          Register
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
