import React from "react";
import { Alert, Button, Card, CardContent, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

const DETAIL_FIELDS = [
  { label: "Nghề nghiệp", key: "occupation" },
  { label: "Nơi ở", key: "location" },
  { label: "Giới thiệu", key: "description" },
];

/**
 * Define UserDetail, a React component of the photo-sharing app.
 * Shows the details of the user given by the :userId route parameter,
 * with a link to that user's photos.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return <Alert severity="error">Không tìm thấy người dùng này.</Alert>;
  }

  return (
    <Card className="user-detail" variant="outlined">
      <CardContent>
        <Typography variant="h4" component="h2" gutterBottom>
          {user.first_name} {user.last_name}
        </Typography>

        {DETAIL_FIELDS.map(({ label, key }) => (
          <Typography key={key} variant="body1" className="user-detail-row">
            <span className="user-detail-label">{label}:</span> {user[key]}
          </Typography>
        ))}

        <div className="user-detail-actions">
          <Button variant="contained" component={Link} to={`/photos/${user._id}`}>
            Xem ảnh
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default UserDetail;
