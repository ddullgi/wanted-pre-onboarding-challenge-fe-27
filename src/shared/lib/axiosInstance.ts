import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "http://localhost:8080",
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 5000,
});

axiosInstance.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers.Authorization = token;
	}
	return config;
});
