import axios from "axios";

const callApi = axios.create({
  baseURL: "https://movie0706.cybersoft.edu.vn/api/",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + localStorage.getItem("accessToken")
  }
});
export default callApi;
