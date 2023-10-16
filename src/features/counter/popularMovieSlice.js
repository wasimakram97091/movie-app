import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

export const fetchPopularMovieData = createAsyncThunk("fetchPopularMovieData", async () => {
  const API_KEY = "31275e8f53732b09ba77ddf6326ba93d";

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const popularMovieSlice = createSlice({
  name: "popularMovie",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovieData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularMovieData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPopularMovieData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default popularMovieSlice.reducer;
