
import styles from "./EmptyCard.module.css"

type EmptyCardProps = {
    message: string
}

function EmptyCard({ message }: EmptyCardProps) {
    return (
        <div className={`${styles.emptyCardContainer} bg-slate-50 dark:bg-cyan-800 dark:text-slate-50`}>
            <h1>{message}</h1>
        </div>
    )
}

export default EmptyCard;