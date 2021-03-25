import React, { ReactNode, useState } from "react";
import { Collapse, Input, Button, Tooltip, Image } from "antd";
import { PaperClipOutlined } from "@ant-design/icons";

const CreatePostField: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const showUploadedFiles = (): ReactNode => {
    if (selectedFiles) {
      let res: ReactNode[] = [];
      for (let i = 0; i < selectedFiles?.length; ++i) {
        const url = URL.createObjectURL(selectedFiles.item(i));
        res.push(<Image src={url} width="100%" />);
      }

      return (
        <div className="row row-cols-6">
          {res.map((item) => (
            <div className="col">{item}</div>
          ))}
        </div>
      );
    }
    return <></>;
  };

  return (
    <div className="m-3">
      <Collapse
        style={{ backgroundColor: "var(--grey)", borderRadius: "1rem" }}
        ghost={true}
      >
        <Collapse.Panel
          className="create-post-collapsible-item"
          showArrow={false}
          key={1}
          header={
            <div>
              <Input
                className="create-post-input"
                placeholder="Введите заголовок для поста..."
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
          }
        >
          <Input.TextArea
            className="create-post-input mb-3"
            placeholder="Введите текст для поста..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            autoSize={true}
          />
          <div className="d-flex justify-content-end">
            <label
              htmlFor="file-input"
              style={{
                cursor: "pointer",
                fontSize: "large",
                color: "var(--white)",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
              }}
            >
              <Tooltip title="Добавить фотографии">
                <PaperClipOutlined />
              </Tooltip>
            </label>
            <input
              id="file-input"
              style={{ opacity: 0, position: "absolute", zIndex: -1 }}
              type="file"
              multiple={true}
              onChange={(event) => {
                setSelectedFiles(event.target.files);
              }}
            />
            <Button style={{ borderRadius: "0.5rem" }}>Создать пост</Button>
          </div>
          {selectedFiles && <div className="mt-2">{showUploadedFiles()}</div>}
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default CreatePostField;
