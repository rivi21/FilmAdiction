import { NavLink } from "react-router-dom";
import { THE_MOVIEDB_URL} from "../Settings"

export default function Navbar() {
    return (
        <nav className="nav-bar bg-dark py-4">
            <NavLink to="/FilmAdiction" className="nav-link" >HOME</NavLink>
            <h1 className="nav-title text-center text-white m-0 pt-2">FILMADICTION</h1>
            <a href={THE_MOVIEDB_URL} className="nav-link text-end" target="_blank" rel="noreferrer" >TMDB</a>
        </nav>

    );
};
