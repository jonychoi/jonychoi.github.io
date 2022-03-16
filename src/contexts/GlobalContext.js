import React, {useState, useContext, createContext} from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(true);
    const [categoryBar, setCategoryBar] = useState(false);
    const [route, setRoute] = useState(0);
    return (
        <GlobalContext.Provider
            value={{
                darkMode: darkMode, 
                setDarkMode: setDarkMode,
                categoryBar: categoryBar, 
                setCategoryBar: setCategoryBar,
                route: route,
                setRoute: setRoute,
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

export const CategoryBarEvent = () => {
    const {categoryBar, setCategoryBar} = useContext(GlobalContext);
    return {categoryBar, setCategoryBar};
}

export default GlobalProvider;