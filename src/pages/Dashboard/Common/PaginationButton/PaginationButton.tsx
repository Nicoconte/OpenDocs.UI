
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./PaginationButton.module.css";

function PaginationButton() {
    return (
        <button className={styles.paginationButton}>
            <AiOutlinePlusCircle fontSize={25} />
        </button>
    )
}

export default PaginationButton;