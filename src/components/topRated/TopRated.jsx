import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/counter/topRatedSlice";
import MovieCard from "../movieCard/MovieCard";
import Loading from "../loader/Loading";
import { fetchDataGenre } from "../../features/counter/topRatedGenreSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopRated() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.topRatedData.data);
  const loading = useSelector((state) => state.topRatedData.loading);
  const genreData = useSelector((state) => state.topRatedGenre.data);

  const [genreIdVSName, setGenreIdVSName] = useState(new Map());

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchDataGenre());
  }, [dispatch]);

  useEffect(() => {
    if (genreData?.genres) {
      const data = new Map();

      genreData.genres.forEach((element) => {
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
      {
        breakpoint: 1244,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  console.log(data);
  return (
    <div className={Styles.main}>
      <div className={Styles.main__container}>
        <div className={Styles.main__container__content}>
          {loading ? (
            <Loading />
          ) : (
            <Slider {...settings}>
              {Array.isArray(data.results) ? (
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
                <p>No data available</p>
              )}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopRated;
