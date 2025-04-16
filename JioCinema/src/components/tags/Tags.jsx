import { useState } from 'react';
import styles from './tags.module.css';

export default function Tags() {

    let [tags, setTags] = useState([
        "For You",
        "Action",
        "Comedy",
        "Drama",
        "Thriller",
        "Romance",
        "Crime",
        "Adventure",
        "Horror",
        "Documentary",
        "Historical",
        "Kids Zone"
    ]);

    return(
        <>
            <div className={styles.tags}>
                {
                    tags.map((tag) => {
                        return <p className={styles.tag}>{tag}</p>
                    })
                }
            </div>
        </>
    );
}
