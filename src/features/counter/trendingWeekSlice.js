import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const fetchTrendingWeekData = createAsyncThunk("fetchTrendingWeekData", async () => {
  const API_KEY = "31275e8f53732b09ba77ddf6326ba93d";

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const trendingWeekSlice = createSlice({
  name: "trendingWeek",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingWeekData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrendingWeekData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTrendingWeekData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default trendingWeekSlice.reducer;
