import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

export const fetchTrendingTvData = createAsyncThunk("fetchTrendingTvData", async () => {
  const API_KEY = "31275e8f53732b09ba77ddf6326ba93d";

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const trendingTvSlice = createSlice({
  name: "trendingDay",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingTvData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrendingTvData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTrendingTvData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default trendingTvSlice.reducer;
