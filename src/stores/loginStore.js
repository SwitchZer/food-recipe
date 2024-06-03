import create from "zustand";

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  user: null,
  login: (user) => set((state) => ({ isLoggedIn: true, user })),
  logout: () => set((state) => ({ isLoggedIn: false, user: null })),
}));

export default useAuthStore;
