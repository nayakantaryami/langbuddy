import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("langbuddy-theme")||"forest",
  setTheme: (theme) => {
    localStorage.setItem("langbuddy-theme", theme);
    set({ theme });
  },
}));
