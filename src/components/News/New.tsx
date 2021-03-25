import React from "react";
import { Row, Col } from "antd";
import Post from "../../utils/interfaces/Post";
import MyCarousel from "../SharedComponents/MyCarousel";

interface Props {
  post: Post;
}

const New: React.FC<Props> = ({ post }) => {
  const defaultImage: string =
    "https://lumiere-a.akamaihd.net/v1/images/5c239685ecbea2c12fcb8ee661a04d0a9098e141.jpeg?region=0,0,600,600&width=480";

  return (
    <div
      className="p-1 m-3"
      style={{ backgroundColor: "var(--grey)", borderRadius: "1rem" }}
    >
      <Row className="p-3">
        <Col className="p-2" span={3}>
          <img src={defaultImage} style={{ width: "100%" }} />
        </Col>
        <Col className="p-2" span={21} style={{ color: "var(--white)" }}>
          <p style={{ fontWeight: 500, fontSize: "large", margin: 0 }}>
            {post.name}
          </p>
          <p className="text-secondary">
            Кекулус Рифтулус{" "}
            <span style={{ color: "var(--orange)" }}>
              {post.datetime.toLocaleDateString() +
                " " +
                post.datetime.toLocaleTimeString()}
            </span>
          </p>
          <Row>
            <Col span={24}>
              <p>{post.content}</p>
              <MyCarousel imageUrls={post.media} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default New;
