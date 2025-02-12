import { Router } from "express";
import {getTasks,createTask,updateTaskStatus,getUserTasks} from "../controllers/taskController";

const router = Router();

router.get("/", getTasks); // get data from postgres
router.post("/", createTask); //send data to postgres
router.patch("/:taskId/status", updateTaskStatus); //update the task status
router.get("/user/:userId", getUserTasks);
export default router;