import styles from "../src/styles/Work.module.css"

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.category}>
                    <p>Shopify Development</p>
                </div>
                <div className={styles.title}>
                    <a href="#"><p>Grassphere Shopify Store</p></a>
                </div>
                <div className={styles.website}>
                    <p>shop.grassphere.com</p>
                </div>
                <div className={styles.tags}>
                    <p><span>#vuejs</span><span>#shopify</span><span>#liquid</span></p>
                </div>
            </div>
        </div>
    );
};

export default Card;