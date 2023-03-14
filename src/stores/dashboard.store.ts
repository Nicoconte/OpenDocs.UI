import { create } from "zustand";
import { Application, ApplicationGrouped } from "../contracts/application";

interface DashboardState {
    isGroupCheckboxActive: boolean,
    applicationsGrouped: ApplicationGrouped[],
    applications: Application[],
    setApplications: (apps: Application[]) => void,
    setApplicationsGrouped: (apps: ApplicationGrouped[]) => void,
    setIsGroupCheckboxActive: (value: boolean) => void
}

const useDashboardStore = create<DashboardState>() (
    (set) => ({
        isGroupCheckboxActive: false,
        applications: [],
        applicationsGrouped: [],
        setApplications: (apps: Application[]) => set((state) => ({ applications: apps})),
        setApplicationsGrouped: (apps: ApplicationGrouped[]) => set((state) => ({ applicationsGrouped: apps })),
        setIsGroupCheckboxActive: (value: boolean) => set((state) => ({ isGroupCheckboxActive: value }))        
    })
);

export default useDashboardStore;