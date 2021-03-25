import React, { ReactNode, useReducer, useEffect } from "react";
import { Button, Tooltip, Modal, Input, Select, message } from "antd";
import { PlusCircleOutlined, UnderlineOutlined } from "@ant-design/icons";
import Course from "../../utils/interfaces/Course";
import User from "../../utils/interfaces/User";
import CourseList from "../SharedComponents/CourseList";
import { getCompanyCourses, addCourse } from "../../api/CoursesRequests";
import { getCompanyTeachers } from "../../api/TeachersRequests";

interface CoursePanelState {
  loading: boolean;
  addCourseModalVisible: boolean;
  newCourseName: string;
  newCourseDescription: string;
  newCourseStartDate: string;
  newCoursePrice: number | null;
  newCoursePayoutCycle: number | null;
  newCourseTeacherId: number | null;
  courses: Course[];
  teachers: User[];
}

type CoursePanelAction =
  | {
      type: "SET_COURSE_MODAL_VISIBLE";
      courseModalVisible: boolean;
    }
  | { type: "SET_NEW_COURSE_NAME"; newCourseName: string }
  | { type: "SET_NEW_COURSE_DESCRIPTION"; newCourseDescription: string }
  | { type: "SET_NEW_COURSE_START_DATE"; newCourseStartDate: string }
  | { type: "SET_NEW_COURSE_PRICE"; newCoursePrice: number }
  | { type: "SET_NEW_COURSE_PAYOUT"; newCoursePayoutCycle: number }
  | { type: "SET_NEW_COURSE_TEACHER"; newCourseTeacherId: number }
  | { type: "RESET_INPUT_FIELDS" }
  | { type: "SET_COURSES"; courses: Course[] }
  | { type: "SET_TEACHERS"; teachers: User[] };

const reducer = (
  state: CoursePanelState,
  action: CoursePanelAction
): CoursePanelState => {
  switch (action.type) {
    case "SET_COURSE_MODAL_VISIBLE":
      return {
        ...state,
        addCourseModalVisible: action.courseModalVisible,
      };
    case "SET_NEW_COURSE_NAME":
      return {
        ...state,
        newCourseName: action.newCourseName,
      };
    case "SET_NEW_COURSE_DESCRIPTION":
      return {
        ...state,
        newCourseDescription: action.newCourseDescription,
      };
    case "SET_NEW_COURSE_START_DATE":
      return {
        ...state,
        newCourseStartDate: action.newCourseStartDate,
      };
    case "SET_NEW_COURSE_PRICE":
      return {
        ...state,
        newCoursePrice: action.newCoursePrice,
      };
    case "SET_NEW_COURSE_PAYOUT":
      return {
        ...state,
        newCoursePayoutCycle: action.newCoursePayoutCycle,
      };
    case "SET_NEW_COURSE_TEACHER":
      return {
        ...state,
        newCourseTeacherId: action.newCourseTeacherId,
      };
    case "RESET_INPUT_FIELDS":
      return {
        ...state,
        newCourseName: "",
        newCourseDescription: "",
        newCoursePayoutCycle: null,
        newCourseTeacherId: null,
        newCoursePrice: null,
        newCourseStartDate: "",
      };
    case "SET_COURSES":
      return {
        ...state,
        courses: action.courses,
        loading: false,
      };
    case "SET_TEACHERS":
      return {
        ...state,
        teachers: action.teachers,
        loading: false,
      };
  }
};

const defaultState: CoursePanelState = {
  loading: true,
  addCourseModalVisible: false,
  newCourseName: "",
  newCourseDescription: "",
  newCourseStartDate: "",
  newCoursePrice: null,
  newCoursePayoutCycle: null,
  newCourseTeacherId: null,
  courses: [],
  teachers: [],
};

export const CoursePanel: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const courseListLabel: ReactNode = (
    <div className="d-flex justify-content-between align-items-center">
      <span>Курсы Компании</span>
      <Tooltip title="Добавить Курс" placement="bottomRight">
        <Button
          style={{
            backgroundColor: "transparent",
            border: "none",
            fontSize: "large",
            padding: "0",
          }}
          onClick={() => {
            dispatch({
              type: "SET_COURSE_MODAL_VISIBLE",
              courseModalVisible: true,
            });
          }}
        >
          <PlusCircleOutlined />
        </Button>
      </Tooltip>
    </div>
  );

  const handleAddCourseOk = () => {
    if (
      state.newCourseName &&
      state.newCourseDescription &&
      state.newCourseStartDate &&
      state.newCoursePrice &&
      state.newCoursePayoutCycle &&
      state.newCourseTeacherId
    ) {
      addCourse({
        name: state.newCourseName,
        active: true,
        payout_num: state.newCoursePayoutCycle,
        price: state.newCoursePrice,
        description: state.newCourseDescription,
        start_time: state.newCourseStartDate,
        teacher_id: state.newCourseTeacherId,
      }).then((response) => {
        console.log(response);
      });
    } else {
      message.error("Все поля должны быть заполнены");
    }
  };

  const handleAddCourseCancel = () => {
    dispatch({ type: "SET_COURSE_MODAL_VISIBLE", courseModalVisible: false });
    dispatch({ type: "RESET_INPUT_FIELDS" });
  };

  useEffect(() => {
    getCompanyCourses().then((response) => {
      if (response.status === 200 && response.data.resultCode === 0) {
        dispatch({ type: "SET_COURSES", courses: response.data.payload });
      }
    });
    getCompanyTeachers().then((response) => {
      if (response.status === 200 && response.data.resultCode === 0) {
        dispatch({ type: "SET_TEACHERS", teachers: response.data.payload });
      }
    });
  }, []);

  return (
    <>
      <div className="p-3">
        <CourseList
          courses={state.courses}
          label={courseListLabel}
          editable={true}
          loading={state.loading}
        />
      </div>
      <Modal
        title="Добавить Новый Курс"
        visible={state.addCourseModalVisible}
        onOk={handleAddCourseOk}
        onCancel={handleAddCourseCancel}
        footer={
          <>
            <Button
              key="back"
              style={{ borderRadius: "0.5rem" }}
              className="button-secondary"
              onClick={handleAddCourseCancel}
            >
              Отмена
            </Button>
            <Button
              key="submit"
              style={{ borderRadius: "0.5rem" }}
              className="button-success"
              onClick={handleAddCourseOk}
            >
              Добавить
            </Button>
          </>
        }
      >
        <Input
          placeholder="Название Курса"
          className="mb-2"
          value={state.newCourseName}
          onChange={(event) =>
            dispatch({
              type: "SET_NEW_COURSE_NAME",
              newCourseName: event.target.value,
            })
          }
        />
        <Input.TextArea
          placeholder="Описание Курса"
          className="mb-2"
          value={state.newCourseDescription}
          onChange={(event) =>
            dispatch({
              type: "SET_NEW_COURSE_DESCRIPTION",
              newCourseDescription: event.target.value,
            })
          }
        />
        <Input
          type="date"
          placeholder="Дата начала курса"
          className="mb-2"
          value={state.newCourseStartDate}
          onChange={(event) =>
            dispatch({
              type: "SET_NEW_COURSE_START_DATE",
              newCourseStartDate: event.target.value,
            })
          }
        />
        <Input
          type="number"
          placeholder="Цена"
          className="mb-2"
          value={state.newCoursePrice ? state.newCoursePrice : undefined}
          onChange={(event) =>
            dispatch({
              type: "SET_NEW_COURSE_PRICE",
              newCoursePrice: parseInt(event.target.value),
            })
          }
        />
        <Input
          type="number"
          placeholder="Цикл Оплаты"
          className="mb-2"
          value={
            state.newCoursePayoutCycle ? state.newCoursePayoutCycle : undefined
          }
          onChange={(event) =>
            dispatch({
              type: "SET_NEW_COURSE_PAYOUT",
              newCoursePayoutCycle: parseInt(event.target.value),
            })
          }
        />
        <Select
          placeholder="Учитель"
          className="w-100"
          showSearch={true}
          filterOption={(input, option) =>
            option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          value={
            state.newCourseTeacherId ? state.newCourseTeacherId : undefined
          }
          onChange={(event) =>
            dispatch({
              type: "SET_NEW_COURSE_TEACHER",
              newCourseTeacherId: event,
            })
          }
        >
          {state.teachers.map((teacher) => (
            <Select.Option key={teacher.id} value={teacher.id}>
              {`${teacher.first_name} ${teacher.middle_name} ${teacher.last_name}`}
            </Select.Option>
          ))}
        </Select>
      </Modal>
    </>
  );
};

export default CoursePanel;
