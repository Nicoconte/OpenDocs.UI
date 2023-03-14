import { create } from "zustand";

interface SkeletonState {
    isLoading: boolean,
    setLoading:(value: boolean) => void,
}

const useSkeletonStore = create<SkeletonState>() (
    (set) => ({
        isLoading: false,
        setLoading: (value: boolean) => set((state) => ({ isLoading: value }))
    })
)

export default useSkeletonStore;