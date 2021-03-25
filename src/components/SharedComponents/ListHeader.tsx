import React from "react";
import { Divider } from "antd";

const ListHeader: React.FC<{ title: React.ReactNode }> = ({ title }) => {
  return (
    <>
      <span
        style={{
          fontSize: "x-large",
          fontWeight: 500,
          display: "block",
        }}
      >
        {title}
      </span>
      <Divider />
    </>
  );
};

export default ListHeader;
