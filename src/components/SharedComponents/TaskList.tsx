import React from "react";
import { Table, Tag, Space } from "antd";
import Task from "../../utils/interfaces/Task";
import ListHeader from "./ListHeader";
import { ColumnsType } from "antd/lib/table";

interface Props {
  tasks: Task[];
}

const TaskList: React.FC<Props> = ({ tasks }) => {
  const columns: ColumnsType<Task> = [
    {
      title: "Курс",
      dataIndex: "course.name",
      key: "course.name",
    },
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Начало",
      dataIndex: "start_time",
      key: "start_time",
    },
    {
      title: "Завершение",
      dataIndex: "end_time",
      key: "end_time",
    },
  ];

  return (
    <div className="default-list">
      <ListHeader title="Мои Задания" />
      <Table columns={columns} dataSource={tasks} />
    </div>
  );
};

export default TaskList;
