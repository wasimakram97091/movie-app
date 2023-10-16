import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";
import Banner from "./banner/Banner";
import InputSearch from "./inputSearch/InputSearch";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/counter/homeSlice";

import { fetchSearchData } from "../../features/counter/searchSlice";

function Home() {
  const [searchedValue, setSearchedValue] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.homeData.data);

  const getDataFromStore = useSelector((state) => state.searchData.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const callBackHandler = (value) => {
    dispatch(fetchSearchData(value));
    if (getDataFromStore) {
      setSearchedValue(searchedValue);
    }
  };

  const img_url = data?.results?.[0]?.backdrop_path;

  const baseImgUrl = img_url ? `https://image.tmdb.org/t/p/original/${img_url}` : "";
  const backgroundImageUrl = baseImgUrl;
  const divStyle = {
    backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : "",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
  };

  return (
    <>
      <div className={Styles.main} style={divStyle}>
        <div className={Styles.main__container}>
          <div className={Styles.main__container__content}>
            <Banner />
            <InputSearch callBackHandler={callBackHandler} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
