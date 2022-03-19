import React, {useState, useContext, createContext} from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(true);
    const [categoryBar, setCategoryBar] = useState(false);
    const [route, setRoute] = useState(0);
    const [link, _setLink] = useState({title: 0, item: 0});
    const [isLoaded, setIsLoaded] = useState(false);
    const setLink = (arg) => {
        setIsLoaded(false);
        _setLink(arg);
    }
    return (
        <GlobalContext.Provider
            value={{
                darkMode: darkMode, 
                setDarkMode: setDarkMode,
                categoryBar: categoryBar, 
                setCategoryBar: setCategoryBar,
                route: route,
                setRoute: setRoute,
                link: link,
                setLink: setLink,
                isLoaded: isLoaded,
                setIsLoaded: setIsLoaded,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const ThemeEvent = () => {
    const {darkMode, setDarkMode} = useContext(GlobalContext);
    return {darkMode, setDarkMode};
}

export const RouteEvent = () => {
    const {route, setRoute} = useContext(GlobalContext);
    return {route, setRoute};
}

export const LinkEvent = () => {
    const {link, setLink} = useContext(GlobalContext);
    return {link, setLink};
}

export const LoadEvent = () => {
    const {isLoaded, setIsLoaded} = useContext(GlobalContext);
    return {isLoaded, setIsLoaded};
}

export const CategoryBarEvent = () => {
    const {categoryBar, setCategoryBar} = useContext(GlobalContext);
    return {categoryBar, setCategoryBar};
}

export default GlobalProvider;