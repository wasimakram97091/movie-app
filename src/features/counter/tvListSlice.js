import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const fetchTvListData = createAsyncThunk("fetchTvListData", async () => {
  const API_KEY = "31275e8f53732b09ba77ddf6326ba93d";

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const tvListSlice = createSlice({
  name: "tvList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTvListData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTvListData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTvListData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default tvListSlice.reducer;
