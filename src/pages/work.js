import styles from "../styles/Work.module.css";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

const work = () => {
    return (
        <div className="container">
            <h1 className={styles.pageTitle}>WORK<span className={styles.workNum}>05</span></h1>
            <p>These are selected from recent works</p>
            <div className={styles.cardContainer}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default work;