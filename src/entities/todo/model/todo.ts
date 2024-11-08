export interface TodoBase {
	title: string;
	content: string;
}

export interface TodoItem extends TodoBase {
	id: string;
	createdAt: string;
	updatedAt: string;
}

export type CreateTodoParams = Pick<TodoBase, "title" | "content">;

export interface UpdateTodoParams extends CreateTodoParams {
	id: string;
}
