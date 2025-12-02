import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://nomad-movies.nomadcoders.workers.dev/movies/${id}`
      )
    ).json();
    setMovie(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <img src={movie.poster_path} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.tagline}</p>
      <p>{movie.overview}</p>
      <p>Runtime: {movie.runtime} min</p>
      <p>Release: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>

      <p>
        Genres:{" "}
        {movie.genres.map((g) => g.name).join(", ")}
      </p>
    </div>
  );
}

export default Detail;