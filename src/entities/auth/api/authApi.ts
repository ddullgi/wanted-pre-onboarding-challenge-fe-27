import type { AxiosInstance } from "axios";

import { axiosInstance } from "@/shared/lib/axiosInstance";

import type { AuthParams, AuthResponse } from "../model/auth";

export const createAuthApi = (apiClient: AxiosInstance) => ({
	login: async (params: AuthParams): Promise<AuthResponse> => {
		return await apiClient.post("/users.login", params);
	},
	signup: async (params: AuthParams): Promise<AuthResponse> => {
		return await apiClient.post("/users/create", params);
	},
});

const authApi = createAuthApi(axiosInstance);

export const authQuery = {
	login: (params: AuthParams) => ({
		queryKey: ["login"],
		queryFn: () => authApi.login(params),
	}),
	signup: (params: AuthParams) => ({
		queryKey: ["signup"],
		queryFn: () => authApi.signup(params),
	}),
};
