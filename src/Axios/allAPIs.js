import axios from "axios";

const axiosInstance = axios.create({
    // baseURL:  "http://localhost:5000"
    baseURL:  "https://vast-jade-panda-cape.cyclic.app"
});

export default axiosInstance;