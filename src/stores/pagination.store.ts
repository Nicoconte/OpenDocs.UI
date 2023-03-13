import { create } from "zustand";

interface PaginationState {
    from: number,
    to: number,
    isFirstLoad: boolean,
    initPaginator: () => void,
    updatePaginator: () => void,
}

export const usePaginationStore = create<PaginationState>() (
    (set) => ({
        from: 0,
        to: 4,
        isFirstLoad: true,
        initPaginator: () => set((state) => ({ from: 0, to: state.to, isFirstLoad: false })),
        updatePaginator: () => set((state) => ({ from: (state.from / state.to + 1) * state.to }))
    })
)