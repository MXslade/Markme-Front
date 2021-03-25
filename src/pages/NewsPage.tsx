import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "antd";
import Sidebar from "../components/SharedComponents/Sidebar";
import Header from "../components/SharedComponents/Header";
import Footer from "../components/SharedComponents/Footer";
import NewsThread from "../components/News/NewsThread";

const NewsPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container style={{ minHeight: window.innerHeight * 0.9 }}>
        <Row>
          <Col span={4}>
            <Sidebar />
          </Col>
          <Col span={20}>
            <NewsThread />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default NewsPage;
