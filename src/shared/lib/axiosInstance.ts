import Axios from "axios";

export const axios = Axios.create({
	baseURL: "http//:localhost:3000",
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
		// 임시
		Authorization: "",
	},
});

axios.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		return Promise.reject(error);
	},
);
