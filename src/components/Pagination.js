import { PAGINATION_URL } from "../Settings";
import { useState } from "react";
import "../routes/Upcoming.css";

export default function Pagination({ upcomingPages, setUpcomingArray }) {

    const [pageNumber, setPageNumber] = useState(1);

    function paginationPages() {
        let pagination = [];
        for (let page = pageNumber - 2; page <= pageNumber + 2; page++) {
            if (page < 1 || page > upcomingPages) {
                pagination.push("");

            } else {
                pagination.push(page);
            }
        }
        return pagination;
    };

    function goToPage(page) {
        fetch(`${PAGINATION_URL}${page}`)
            .then(response => response.json())
            .then(data => {
                setUpcomingArray(data.results);
                setPageNumber(page);
            })
    };

    function previous(pageNumber) {
        if (pageNumber > 1) {
            fetch(`${PAGINATION_URL}${pageNumber - 1}`)
                .then(response => response.json())
                .then(data => {
                    setUpcomingArray(data.results);
                    setPageNumber(pageNumber - 1);
                });
        } else {
            alert("Ya estás en la primera página");
        }
    };

    function next(pageNumber) {
        if (pageNumber < upcomingPages) {
            fetch(`${PAGINATION_URL}${pageNumber + 1}`)
                .then(response => response.json())
                .then(data => {
                    setUpcomingArray(data.results);
                    setPageNumber(pageNumber + 1);
                })
        } else {
            alert("Ya no hay más resultados");
        }
    };

    return (
        <div>
            <ul className="pagination my-5">
                <li className="page-item">
                    <button className="page-link bg-dark text-warning" onClick={() => previous(pageNumber)}>
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
                    } else if (element === pageNumber) {
                        return (
                            <li key={element} onClick={() => goToPage(element)} >
                                <button className="page-link current" >{element}</button>
                            </li>
                        )
                    } else {
                        return (
                            <li key={element} onClick={() => goToPage(element)} >
                                <button className="page-link bg-dark text-warning" >{element}</button>
                            </li>
                        )
                    }
                })}
                <li className="page-item">
                    <button className="page-link bg-dark text-warning" onClick={() => next(pageNumber)}>
                        Next
                    </button>
                </li>
            </ul>
        </div>
    )
}
