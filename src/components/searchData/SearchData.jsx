import React, { useState, useEffect } from "react";
import Styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../movieCard/MovieCard";
import Loading from "../loader/Loading";
import { fetchDataGenre } from "../../features/counter/topRatedGenreSlice";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";

function SearchData() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.searchData.data);
  const loading = useSelector((state) => state.searchData.loading);
  const genreData = useSelector((state) => state.topRatedGenre.data);
  const [genreIdVSName, setGenreIdVSName] = useState(new Map());

  useEffect(() => {
    dispatch(fetchDataGenre());
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
      {loading ? (
        <Loading />
      ) : (
        <div className={Styles.main}>
          <div className={Styles.main__container}>
            <button onClick={backToHome}>
              <i className="fa-solid fa-arrow-left-long"></i> Back
            </button>
            <h2>Movies find for you</h2>
            <div className={Styles.main__container__content}>
              {Array.isArray(data.results) && data.results.length > 0 ? (
                data.results.map((item) => (
                  <MovieCard
                    key={item.id}
                    topRated_tv_original_name={item.original_title}
                    topRated_tv_backgroundImageUrl={item.poster_path}
                    topRated_tv_first_air_date={item.release_date}
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
          <Footer />
        </div>
      )}
    </>
  );
}

export default SearchData;
