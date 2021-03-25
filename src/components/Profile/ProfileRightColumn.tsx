import React, { CSSProperties, ReactNode } from "react";
import { Collapse } from "antd";
import CourseList from "../SharedComponents/CourseList";
import Course from "../../utils/interfaces/Course";
import TaskList from "../SharedComponents/TaskList";

const ProfileRightColumn: React.FC = () => {
  const dummyCourses: Course[] = [
    {
      id: 1,
      active: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est odio, aliquet sed aliquam et, feugiat pharetra libero. Quisque at justo leo. In hac habitasse platea dictumst. Nullam bibendum elementum.",
      name: "Course 1 KEK KEK KEK KEK KEK",
      payout_num: 8,
      price: 18000,
      start_time: new Date(Date.now()).toString(),
      teacher_id: 1,
    },
    {
      id: 2,
      active: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est odio, aliquet sed aliquam et, feugiat pharetra libero. Quisque at justo leo. In hac habitasse platea dictumst. Nullam bibendum elementum.",
      name: "Course 2",
      payout_num: 8,
      price: 12000,
      start_time: new Date(Date.now()).toString(),
      teacher_id: 1,
    },
    {
      id: 3,
      active: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est odio, aliquet sed aliquam et, feugiat pharetra libero. Quisque at justo leo. In hac habitasse platea dictumst. Nullam bibendum elementum.",
      name: "Course 3",
      payout_num: 8,
      price: 15000,
      start_time: new Date(Date.now()).toString(),
      teacher_id: 1,
    },
    {
      id: 4,
      active: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est odio, aliquet sed aliquam et, feugiat pharetra libero. Quisque at justo leo. In hac habitasse platea dictumst. Nullam bibendum elementum.",
      name: "Course 4",
      payout_num: 8,
      price: 15000,
      start_time: new Date(Date.now()).toString(),
      teacher_id: 1,
    },
  ];

  const blockStyles: CSSProperties = {
    backgroundColor: "var(--grey)",
    borderRadius: "1rem",
  };

  const renderHeader = (): ReactNode => {
    console.log("checking");
    return <span style={{ color: "var(--white)" }}>Faraby Nursulatn</span>;
  };

  const renderExpandIcon = (isActive: boolean | undefined): ReactNode => {
    const expandIconStyle: CSSProperties = {
      top: "50%",
      padding: 0,
      color: "var(--orange)",
    };
    if (isActive) {
      return <span style={expandIconStyle}>Скрыть подробную информацию</span>;
    }
    return <span style={expandIconStyle}>Показать подробную информацию</span>;
  };

  return (
    <div className="ml-3">
      <Collapse
        expandIconPosition="right"
        expandIcon={({ isActive }) => renderExpandIcon(isActive)}
        style={blockStyles}
        ghost={true}
        className="mb-3"
      >
        <Collapse.Panel
          header={
            <span style={{ color: "var(--white)" }}>Faraby Nursulatn</span>
          }
          key="1"
        >
          <p style={{ color: "var(--white)" }}>
            Additional Information should be listed here
          </p>
        </Collapse.Panel>
      </Collapse>
      <CourseList
        courses={dummyCourses}
        label={"Мои Курсы"}
        editable={false}
        loading={false}
      />
      <TaskList tasks={[]} />
    </div>
  );
};

export default ProfileRightColumn;
