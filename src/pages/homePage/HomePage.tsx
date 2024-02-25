import DirectoryListing from '../../components/directoryListing/DirectoryListing';
import styles from './HomePage.module.scss';

export default function HomePage(){
    return (
        <div className={styles.homePage}>
            <DirectoryListing listings={['Baum', 'test', 'User', 'Name', 'Sus']}/>
        </div>
    )
}