export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createsdAt: string;
  updateAt: string;
}

export interface CreateTodoRequest {
  title: string;
}

export interface UpdateTodoRequest {
  title?: string;
  completed?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}