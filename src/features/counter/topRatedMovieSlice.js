import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchDataTopRatedMovie = createAsyncThunk("fetchDataTopRatedMovie", async () => {
  const API_KEY = "31275e8f53732b09ba77ddf6326ba93d";

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const topRatedMovieSlice = createSlice({
  name: "topRatedMovieData",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchDataTopRatedMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataTopRatedMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDataTopRatedMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default topRatedMovieSlice.reducer;
