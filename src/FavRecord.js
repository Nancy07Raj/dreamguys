import React, { useState } from "react";
import { useSelector } from "react-redux";
import { columns } from "./columns";
import { Table, Input } from "antd";

const { Search } = Input;

export default function FavRecord() {
  const { favRecord } = useSelector((state) => state.app);
  const [searchData, setsearchData] = useState([]);

  const handleSearch = (e) => {
    const search = e?.target?.value.toLowerCase();
    const searchValue = favRecord?.filter(
      (i) => i.first_name.toLowerCase() === search
    );
    setsearchData(searchValue);
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
          style={{ width: "200px", marginBottom: "10px" }}
        />
        <Table
          size="small"
          dataSource={searchData.length ? searchData : favRecord}
          columns={columns({ like: true })}
          pagination={false}
          rowKey="id"
        />
      </div>
    </>
  );
}
