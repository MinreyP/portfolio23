import styles from "../src/styles/Work.module.css"

const Card = ({ info }) => {
    const websiteURL = info.work.quick_links.official_web;
    const trimURL = websiteURL.replace(/(https*:\W*)?\//gm, '');

    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.category}>
                    <p>{info.work.category.name}</p>
                </div>
                <div className={styles.title}>
                    <a href={`/work/${info.work.page_slug}`}><p>{info.name}</p></a>
                </div>
                <div className={styles.website}>
                    <p>{trimURL}</p>
                </div>
                <div className={styles.tags}>
                    <p>
                        {
                            info.work.tags.map((tag, i) => {
                                return <span key={i}>#{tag}</span>
                            })
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;