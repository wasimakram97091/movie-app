import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk("fetchData", async () => {
  const API_KEY = "31275e8f53732b09ba77ddf6326ba93d";
  try {
    const response = await axios.get(`
https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);

    return response.data;
  } catch (error) {
    throw error;
  }
});

fetchData();

const homeSlice = createSlice({
  name: "homeData",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default homeSlice.reducer;
