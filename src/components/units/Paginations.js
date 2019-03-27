import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class Paginations extends Component {
  render() {
    return (
      <Pagination aria-label="Page navigation Paging">
        <PaginationItem disabled={true}>
          <PaginationLink aria-label="First" href="javascript:void(0);">
            <span aria-hidden="true">&#171;</span>
            <span className="sr-only">First</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem disabled={true}>
          <PaginationLink aria-label="Previous" href="javascript:void(0);">
            <span aria-hidden="true">&#8249;</span>
            <span className="sr-only">Previous</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="javascript:void(0);">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="javascript:void(0);">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="javascript:void(0);">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="javascript:void(0);">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="javascript:void(0);">5</PaginationLink>
        </PaginationItem>
        <PaginationItem disabled={false}>
          <PaginationLink aria-label="Next" href="javascript:void(0);">
            <span aria-hidden="true">&#8250;</span>
            <span className="sr-only">Next</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem disabled={false}>
          <PaginationLink aria-label="Last" href="javascript:void(0);">
            <span aria-hidden="true">&#187;</span>
            <span className="sr-only">Last</span>
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    );
  }
}
export default Paginations;
