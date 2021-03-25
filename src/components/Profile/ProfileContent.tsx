import React from "react";
import { Row, Col } from "antd";
import ProfileLeftColumn from "./ProfileLeftColumn";
import ProfileRightColumn from "./ProfileRightColumn";

const ProfileContent: React.FC = () => {
  return (
    <Row className="p-3">
      <Col span={6}>
        <ProfileLeftColumn />
      </Col>
      <Col span={18}>
        <ProfileRightColumn />
      </Col>
    </Row>
  );
};

export default ProfileContent;
