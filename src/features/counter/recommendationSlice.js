import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  data: [],
  error: null,
};

export const fetchRecommendationData = createAsyncThunk("fetchRecommendationData", async (id) => {
  const API_KEY = "31275e8f53732b09ba77ddf6326ba93d";

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`);

    return response.data;
  } catch (error) {
    throw error;
  }
});

const recommendationSlice = createSlice({
  name: "RecommendationData",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendationData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecommendationData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRecommendationData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default recommendationSlice.reducer;
