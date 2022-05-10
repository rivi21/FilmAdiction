const TOKEN = "api_key=e158c4d859f3cde583084a64eb21c98c";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

const UPCOMING_URL = `${BASE_URL}upcoming?${TOKEN}`;
const DETAILS_URL = `${BASE_URL}{movie_id}?${TOKEN}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
const DUMMY_IMAGE_URL = "https://via.placeholder.com/500x281?text=No+image+found";
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie/?${TOKEN}&query=`;

const PAGINATION_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=e158c4d859f3cde583084a64eb21c98c&page=`;

const IMDB_TITLE_URL = "https://www.imdb.com/title/";

const IMDB_URL = "https://www.imdb.com/";
const THE_MOVIEDB_URL = "https://www.themoviedb.org";
const GITHUB_REPO = "https://github.com/rivi21/FilmAdiction";
const GITHUB_ICON = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08qeDPzI-5zcgKBDixjKaPu5t2J-6co2Nqa9qMxUtNLjURxfDUOKJdAnZZZUreT3nE4k&usqp=CAU";
const LINKEDIN = "https://www.linkedin.com/in/javier-rivas-navarro/";
const LINKEDIN_LOGO = "https://e7.pngegg.com/pngimages/600/60/png-clipart-computer-icons-linkedin-social-media-social-media-angle-text.png";

export {
    TOKEN,
    BASE_URL,
    UPCOMING_URL,
    DETAILS_URL,
    IMAGE_URL,
    DUMMY_IMAGE_URL,
    SEARCH_URL,
    PAGINATION_URL,
    IMDB_TITLE_URL,
    IMDB_URL,
    THE_MOVIEDB_URL,
    GITHUB_REPO,
    GITHUB_ICON,
    LINKEDIN,
    LINKEDIN_LOGO
}