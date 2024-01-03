import React, { useState, useEffect } from "react";
import Styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieListData } from "../../features/counter/movieListSlice";
import MovieCard from "../movieCard/MovieCard";
import Loading from "../loader/Loading";
import { useNavigate } from "react-router-dom";

function MovieList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movieListData.data);
  const loading = useSelector((state) => state.movieListData.loading);
  const genreData = useSelector((state) => state.topRatedGenre.data);
  const [genreIdVSName, setGenreIdVSName] = useState(new Map());

  useEffect(() => {
    dispatch(fetchMovieListData());
  }, [dispatch]);

  useEffect(() => {
    if (genreData) {
      const data = new Map();

      genreData?.genres?.forEach((element) => {
        data.set(element.id.toString(), element.name);
      });
      setGenreIdVSName(data);
    }
  }, [genreData]);

  const backToHome = () => {
    navigate("/home");
  };

  return (
    <>
      {data ? (
        <div>
          {loading ? (
            <Loading />
          ) : (
            <div className={Styles.main}>
              <div className={Styles.main__container}>
                <button onClick={backToHome}>
                  <i className="fa-solid fa-arrow-left-long"></i> Back
                </button>
                <h2>"Movies" find for you</h2>
                <div className={Styles.main__container__content}>
                  {Array.isArray(data.results) && data.results.length > 0 ? (
                    data.results.map((item) => (
                      <MovieCard
                        key={item.id}
                        topRated_tv_original_name={!item.original_name ? item.title : item.original_name}
                        topRated_tv_backgroundImageUrl={item.poster_path}
                        topRated_tv_first_air_date={!item.first_air_date ? item.release_date : item.first_air_date}
                        topRated_tv_rating={item.vote_average}
                        chipId={item.genre_ids}
                        genreIdVSName={genreIdVSName}
                        id={item.id}
                      />
                    ))
                  ) : (
                    <p>Sorry... No data available for this item.</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default MovieList;
