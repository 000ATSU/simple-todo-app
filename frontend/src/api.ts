import { Todo, ApiResponse } from './types.js';

const API_BASE = 'http://localhost:3001/api';

export const todoApi = {
  async getAll(): Promise<Todo[]> {
    const response = await fetch(`${API_BASE}/todos`);
    const data: ApiResponse<Todo[]> = await response.json();
    return data.data;
  },

  async create(title: string): Promise<Todo> {
    const response = await fetch(`${API_BASE}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    const data: ApiResponse<Todo> = await response.json();
    return data.data;
  },

  async update(id: string, updates: Partial<Todo>): Promise<Todo> {
    const response = await fetch(`${API_BASE}/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    const data: ApiResponse<Todo> = await response.json();
    return data.data;
  },

  async delete(id: string): Promise<void> {
    await fetch(`${API_BASE}/todos/${id}`, {
      method: 'DELETE',
    });
  },
};