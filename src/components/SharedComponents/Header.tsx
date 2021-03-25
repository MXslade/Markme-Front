import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "antd";

const Header: React.FC = () => {
    return (
        <div
            style={{
                backgroundColor: "var(--black)",
                width: "100%",
                height: window.innerHeight * 0.05,
            }}
        >
            <Container className="h-100">
                <Row
                    className="px-3 h-100"
                    style={{ fontSize: "x-large", color: "white" }}
                >
                    <Col
                        className="h-100 d-flex align-items-center"
                        style={{ cursor: "pointer", fontFamily: "Teko" }}
                    >
                        Markme.kz
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
