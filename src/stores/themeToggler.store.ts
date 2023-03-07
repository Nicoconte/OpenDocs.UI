import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

interface ThemeTogglerState {
    theme: string,
    toggleTheme: () => void
}

const useThemeTogglerStore = create<ThemeTogglerState>() (
    devtools(
        persist(
            (set) => ({
                theme: "light",
                toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" }))
            }),
            {
                name: "theme-storage"
            }
        )
    )
)

export default useThemeTogglerStore;


