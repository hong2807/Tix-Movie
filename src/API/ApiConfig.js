import axios from "axios";

export default axios.create({
  baseURL: "https://movie0706.cybersoft.edu.vn/api/",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + localStorage.getItem("accessToken")
  }
});
