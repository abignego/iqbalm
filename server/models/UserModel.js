import { Sequelize } from "sequelize";
import db from "../config/Database";

const {DataTypes} = Sequelize;
const User = db.define('user')