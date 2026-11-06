import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import formatDateTime from "../../lib/formatDateTime";

/** Photo files live in src/images; webpack bundles them at build time. */
function photoUrl(fileName) {
  return require(`../../images/${fileName}`);
}

/**
 * One photo: the picture, when it was posted and all of its comments.
 */
function PhotoCard({ photo }) {
  // Photos nobody has commented on have no `comments` property in the model.
  const comments = photo.comments ?? [];

  return (
    <Card className="photo-card" variant="outlined">
      <CardMedia
        component="img"
        className="photo-card-image"
        image={photoUrl(photo.file_name)}
        alt={`Ảnh ${photo.file_name}`}
        loading="lazy"
      />
      <CardContent>
        <Typography variant="body2" className="photo-card-date">
          Đăng lúc {formatDateTime(photo.date_time)}
        </Typography>

        <Divider className="photo-card-divider" />

        <Typography variant="subtitle1" className="photo-card-heading">
          Bình luận ({comments.length})
        </Typography>

        {comments.length === 0 && (
          <Typography variant="body2" className="photo-card-date">
            Chưa có bình luận nào.
          </Typography>
        )}

        {comments.map((comment) => (
          <Box key={comment._id} className="photo-comment">
            <Typography variant="body2" component="div">
              <MuiLink
                component={Link}
                to={`/users/${comment.user._id}`}
                underline="hover"
                className="photo-comment-author"
              >
                {comment.user.first_name} {comment.user.last_name}
              </MuiLink>
              <span className="photo-comment-date">
                {" "}
                · {formatDateTime(comment.date_time)}
              </span>
            </Typography>
            <Typography variant="body1">{comment.comment}</Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}

export default PhotoCard;
