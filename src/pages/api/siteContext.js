import { createContext, useContext, useState } from "react";

const SiteContext = createContext();

export const ContextWrapper = ({ children }) => {
    const [siteLang, setSiteLang] = useState('en');
    const [mbMenu, setMbmenu] = useState(false);

    const toggleMobileMenu = () => {
        setMbmenu(!mbMenu);
    }

    const switchLang = (lang) => {
        setSiteLang(lang);
    }

    return (
        <SiteContext.Provider value={{ siteLang, mbMenu, toggleMobileMenu, switchLang }}>
            {children}
        </SiteContext.Provider>
    )
}

export const useSiteContext = () => {
    return (
        useContext(SiteContext)
    )
}