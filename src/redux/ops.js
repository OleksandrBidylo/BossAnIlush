import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://672bf8fa1600dda5a9f6e6d8.mockapi.io";

export const fetchInfo = createAsyncThunk("fetchInfo", async (_, thunkApi) => {
  try {
    const { data } = await axios.get("/usersinfo");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addInfo = createAsyncThunk("addInfo", async (body, thunkApi) => {
  try {
    const { data } = await axios.post("/usersinfo", body);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const delelteInfo = createAsyncThunk(
  "deleteInfo",
  async (id, thunkApi) => {
    try {
      await axios.delete(`/usersinfo/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const toggleOrder = createAsyncThunk(
  "toggleOrder",
  async (body, thunkApi) => {
    try {
      const { data } = await axios.put(`usersinfo/${body.id}`, {
        ...body,
        completed: !body.completed,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
