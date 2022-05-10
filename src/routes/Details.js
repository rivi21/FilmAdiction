import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { DETAILS_URL, IMAGE_URL, IMDB_TITLE_URL } from "../Settings";

import "./Details.css"

export default function Details() {

    const { filmID } = useParams()
    const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        fetch(DETAILS_URL.replace('{movie_id}', filmID))
            //fetch(`https://api.themoviedb.org/3/movie/${filmID}?api_key=e158c4d859f3cde583084a64eb21c98c&language=en-US`)
            .then(response => response.json())
            .then(data => setMovieDetails(data))
    }, [filmID]);

    return (
        <main className="flex-parent m-5">
            <img className="flex-child-1" src={IMAGE_URL + movieDetails.poster_path} alt="movie poster" />
            <article className="flex-child-2 mx-5">
                <h1 className="title">{movieDetails.original_title}</h1>
                <h2 className="tagline">{movieDetails.tagline}</h2>
                <div>
                    <h3 className="pb-3">Genres: </h3>
                    {movieDetails.genres?.map(genre => {
                        return <span className="genre text-warning bg-dark ms-3 px-3 py-2" key={genre.name}>{genre.name}</span>
                    })}
                </div>
                <div>
                    <h3><strong>Overview: </strong></h3>
                    {movieDetails.overview}
                </div>
                <div>
                    <h3><strong>Release date: </strong></h3>
                    <span>{movieDetails.release_date}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <p><h3><strong>Rating: </strong></h3>
                        {movieDetails.vote_average} / 10
                    </p>
                    <a href={IMDB_TITLE_URL + movieDetails.imdb_id} target="_blank" rel="noreferrer">
                        <button className="imdb text-warning bg-dark py-3 px-5 me-5">
                            <h3>imdb</h3>
                        </button>
                    </a>
                </div>
            </article>
        </main>
    )
}
