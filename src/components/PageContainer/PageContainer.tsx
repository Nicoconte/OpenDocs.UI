import useMenuTogglerStore from "../../stores/menutoggler.store";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

import styles from "./PageContainer.module.css";

type PageContainerProps = {
    children: JSX.Element
}

function PageContainer({ children }: PageContainerProps) {
    const isOpen = useMenuTogglerStore((state) => state.isOpen);

    return (
        <>
            <Navbar />
            <div className={styles.pageContainer}>
                <div className={isOpen ? styles.pageSidebarContainer : styles.pageSidebarContainerWrapper}>
                    <Sidebar />             
                </div>
                <div className={`${isOpen ? styles.pageContainer : styles.pageContentWrapper} bg-slate-400 dark:bg-cyan-900 transition ease-linear transition-color duration-300`}>
                    { children }                    
                </div>
            </div>
        </>
    )
}

export default PageContainer