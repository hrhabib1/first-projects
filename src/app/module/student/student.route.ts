import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// will call controller
router.post('/create-student', StudentControllers.createStudent);
router.get('/', StudentControllers.getAllStudents);
router.get('/:studentID', StudentControllers.getSingleStudent);

export const StudentRoutes = router;
