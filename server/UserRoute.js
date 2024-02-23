import express from 'express';
import {getUsers} from "./controller/UserContoller.js"
const router =express.Router();
router.get('/dbmu', getUsers)
export default router;