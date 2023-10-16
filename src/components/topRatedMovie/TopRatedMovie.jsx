import React, { useState, useEffect } from "react";
import Styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataTopRatedMovie } from "../../features/counter/topRatedMovieSlice";
import MovieCard from "../movieCard/MovieCard";
import Loading from "../loader/Loading";
import { fetchDataGenre } from "../../features/counter/topRatedGenreSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopRatedMovie() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.topRatedMovieData.data);
  const loading = useSelector((state) => state.topRatedMovieData.loading);
  const genreData = useSelector((state) => state.topRatedGenre.data);
  const [genreIdVSName, setGenreIdVSName] = useState(new Map());

  useEffect(() => {
    dispatch(fetchDataTopRatedMovie());
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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={Styles.main}>
          <div className={Styles.main__container}>
            <div className={Styles.main__container__content}>
              {Array.isArray(data.results) ? (
                <Slider {...settings}>
                  {data &&
                    genreData &&
                    genreIdVSName.size &&
                    data.results.map((item) => (
                      <MovieCard
                        key={item.id}
                        topRated_tv_original_name={item.title}
                        topRated_tv_backgroundImageUrl={item.poster_path}
                        topRated_tv_first_air_date={item.release_date}
                        topRated_tv_rating={item.vote_average}
                        chipId={item.genre_ids}
                        genreIdVSName={genreIdVSName}
                        id={item.id}
                      />
                    ))}
                </Slider>
              ) : (
                <p>No data available</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TopRatedMovie;