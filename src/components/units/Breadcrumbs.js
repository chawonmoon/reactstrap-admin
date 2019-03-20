import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { withRouter } from "react-router";

const Breadcrumbs = props => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#none">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#none">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#none">Library</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default withRouter(Breadcrumbs);
