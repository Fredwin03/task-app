import { create } from 'zustand';

interface TaskStore {
  title: string;
  description: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  reset: () => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  title: '',
  description: '',
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  reset: () => set({ title: '', description: '' }),
}));