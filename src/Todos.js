import React from "react";
import "./Todos.css";
import db from "./firebase";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemText primary={props.todo.todo} secondary="Dummy deadline ⏰" />
      </ListItem>
      <Button
        onClick={(event) => db.collection("todos").doc(props.todo.id).delete()}
      >
        ❌DELETE THIS ITEM🚮
      </Button>
    </List>
  );
}

export default Todo;
