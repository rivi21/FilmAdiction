import { IMDB_URL, THE_MOVIEDB_URL, GITHUB_REPO, GITHUB_ICON, LINKEDIN, LINKEDIN_LOGO } from "../Settings";

export default function Footer() {
    return (
        <footer className="footer-container bg-dark text-white">
            <div className= "footer-links pt-4">
                <ul>
                    <h3 className="">Links</h3>
                    <li className="pb-1">
                        <a href={GITHUB_REPO} className="link" target="_blank" rel="noreferrer">
                            <span>Github</span>
                            <img src={GITHUB_ICON} alt="github logo" className="logo-github px-4" />
                        </a>
                    </li>
                    <li className="pb-2">
                        <a className="link" href={IMDB_URL} target="_blank" rel="noreferrer">Imdb</a>
                    </li>
                    <li>
                        <a className="link" href={THE_MOVIEDB_URL} target="_blank" rel="noreferrer">The Movie Database</a>
                    </li>
                </ul>
            </div>
            <div className="footer-info text-center pt-4">
                <ul>
                    <h3 className="">Created by</h3>
                    <li className="pb-1"><span>Javier Rivas Navarro</span></li>
                    <li><span>December, 2021</span></li>
                </ul>
            </div>
            <div className="footer-contact text-end pt-4 pe-5">
                <h3 className="contact h2 pb-1">Contact</h3>
                <a href={LINKEDIN} target="_blank" rel="noreferrer">
                    <img src={LINKEDIN_LOGO} alt="LinkedIn logo" className="logo-linkedIn" />
                </a>
            </div>
        </footer>
    )
}
