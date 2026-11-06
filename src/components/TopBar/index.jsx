import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useMatch } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

// Tên hiển thị ở bên trái của thanh trên cùng.
const STUDENT_NAME = "Đỗ Minh Quân";

/**
 * Define TopBar, a React component of the photo-sharing app.
 * Left: the student's name. Right: what the main content area is showing
 * (a user's name, or "Ảnh của <name>" on the photos page).
 */
function TopBar() {
  const userMatch = useMatch("/users/:userId");
  const photosMatch = useMatch("/photos/:userId");
  const userId = (userMatch || photosMatch)?.params.userId;
  const user = userId ? models.userModel(userId) : null;

  let context = "";
  if (user) {
    const fullName = `${user.first_name} ${user.last_name}`;
    context = photosMatch ? `Ảnh của ${fullName}` : fullName;
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar className="topbar-toolbar">
        <Typography variant="h6" color="inherit" className="topbar-name">
          {STUDENT_NAME}
        </Typography>
        <Typography variant="h6" color="inherit" className="topbar-context">
          {context}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
