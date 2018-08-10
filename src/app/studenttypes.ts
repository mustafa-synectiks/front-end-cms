export type Student = {
  id: number;
  enrollmentno: number;
  rollno: number;
  name: string;
  surname: string;
  email: string;
  contact: string;
}

export type Query = {
  allStudents: Student[];
}

