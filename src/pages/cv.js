import { useState, useEffect } from 'react';
import { BiDownload } from 'react-icons/bi';
import CV from "../../components/CV";

const cv = () => {
    const [isViewportSM, setIsViewportSM] = useState(false);

    const getSize = () => window.innerWidth;

    useEffect(() => {
        const viewportSize = getSize();
        if (viewportSize < 1200) {
            setIsViewportSM(true);
        }
    }, []);

    return (
        <>
            <div className="container" >
                <button className="mk-btn" onClick={() => window.print()}>
                    <BiDownload /> Print / Save
                </button>
            </div>
            {
                isViewportSM ? (
                    <div className="container">
                        <h2>Are you on mobile device?</h2>
                        <p>For the best user experience, please download my CV in PDF instead</p>
                    </div>
                ) : <CV />
            }
        </>
    );
};

export default cv;