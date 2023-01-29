import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const layout = ({ children }) => {
    const { route } = useRouter();

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            {
                route !== '/' && <Footer />
            }
        </>
    );
};

export default layout;