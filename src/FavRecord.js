import React, { useState } from "react";
import { useSelector } from "react-redux";
import { columns } from "./columns";
import { Table, Input } from "antd";

const { Search } = Input;

export default function FavRecord() {
  const { favRecord } = useSelector((state) => state.app);
  const [searchData, setsearchData] = useState([]);
  const [paginate, setPaginate] = useState({
    current: 1,
    defaultPageSize: 6,
    total: favRecord?.length,
  });

  const handleSearch = (e) => {
    const search = e?.target?.value.toLowerCase();
    const searchValue = favRecord?.filter(
      (i) => i.first_name.toLowerCase() === search
    );
    setsearchData(searchValue);
  };

  const handlePagination = (pagination) => {
    setPaginate({ ...paginate, current: pagination.current });
  };

  return (
    <>
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
          dataSource={searchData.length ? searchData : favRecord}
          columns={columns({ like: true })}
          pagination={paginate}
          onChange={handlePagination}
          rowKey="id"
        />
      </div>
    </>
  );
}
