import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  data: [],
  error: null,
};

export const fetchSimilarData = createAsyncThunk("fetchSimilarData", async (id) => {
  const API_KEY = "31275e8f53732b09ba77ddf6326ba93d";

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`);

    return response.data;
  } catch (error) {
    throw error;
  }
});

const similarSlice = createSlice({
  name: "similarData",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchSimilarData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSimilarData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSimilarData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default similarSlice.reducer;
