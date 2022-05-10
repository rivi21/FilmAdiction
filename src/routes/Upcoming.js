import { UPCOMING_URL } from "../Settings";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

import "./Upcoming.css";

export default function Upcoming() {

    const [upcomingArray, setUpcomingArray] = useState([]);
    const [upcomingPages, setUpcomingPages] = useState(0);

    useEffect(() => {
        fetch(UPCOMING_URL)
            .then(response => response.json())
            .then(data => {
                setUpcomingArray(data.results)
                setUpcomingPages(data.total_pages)
            })
    }, []);

    return (
        <div className="m-5" >
            <div className="flexi">
                <h1 className="mb-5">Upcoming Movies</h1>
                <Search setUpcomingArray={setUpcomingArray} />
                <Pagination upcomingPages={upcomingPages} setUpcomingArray={setUpcomingArray} />
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-around">
                {upcomingArray.map(movie => <Card key={movie.id} movie={movie} />)}
            </div>
            <div className="flexi">
                <Pagination upcomingPages={upcomingPages} setUpcomingArray={setUpcomingArray} />
            </div>
        </div>
    )
}

