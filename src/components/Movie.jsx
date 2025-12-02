import propTypes from "prop-types";
import {Link } from "react-router-dom";

function Movie({id, coverImg, title, overview, original_language, genre_ids}) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{overview}</p>
            <p>{original_language}</p>
            <ul>
                {genre_ids.map((genreId) => (
                <li key={genreId}>{genreId}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    coverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    overview: propTypes.string.isRequired,
    original_language: propTypes.string.isRequired,
    genre_ids: propTypes.arrayOf(propTypes.number).isRequired,
};

export default Movie;