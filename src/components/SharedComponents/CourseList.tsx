import React, { CSSProperties, ReactNode, useState } from "react";
import { List, Card, Popover, Button, Modal, Input, Select } from "antd";
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import Course from "../../utils/interfaces/Course";
import ListHeader from "./ListHeader";

const { Option } = Select;

interface Props {
  courses: Course[];
  label: ReactNode;
  editable: boolean;
  loading: boolean;
}

const CourseList: React.FC<Props> = ({ courses, label, editable, loading }) => {
  const [visibleDeleteModal, setVisibleDeleteModal] = useState<boolean>(false);
  const [visibleEditModal, setVisibleEditModal] = useState<boolean>(false);

  const defaultButtonStyle: CSSProperties = {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "larger",
    padding: "0.3rem",
  };

  const handleOnDeleteClick = (course: Course) => {
    setVisibleDeleteModal(true);
  };

  const handleOnEditClick = (course: Course) => {
    setVisibleEditModal(true);
  };

  const deleteModal: ReactNode = (
    <Modal
      title="Предупреждение"
      visible={visibleDeleteModal}
      onCancel={() => setVisibleDeleteModal(false)}
      footer={
        <>
          <Button
            key="back"
            style={{ borderRadius: "0.5rem" }}
            className="button-secondary"
            onClick={() => setVisibleDeleteModal(false)}
          >
            Отмена
          </Button>
          <Button
            key="submit"
            style={{ borderRadius: "0.5rem" }}
            className="button-danger"
          >
            Удалить
          </Button>
        </>
      }
    >
      Вы уверены что хотите удалить этот курс?
    </Modal>
  );

  const editModal: ReactNode = (
    <Modal
      title="Изменить"
      visible={visibleEditModal}
      onCancel={() => setVisibleEditModal(false)}
      footer={
        <>
          <Button
            key="back"
            style={{ borderRadius: "0.5rem" }}
            className="button-secondary"
            onClick={() => setVisibleEditModal(false)}
          >
            Отмена
          </Button>
          <Button
            key="submit"
            style={{ borderRadius: "0.5rem" }}
            className="button-success"
          >
            Сохранить
          </Button>
        </>
      }
    >
      <Input className="mb-2" placeholder="Название" />
      <Input.TextArea className="mb-2" autoSize={true} placeholder="Описание" />
      <Input type="date" placeholder="Дата начало занятий" className="mb-2" />
      <Input type="number" placeholder="Цена" className="mb-2" />
      <Input type="number" placeholder="Цикл Оплаты" className="mb-2" />
      <Select className="w-100" showSearch={true}>
        <Option value="kKE">KEK</Option>
      </Select>
    </Modal>
  );

  return (
    <div className="default-list mb-3">
      <ListHeader title={label} />
      <List
        bordered={false}
        grid={{ gutter: 16, column: 3 }}
        loading={loading}
        dataSource={courses}
        style={{ borderWidth: "2px" }}
        renderItem={(course: Course) => (
          <List.Item>
            <Card
              className="course-card"
              hoverable={true}
              cover={
                <>
                  <img src="https://media.istockphoto.com/vectors/abstract-white-background-geometric-texture-vector-id1069183510?b=1&k=6&m=1069183510&s=612x612&w=0&h=EVl3ff9O_9TF3XymYdEoUd1ZDlUT03Kf4qtd6WcF0bs=" />
                  {editable && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        style={defaultButtonStyle}
                        onClick={() => handleOnEditClick(course)}
                      >
                        <FormOutlined />
                      </Button>
                      <Button
                        style={defaultButtonStyle}
                        onClick={() => handleOnDeleteClick(course)}
                      >
                        <DeleteOutlined />
                      </Button>
                    </div>
                  )}
                </>
              }
            >
              <Card.Meta
                title={<Popover content={course.name}>{course.name}</Popover>}
              />
            </Card>
          </List.Item>
        )}
      />
      {editable && (
        <>
          {deleteModal}
          {editModal}
        </>
      )}
    </div>
  );
};

export default CourseList;
