import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentIntoDB = async(studet: Student)=>{

   const result = await StudentModel.create(studet);

   return result;
}

export const StudentServices ={
    createStudentIntoDB
}