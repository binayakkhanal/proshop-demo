import axios from "axios";

const axiosInstance = () => {
    const newAxios = axios.create({
        baseURL: "http://localhost:5001/",
        withCredentials: true  // Ensure cookies are included in requests
    });
    return newAxios;
};

export default axiosInstance;