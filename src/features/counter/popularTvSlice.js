import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

export const fetchPopularTvData = createAsyncThunk("fetchPopularTvData", async () => {
  const API_KEY = "31275e8f53732b09ba77ddf6326ba93d";

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const popularTvSlice = createSlice({
  name: "popularTv",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularTvData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularTvData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPopularTvData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default popularTvSlice.reducer;
