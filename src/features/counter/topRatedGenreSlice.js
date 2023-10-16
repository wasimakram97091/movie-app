import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  data: [],
  error: null,
};

export const fetchDataGenre = createAsyncThunk("fetchDataGenre", async () => {
  const API_KEY = "31275e8f53732b09ba77ddf6326ba93d";

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const topRatedGenreSlice = createSlice({
  name: "topRatedGenre",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchDataGenre.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataGenre.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDataGenre.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default topRatedGenreSlice.reducer;
