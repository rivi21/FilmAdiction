import { useNavigate } from "react-router-dom";
import { IMAGE_URL, DUMMY_IMAGE_URL } from "../Settings"
import "../routes/Upcoming.css";

export default function Card({ movie }) {

    let navigate = useNavigate();

    const handleClick = filmID => navigate(`/Details/${filmID}`);

    const sliceSinopsis = (text => text.slice(0, 60/* text.indexOf(".") */));

    const src = movie.backdrop_path ? IMAGE_URL + movie.backdrop_path : DUMMY_IMAGE_URL//si no hay imagen me pone la dummy

    return (
        <div key={movie.id} className="card my-2 mx-2 bg-dark" style={{ width: "25em" }} >
            <img src={src} className="card-img-top py-3" alt="..." />
            <div className="card-body text-white bg-dark">
                <h5 className="card-title text-warning">{movie.title}</h5>
                <h6><strong>Premiere: </strong> <span>{movie.release_date}</span></h6>
                <p className="card-text"><strong>Abstract: </strong>{sliceSinopsis(movie.overview)}...</p>
                <button onClick={() => handleClick(movie.id)} className="btn btn-outline-warning">More Info</button>
            </div>
        </div>
    )
}
