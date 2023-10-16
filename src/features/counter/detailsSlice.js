import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchDetailsData = createAsyncThunk("fetchDetailsData", async (id) => {
  const API_KEY = "31275e8f53732b09ba77ddf6326ba93d";

  try {
    const response = await axios.get(`
https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const detailsSlice = createSlice({
  name: "detailsData",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDetailsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDetailsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default detailsSlice.reducer;
