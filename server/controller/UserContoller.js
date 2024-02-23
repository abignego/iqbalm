import { error } from "console";
import User from "../models/UserModel.js";

export const getUsers =async (req,res)=>{
    try{
        const response = await User.findall();
        res.status(200).json(response);

    }catch(erorr){

        console.log(error.message);
    }
}