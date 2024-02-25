import styles from './DirectoryListingItem.module.scss';

type Props = {
    name: string,
    path: string,
    date: string,
    size: string,
}

export default function DirectoryListingItem(props: Props){
    return (
        <div className={styles.directoryListingItem}>
            <div className={styles.}>

            </div>
        </div>
    )
}