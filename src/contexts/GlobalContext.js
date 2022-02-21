import React, {useState, useContext, createContext} from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(true);
    const [sideBar, setSideBar] = useState(false);
    return (
        <GlobalContext.Provider
            value={{
                darkMode: darkMode, 
                setDarkMode: setDarkMode,
                categoryBar: categoryBar, 
                setCategoryBar: setCategoryBar,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const ThemeEvent = () => {
    const {darkMode, setDarkMode} = useContext(GlobalContext);
    return {darkMode, setDarkMode};
}

export const categoryBarEvent = () => {
    const {categoryBar, setCategoryBar} = useContext(GlobalContext);
    return {categoryBar, setCategoryBar};
}

export default GlobalProvider;