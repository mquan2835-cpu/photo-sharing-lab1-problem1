import React from "react";
import { Alert, Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";
import PhotoCard from "./PhotoCard";

/**
 * Define UserPhotos, a React component of the photo-sharing app.
 * Shows every photo of the user given by the :userId route parameter,
 * each one with its own comments.
 */
function UserPhotos() {
  const { userId } = useParams();

  if (!models.userModel(userId)) {
    return <Alert severity="error">Không tìm thấy người dùng này.</Alert>;
  }

  const photos = models.photoOfUserModel(userId);
  if (photos.length === 0) {
    return (
      <Typography variant="body1">
        Người dùng này chưa có ảnh nào.
      </Typography>
    );
  }

  return (
    <Box>
      {photos.map((photo) => (
        <PhotoCard key={photo._id} photo={photo} />
      ))}
    </Box>
  );
}

export default UserPhotos;
