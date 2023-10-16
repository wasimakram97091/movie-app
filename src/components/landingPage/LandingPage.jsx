import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";
import Footer from "../footer/Footer";
import Home from "../homePage/Home";
import TopRated from "../topRated/TopRated";
import Heading from "../heading/Heading";
import TopRatedMovie from "../topRatedMovie/TopRatedMovie";
import TrendingDay from "../trendingDay/TrendingDay";
import TrendingWeek from "../trendingWeek/TrendingWeek";
import PopularTv from "../popularTv/PopularTv";
import PopularMovie from "../popularMovie/PopularMovie";
import { useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";

function LandingPage() {
  const [showTopRatedTv, setShowTopRatedTv] = useState(true);
  const [showTopRatedMovie, setShowTopRatedMovie] = useState(false);
  const [showTrendingDay, setShowTrendingDay] = useState(true);
  const [showTrendingWeek, setShowTrendingWeek] = useState(false);
  const [showPopularTv, setShowPopularTv] = useState(true);
  const [showPopularMovie, setShowPopularMovie] = useState(false);
  const [searchedValue, setSearchedValue] = useState(false);
  const getDataFromStore = useSelector((state) => state.searchData.data);

  const handleToggle = (selectedOption, section) => {
    if (selectedOption === "TV") {
      if (section === "topRated") {
        setShowTopRatedTv(true);
        setShowTopRatedMovie(false);
      } else if (section === "trending") {
        setShowTrendingDay(true);
        setShowTrendingWeek(false);
      } else if (section === "popular") {
        setShowPopularTv(true);
        setShowPopularMovie(false);
      }
    } else if (selectedOption === "Movie") {
      if (section === "topRated") {
        setShowTopRatedTv(false);
        setShowTopRatedMovie(true);
      } else if (section === "trending") {
        setShowTrendingDay(false);
        setShowTrendingWeek(true);
      } else if (section === "popular") {
        setShowPopularTv(false);
        setShowPopularMovie(true);
      }
    }
  };

  useEffect(() => {
    if (Object.keys(getDataFromStore).length) setSearchedValue(true);
  }, [searchedValue]);

  return (
    <div className={Styles.main}>
      <Navbar />
      <div className={Styles.main__container}>
        <div className={Styles.main__container__content}>
          <div>
            <div className={Styles.main__container__content__home}>
              <Home />
            </div>
            <div className={Styles.main__container__content__heading}>
              <Heading TopRatedHaed={"Top Rated"} TopRatedTvBtn={"TV"} TopRatedMovieBtn={"Movie"} onToggle={(selectedOption) => handleToggle(selectedOption, "topRated")} />
            </div>
            <div className={Styles.main__container__content__topRated}>
              {showTopRatedTv && <TopRated />}
              {showTopRatedMovie && <TopRatedMovie />}
            </div>
            <div className={Styles.main__container__content__heading}>
              <Heading TopRatedHaed={"Trending"} TopRatedTvBtn={"Day"} TopRatedMovieBtn={"Week"} onToggle={(selectedOption) => handleToggle(selectedOption, "trending")} />
            </div>
            <div className={Styles.main__container__content__trending}>
              {showTrendingDay && <TrendingDay />}
              {showTrendingWeek && <TrendingWeek />}
            </div>
            <div className={Styles.main__container__content__heading}>
              <Heading TopRatedHaed={"Popular"} TopRatedTvBtn={"TV"} TopRatedMovieBtn={"Movie"} onToggle={(selectedOption) => handleToggle(selectedOption, "popular")} />
            </div>
            <div className={Styles.main__container__content__popular}>
              {showPopularTv && <PopularTv />}
              {showPopularMovie && <PopularMovie />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
