import Course from "./Course";

interface Task {
  id: number;
  name: string;
  start_time: Date;
  end_time: Date;
  description: string;
  course_id: number;
  course: Course;
}

export default Task;
