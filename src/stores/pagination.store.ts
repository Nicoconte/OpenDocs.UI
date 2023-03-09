import { create } from "zustand";

interface PaginationState {
    startIndex: number,
    quantity: number,
    firstLoad: boolean,
    increaseStartIndex: () => void,
}

export const usePaginationStore = create<PaginationState>() (
    (set) => ({
        startIndex: 0,
        quantity: 10,
        firstLoad: false,
        increaseStartIndex: () => set((state) => ({ startIndex: (state.startIndex / state.quantity + 1) * state.quantity }))
    })
)