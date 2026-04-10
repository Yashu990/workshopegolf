import { create } from 'zustand';

export const useStore = create((set) => ({
  user: {
    name: 'Alex',
    handicap: 12.4,
    membership: 'Pro'
  },
  tasks: [
    { id: 1, title: 'Iron Set Tempo', completed: false },
    { id: 2, title: 'Putting inside 10ft', completed: true }
  ],
  sessions: [],
  cart: [],
  setUser: (user) => set({ user }),
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  toggleTask: (id) => set((state) => ({
    tasks: state.tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
  })),
}));
