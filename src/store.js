import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/counter/dataSlice";
import homeReducer from "./features/counter/homeSlice";
import topRatedReducer from "./features/counter/topRatedSlice";
import topRatedGenreReducer from "./features/counter/topRatedGenreSlice";
import topRatedMovieReducer from "./features/counter/topRatedMovieSlice";
import trendingDayReducer from "./features/counter/trendingTvSlice";
import trendingWeekReducer from "./features/counter/trendingWeekSlice";
import popularTvReducer from "./features/counter/popularTvSlice";
import popularMovieReducer from "./features/counter/popularMovieSlice";
import detailsReducer from "./features/counter/detailsSlice";
import topCastReducer from "./features/counter/topCastSlice";
import similarSlice from "./features/counter/similarSlice";
import recommendationReducer from "./features/counter/recommendationSlice";
import videoSlice from "./features/counter/videoSlice";
import searchdataSlice from "./features/counter/searchSlice";
import movieListReducer from "./features/counter/movieListSlice";
import tvListReducer from "./features/counter/tvListSlice";
import authReducer from "./features/counter/authSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    homeData: homeReducer,
    topRatedData: topRatedReducer,
    topRatedGenre: topRatedGenreReducer,
    topRatedMovieData: topRatedMovieReducer,
    trendingDayData: trendingDayReducer,
    trendingWeekData: trendingWeekReducer,
    popularTvData: popularTvReducer,
    popularMovieData: popularMovieReducer,
    detailsData: detailsReducer,
    topCastData: topCastReducer,
    similarData: similarSlice,
    recommendationData: recommendationReducer,
    videoData: videoSlice,
    searchData: searchdataSlice,
    movieListData: movieListReducer,
    tvListData: tvListReducer,
    auth: authReducer,
  },
});

export default store;
