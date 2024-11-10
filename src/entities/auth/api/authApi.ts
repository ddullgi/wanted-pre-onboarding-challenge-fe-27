import type { AxiosInstance } from "axios";

import { axiosInstance } from "@/shared/lib/axiosInstance";

import type { AuthParams, AuthResponse } from "../model/auth";

export const createAuthApi = (apiClient: AxiosInstance) => ({
	login: async (params: AuthParams): Promise<AuthResponse> => {
		const response = await apiClient.post("/users/login", params);
		return response.data;
	},
	signup: async (params: AuthParams): Promise<AuthResponse> => {
		const response = await apiClient.post("/users/create", params);
		return response.data;
	},
});

export const authApi = createAuthApi(axiosInstance);
