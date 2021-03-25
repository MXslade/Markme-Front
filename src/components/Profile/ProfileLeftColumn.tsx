import React, { CSSProperties } from "react";
import { Image, Button, List } from "antd";

const ProfileLeftColumn: React.FC = () => {
  const defaultImage: string =
    "https://lumiere-a.akamaihd.net/v1/images/5c239685ecbea2c12fcb8ee661a04d0a9098e141.jpeg?region=0,0,600,600&width=480";
  const role = "student";
  const classes = [
    {
      name: "Class 1",
      startTime: "10:00",
      endTime: "12:00",
    },
    {
      name: "Class 2",
      startTime: "16:00",
      endTime: "18:00",
    },
  ];
  const blockStyles: CSSProperties = {
    backgroundColor: "var(--grey)",
    borderRadius: "1rem",
  };

  return (
    <>
      <div className="p-2 mb-3" style={blockStyles}>
        <Image src={defaultImage} style={{ borderRadius: "1rem" }} />
        <Button style={{ width: "100%", borderRadius: "1rem" }}>
          Изменить Фото
        </Button>
      </div>
      {role === "student" && (
        <List
          style={blockStyles}
          header={
            <div style={{ color: "var(--white)", textAlign: "center" }}>
              Завтрашние Уроки
            </div>
          }
          bordered
          dataSource={classes}
          renderItem={(item) => (
            <List.Item style={{ color: "var(--white)" }}>
              <span style={{ color: "var(--orange)" }}>
                {item.startTime} - {item.endTime}
              </span>
              <span>{item.name}</span>
            </List.Item>
          )}
        />
      )}
    </>
  );
};

export default ProfileLeftColumn;
