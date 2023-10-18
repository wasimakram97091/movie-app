import React, { useState, useEffect } from "react";
import Styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularTvData } from "../../features/counter/popularTvSlice";
import MovieCard from "../movieCard/MovieCard";
import Loading from "../loader/Loading";
import { fetchDataGenre } from "../../features/counter/topRatedGenreSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PopularTv() {
  const dispatch = useDispatch();
  const popularTvData = useSelector((state) => state.popularTvData);
  const genreData = useSelector((state) => state.topRatedGenre.data);
  const loading = popularTvData.loading;
  const popularTvResults = popularTvData.data.results;

  const [genreIdVSName, setGenreIdVSName] = useState(new Map());

  useEffect(() => {
    dispatch(fetchPopularTvData());
    dispatch(fetchDataGenre());
  }, [dispatch]);

  useEffect(() => {
    if (genreData && genreData.genres) {
      const genreMap = new Map();
      genreData.genres.forEach((genre) => {
        genreMap.set(genre.id.toString(), genre.name);
      });
      setGenreIdVSName(genreMap);
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
        breakpoint: 576,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={Styles.main}>
      <div className={Styles.main__container}>
        <div className={Styles.main__container__content}>
          {loading ? (
            <Loading />
          ) : (
            <div className={Styles.sliderContainer}>
              {popularTvResults && popularTvResults.length > 0 ? (
                <Slider {...settings}>
                  {popularTvResults.map((item) => (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default PopularTv;
