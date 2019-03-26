import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Breadcrumbs = props => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">
            <i className="ico-home" />
          </Link>
        </BreadcrumbItem>
        {props.breadcrumb.map((crumbs, i) => {
          return BuildCrumbs(crumbs, i);
        })}
      </Breadcrumb>
    </div>
  );
};

const BuildCrumbs = (props, key) => {
  if (props.linkto)
    return (
      <BreadcrumbItem key={key}>
        <Link to={props.linkto}>{props.name}</Link>
      </BreadcrumbItem>
    );
  else
    return (
      <BreadcrumbItem key={key} active>
        {props.name}
      </BreadcrumbItem>
    );
};

export default Breadcrumbs;
