import React from 'react';
import './Pagination.css';
import {IPagination} from "../../common/interfaces";

interface IPaginationProps {
    pagination: IPagination,
    change: (event: any) => void
}

const Pagination: React.FC<IPaginationProps> = ({pagination, change}) => {

    function getPagesList(): Array<number> {
        let pages = [1];
        for (let i = pagination.currentPage - 2; i <= pagination.currentPage + 2; i++) {
            if (i > pages[pages.length - 1] && i < pagination.totalPages) {
                if (i > pages[pages.length - 1] + 1) {
                    pages.push(-1);
                }
                pages.push(i);
            }
        }
        if (pagination.totalPages > pages[pages.length - 1]) {
            if (pagination.totalPages > pages[pages.length - 1] + 1) {
                pages.push(-1);
            }
            pages.push(pagination.totalPages);
        }
        return pages;
    }

    return (
        <div className="pagination-wrapper">
            {
                getPagesList().map((page) => {
                    if (page > 0) {
                        return (
                            <div
                                className={"page-link" + ((page === pagination.currentPage) ? " active" : "")}
                                onClick={() => change(page)}
                            >{page}</div>
                        )
                    } else {
                        return (
                            <div className="page-interval">...</div>
                        )
                    }
                })
            }
        </div>
    );
}

export default Pagination;
