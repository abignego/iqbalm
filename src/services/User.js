
import axios from "axios";
export const getUsers = (callback) => {
    axios
      .get("https://localhost:8001/forming")
      .then((data) => console.log(data.data))
      .catch((err) => {
        console.log(err);
      });
  };