
import styles from "./Error.module.css";

function ErrorHandler() {
    return (
        <div className={styles.errorContainer}>
            <h1 className="text-3xl">Hubo un error inesperado.</h1>
        </div>
    )
}

export default ErrorHandler;