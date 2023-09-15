import React from 'react'
import { Pagination } from 'react-bootstrap'

const CustomPagination = ({ total, current, onChangePage }) => {
    let items = []

    if (current === 1) {
      items.push(
          <Pagination.First
              key="first"
              className="first-tab"
              onClick={() => onChangePage(1)}
          />
      )
    }

    if (current > 1) {
        items.push(
            <Pagination.Prev
                key="prev"
                className="previous"
                onClick={() => onChangePage(current - 1)}
            />
        )
    }

    for (let page = 1; page <= total; page++) {
        if (
            page <= 2 ||
            page >= total - 1 ||
            (page >= current - 1 && page <= current + 1)
        )
        {
            items.push(
                <Pagination.Item
                    key={page}
                    data-page={page}
                    active={page === current}
                    onClick={() => onChangePage(page)}
                >
                    {page}
                </Pagination.Item>
            )
        } 
        else {
            if (current > 4 && current - page === 2) {
                items.filter((i) => i.key !== 'prevDot')
                items.push(
                    <Pagination.Ellipsis
                        key="prevDot"
                        className="pagination-dot"
                        onClick={() => onChangePage(current - 2)}
                    />
                )
            }

            if(page - current === 2) {
                items.push(
                    <Pagination.Ellipsis
                        key="nextDot"
                        className="pagination-dot"
                        onClick={() => onChangePage(current + 2)}
                    />
                )
            }
        }
    }
    if (current < total) {
        items.push(
            <Pagination.Next
                key="next"
                className="next"
                onClick={() => onChangePage(current + 1)}
            />
        )
    }
    return <Pagination className="pagination-items">{items}</Pagination>
}

export default React.memo(CustomPagination)
