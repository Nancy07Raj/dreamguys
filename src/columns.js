import { Button } from "antd";
import Like from "./like.png";

const count = {
  position: "absolute",
  background: "#f97729",
  borderRadius: "50%",
  right: "-7px",
  top: "-7px",
  fontSize: "8px",
  padding: "2px 6px",
  color: "white",
};

export const columns = ({ handleCount, like, favRecord }) => {
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
      render: (_, record) => {
        const fav = favRecord?.find((i) => i.id === record.id);

        return !like ? (
          <Button onClick={() => handleCount(record)}>
            <div style={{ position: "relative" }}>
              {fav && <span style={count}>{fav?.fav}</span>}
            </div>
            <img src={Like} width={25} heigth={25} alt="like" />
          </Button>
        ) : (
          <h5>{record.fav}</h5>
        );
      },
    },
  ];
};
