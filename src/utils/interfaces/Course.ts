interface Course {
  id?: number;
  name: string;
  description: string;
  active: boolean;
  start_time: string;
  end_time?: Date;
  price: number;
  payout_num: number;
  teacher_id: number;
}

export default Course;
