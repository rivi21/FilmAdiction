import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import Landing from "./routes/Landing"; */
import NavBar from "./components/Navbar"
import Upcoming from "./routes/Upcoming";
import Details from "./routes/Details";
import Error from "./routes/Error";
import Footer from "./components/Footer";
import "./Router.css";

export default function Router() {

    return (
        <div className="bg-warning">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    {/* <Route exact path="/Filmadiction" element={<Landing />} /> */}
                    <Route path="/Filmadiction" element={<Upcoming />} />
                    <Route path="/Details/:filmID" element={<Details />} />
                    <Route element={<Error />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}
