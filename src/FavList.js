import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Input, message } from "antd";
import { Circles } from "react-loader-spinner";
import { getFavList, setFavRecords } from "./store/appslice";
import "antd/dist/antd.css";
import { columns } from "./columns";

const { Search } = Input;

function FavList() {
  const dispatch = useDispatch();
  const { favList, loader, favRecord } = useSelector((state) => state.app);
  const [searchData, setsearchData] = useState([]);
  useEffect(() => {
    dispatch(getFavList({ page: 1, count: 6 }));
  }, [dispatch]);

  const handlePaginationChange = (pagination) => {
    dispatch(getFavList({ page: pagination?.current, count: 6 }));
  };

  const handleCount = (record) => {
    dispatch(setFavRecords(record));
    message.info("Added to Favourite List");
  };

  const handleSearch = (e) => {
    const search = e?.target?.value.toLowerCase();
    const searchValue = favList?.data?.filter(
      (i) => i.first_name.toLowerCase() === search
    );
    setsearchData(searchValue);
  };

  return (
    <div>
      {loader && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "230px 0",
          }}
        >
          <Circles height="50" width="50" color="blue" ariaLabel="loading" />
          <h1>Loading...</h1>
        </div>
      )}

      {favList.data && !loader && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "5px 10px",
          }}
        >
          <Search
            placeholder="Search First Name"
            onChange={(e) => handleSearch(e)}
            style={{ width: "200px", margin: "10px 0" }}
          />
          <Table
            size="small"
            columns={columns({ handleCount, favRecord })}
            dataSource={searchData.length ? searchData : favList?.data}
            pagination={{ total: favList?.total, current: favList?.page }}
            onChange={handlePaginationChange}
            rowKey="id"
          />
        </div>
      )}
    </div>
  );
}

export default FavList;
