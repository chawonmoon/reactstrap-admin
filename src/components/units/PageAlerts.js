import React from "react";
import { Alert } from "reactstrap";

const PageAlerts = props => {
  return (
    <div>
      <Alert color="primary">경고 primary</Alert>
      <Alert color="secondary">경고 secondary</Alert>
      <Alert color="success">경고 success</Alert>
      <Alert color="danger">경고 danger</Alert>
      <Alert color="warning">경고 warning</Alert>
      <Alert color="info">경고 info</Alert>
      <Alert color="dark">경고 dark</Alert>
    </div>
  );
};

export default PageAlerts;
