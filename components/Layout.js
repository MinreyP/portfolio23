import Header from '../components/Header'
import styles from '../src/styles/Layout.module.css'

const layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    );
};

export default layout;