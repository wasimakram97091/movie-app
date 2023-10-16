import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: {},
  error: null,
};

export const fetchSearchData = createAsyncThunk("fetchSearchData", async (searchedByUser) => {
  const API_KEY = "31275e8f53732b09ba77ddf6326ba93d";
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${searchedByUser}&api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const searchSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSearchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
