import React from 'react'
import 'rsuite/dist/rsuite.min.css';
import { Pagination } from 'rsuite'

function PaginationSection() {
  const total = 30;
  const [currPage, setCurrPage] = React.useState(5);
  return (
    <>
      <Pagination
        last
        prev={"previous"}
        next={"next"}
        first
        size="lg"
        total={100}
        limit={10}
        activePage={currPage}
        onChangePage={setCurrPage}
      />
    </>
  )
}
export default PaginationSection