import React from "react";
import { Divider, List, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

/**
 * Define UserList, a React component of the photo-sharing app.
 * Lists every user; clicking a name opens that user's details.
 */
function UserList() {
  const users = models.userListModel();

  return (
    <List component="nav" className="user-list">
      {users.map((user) => (
        <React.Fragment key={user._id}>
          <ListItemButton component={Link} to={`/users/${user._id}`}>
            <ListItemText primary={`${user.first_name} ${user.last_name}`} />
          </ListItemButton>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default UserList;
