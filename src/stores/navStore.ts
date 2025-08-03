import { create } from "zustand";

interface NavStore {
  isToggle: boolean;
  setIsToggle: () => void;
}

const useStore = create<NavStore>((set) => ({
  isToggle: false,
  setIsToggle: () =>
    set((state) => ({
      isToggle: !state.isToggle, // Toggle between true/false
    })),
}));

export default useStore;
