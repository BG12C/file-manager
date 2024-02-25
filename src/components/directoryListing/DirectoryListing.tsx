import styles from './DirectoryListing.module.scss';

type Props = {
    listings: string[],
}

export default function DirectoryListing(props: Props){
    return(
        <div className={styles.directoryListing}>
            {props.listings.map((x, i) => (
                <div className={styles.listingItem} key={i}>
                    {x}
                </div>
            ))};
        </div>
    )
}