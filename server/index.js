import { express } from "express";
import cors from "cors";
import UserRoute from "./UserRoute.js"
const app = express ;
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(8001,()=> console.log("server Running..."));
