import React, { useState } from "react";
import { useSelector } from "react-redux";
import { columns } from "./columns";
import { Table, Input } from "antd";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

export default function FavRecord() {
  const { favRecord } = useSelector((state) => state.app);
  const [searchData, setsearchData] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const search = e?.target?.value.toLowerCase();
    const searchValue = favRecord?.filter(
      (i) => i.first_name.toLowerCase() === search
    );
    setsearchData(searchValue);
  };

  return (
    <>
      <button onClick={() => navigate(`/`)}>List</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "10px",
        }}
      >
        <Search
          placeholder="Search First Name"
          onChange={(e) => handleSearch(e)}
          style={{ width: "200px", marginBottom: "10px" }}
        />
        <Table
          dataSource={searchData.length ? searchData : favRecord}
          columns={columns({ like: true })}
          pagination={false}
          rowKey="id"
        />
      </div>
    </>
  );
}
