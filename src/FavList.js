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
  const { favList, loader } = useSelector((state) => state.app);
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
        <Circles height="50" width="50" color="blue" ariaLabel="loading" />
      )}

      {favList.data && !loader ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "0px",
            margin: "0 10px",
          }}
        >
          <Search
            placeholder="Search First Name"
            onChange={(e) => handleSearch(e)}
            style={{ width: "200px", marginBottom: "10px" }}
          />
          <Table
            columns={columns({ handleCount })}
            dataSource={searchData.length ? searchData : favList?.data}
            pagination={{ total: favList?.total, current: favList?.page }}
            onChange={handlePaginationChange}
            rowKey="id"
          />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default FavList;
