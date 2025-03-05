import express,{ Request } from "express";
import { getJobs,getJobById,createJob } from "../controllers/jobController";
import { jobValidator } from "../middleware/validator";

const jobRuoter = express.Router();


jobRuoter.get('/', getJobs);
jobRuoter.get('/:id', getJobById);
jobRuoter.post('/', jobValidator, createJob);


export default jobRuoter;