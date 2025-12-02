import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://nomad-movies.nomadcoders.workers.dev/movies`
      )
    ).json();
    setMovies(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
      <div>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.backdrop_path}
            title={movie.title}
            overview={movie.overview}
            original_language={movie.original_language}
            genre_ids={movie.genre_ids}
          />
        ))}
        </div>
      )}
    </div>
  );
};

export default Home;