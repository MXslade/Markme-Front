import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "../components/Login/LoginForm";
import wallpaper from "../media/images/wallpaper.jpg";

const LoginPage: React.FC = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${wallpaper})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundColor: "#B7C8EB",
            }}
        >
            <Container style={{ height: "100vh" }}>
                <Row className="justify-content-md-center align-items-center h-100">
                    <Col
                        sm="4"
                        md="4"
                        xs="6"
                        lg="4"
                        style={{ minWidth: "350px" }}
                    >
                        <LoginForm />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage;
