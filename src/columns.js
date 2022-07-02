import { Button } from "antd";
import Like from "./like.png";

export const columns = ({ handleCount, like }) => {
  return [
    {
      title: "Sno",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Image",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => (
        <img src={avatar} alt="avatar" height={50} width={50} />
      ),
    },
    {
      title: "Like",
      dataIndex: "like",
      key: "like",
      render: (_, record) =>
        like ? (
          <h5>{record.fav}</h5>
        ) : (
          <Button onClick={() => handleCount(record)}>
            <img src={Like} width={25} heigth={25} alt="like" />
            Like
          </Button>
        ),
    },
  ];
};
