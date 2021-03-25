import React, { CSSProperties } from "react";
import { Carousel, Image } from "antd";
import { RightOutlined } from "@ant-design/icons";

interface Props {
  imageUrls: string[];
}

const MyCarousel: React.FC<Props> = ({ imageUrls }) => {
  const contentStyle: CSSProperties = {
    height: "320px",
    color: "#fff",
    lineHeight: "320px",
    textAlign: "center",
  };

  return (
    <Carousel arrows={true} className="pb-2">
      {imageUrls.map((imageUrl: string) => (
        <div>
          <h3 style={contentStyle}>
            <Image src={imageUrl} width={"80%"} />
          </h3>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
