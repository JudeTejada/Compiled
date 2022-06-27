import create from 'zustand';

type MenuState = {
  isMenuOpen: boolean;

  toggleMenu: (description: boolean) => void;
};

export const useStore = create<MenuState>((set) => ({
  isMenuOpen: false,
  toggleMenu: (value: boolean) =>
    set((state) => ({ isMenuOpen: value ?? !state.isMenuOpen }))
}));
