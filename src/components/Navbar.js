import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav-bar bg-dark py-4">
            <NavLink to="/" className="nav-link ps-5" >Home</NavLink>
            <h1 className="nav-title text-center text-white m-0 pt-2">FILMADICTION</h1>
            <NavLink to="/upcoming" className="nav-link text-end pe-5" >Upcoming</NavLink>
        </nav>

    );
};
