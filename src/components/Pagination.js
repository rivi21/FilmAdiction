import { PAGINATION_URL } from "../Settings";
import { useState, useEffect } from "react";
import "../routes/Upcoming.css";

export default function Pagination({ upcomingPages, setUpcomingArray }) {

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch(`${PAGINATION_URL}${currentPage}`)
            .then(response => response.json())
            .then(data => {
                setUpcomingArray(data.results);
            })
    }, [currentPage])

    function paginationPages() {
        let pagination = [];
        for (let page = currentPage - 2; page <= currentPage + 2; page++) {
            if (page < 1 || page > upcomingPages) {
                pagination.push("");

            } else {
                pagination.push(page);
            }
        }
        return pagination;
    };

    function previous(currentPage) {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else {
            alert("Ya estás en la primera página");
        }
    };

    function next(currentPage) {
        if (currentPage < upcomingPages) {
            setCurrentPage(currentPage + 1);
        } else {
            alert("Ya no hay más resultados");
        }
    };

    return (
        <div>
            <ul className="pagination my-5">
                <li className="page-item">
                    <button className="page-link bg-dark text-warning" onClick={() => previous(currentPage)}>
                        Previous
                    </button>
                </li>
                {paginationPages().map(element => {
                    if (element === "") {
                        return (
                            <li key={element.index} className="page-non-button" >
                                <button className="page-link bg-warning text-warning" >{0}</button>
                            </li>
                        )
                    } else if (element === currentPage) {
                        return (
                            <li key={element} onClick={() => setCurrentPage(element)} >
                                <button className="page-link current" >{element}</button>
                            </li>
                        )
                    } else {
                        return (
                            <li key={element} onClick={() => setCurrentPage(element)} >
                                <button className="page-link bg-dark text-warning" >{element}</button>
                            </li>
                        )
                    }
                })}
                <li className="page-item">
                    <button className="page-link bg-dark text-warning" onClick={() => next(currentPage)}>
                        Next
                    </button>
                </li>
            </ul>
        </div>
    )
}
