import type { AxiosInstance } from "axios";

import { axiosInstance } from "@/shared/lib/axiosInstance";

import type {
	CreateTodoParams,
	TodoItem,
	UpdateTodoParams,
} from "../model/todo";

export const createTodoApi = (apiClient: AxiosInstance) => ({
	getTodos: async (): Promise<TodoItem[]> => {
		const { data } = await apiClient.get("/todos");
		return data;
	},

	getTodo: async (id: string): Promise<TodoItem> => {
		const { data } = await apiClient.get(`/todos/${id}`);
		return data;
	},

	createTodo: async (params: CreateTodoParams): Promise<TodoItem> => {
		const { data } = await apiClient.post("/todos", params);
		return data;
	},

	updateTodo: async (
		id: string,
		params: UpdateTodoParams,
	): Promise<TodoItem> => {
		const { data } = await apiClient.put(`/todos/${id}`, params);
		return data;
	},

	deleteTodo: async (id: string): Promise<void> => {
		await apiClient.delete(`/todos/${id}`);
	},
});

const authApi = createTodoApi(axiosInstance);

export const authQuery = {
	getTodos: () => ({
		queryKey: ["getTodos"],
		queryFn: () => authApi.getTodos(),
	}),
	getTodo: (id: string) => ({
		queryKey: ["getTodo"],
		queryFn: () => authApi.getTodo(id),
	}),
	createTodo: (params: CreateTodoParams) => ({
		queryKey: ["createTodo"],
		queryFn: () => authApi.createTodo(params),
	}),
	updateTodo: (id: string, params: UpdateTodoParams) => ({
		queryKey: ["updateTodo"],
		queryFn: () => authApi.updateTodo(id, params),
	}),
	deleteTodo: (id: string) => ({
		queryKey: ["deleteTodo"],
		queryFn: () => authApi.deleteTodo(id),
	}),
};
