import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  favList: {},
  loader: true,
  favRecord: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setFavList: (state, { payload }) => {
      state.favList = payload;
    },
    setLoader: (state, { payload }) => {
      state.loader = payload;
    },
    setFavRecords: (state, { payload }) => {
      let same = false;
      let add = { ...payload };

      if (state.favRecord.length === 0) {
        state.favRecord.push({ ...add, fav: 1 });
      } else {
        const addRecord = state.favRecord.map((item) => {
          if (item?.id === add?.id) {
            same = true;
            return { ...item, fav: item.fav + 1 };
          }
          return item;
        });

        if (same) state.favRecord = addRecord;
        else state.favRecord.push({ ...add, fav: 1 });
      }
    },
  },
});

export const getFavList =
  ({ page = 1, count = 6 }) =>
  async (dispatch) => {
    axios
      .get(`https://reqres.in/api/users?page=${page}&per_page=${count}&delay=1`)
      .then((res) => {
        dispatch(setLoader(true));

        setTimeout(() => {
          dispatch(setFavList(res?.data));
          dispatch(setLoader(false));
        }, 1000);
      });
  };

export const { setFavList, setLoader, setFavRecords } = appSlice.actions;

export default appSlice.reducer;
