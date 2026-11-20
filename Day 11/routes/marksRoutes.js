import express from "express";
import { createMarks, showMarks } from "../controller/Marks.js";

const marksRouter = express.Router()

marksRouter.get('/marks', showMarks)

marksRouter.post('/marks', createMarks)


export default marksRouter