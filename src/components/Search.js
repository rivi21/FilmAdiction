import { UPCOMING_URL } from "../Settings";
import "../routes/Upcoming.css";

export default function Search({ setUpcomingArray }) {

    function searchMovies(e) {
        fetch(`${UPCOMING_URL}&query=${e.target.value}`)
            .then(response => response.json())
            .then(data => setUpcomingArray(data.results.filter(movie => movie.title.toUpperCase().includes(e.target.value.toUpperCase()))));
    };

    return (
        <div>
            <input onInput={(e) => searchMovies(e)} type="text" className="finder bg-warning text-dark border-white ps-4"
                placeholder="Search a movie" />
        </div>
    )
};
