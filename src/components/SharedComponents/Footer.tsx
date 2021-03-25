import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "antd";

const Footer: React.FC = () => {
    return (
        <div
            style={{
                backgroundColor: "var(--black)",
                width: "100%",
                height: window.innerHeight * 0.05,
            }}
        >
            <Container className="h-100">
                <Row className="align-items-center justify-content-center h-100">
                    <Col
                        span={24}
                        style={{ color: "white" }}
                        className="d-flex align-items-center justify-content-center"
                    >
                        <span>
                            &copy; 2021,{" "}
                            <span style={{ color: "var(--orange)" }}>
                                IQhub
                            </span>{" "}
                            Все права защищены
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
