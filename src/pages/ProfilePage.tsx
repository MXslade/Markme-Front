import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "antd";
import Header from "../components/SharedComponents/Header";
import Sidebar from "../components/SharedComponents/Sidebar";
import Footer from "../components/SharedComponents/Footer";
import ProfileContent from "../components/Profile/ProfileContent";

const ProfilePage: React.FC = () => {
  return (
    <>
      <Header />
      <Container style={{ minHeight: window.innerHeight * 0.9 }}>
        <Row>
          <Col span={4}>
            <Sidebar />
          </Col>
          <Col span={20}>
            <ProfileContent />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProfilePage;
