import {ThemeEvent} from '../contexts/globalContext';


export const darkMode = () => ThemeEvent().darkMode;
export const setDarkMode = () => ThemeEvent().setDarkMode;

export const unlimitColor = '#00dcff';
export const placeColor = "#FF005B";
export const greenColor = "#00FF2B";
export const guildColor = "#00dcff";

// dark colorers

export const darkUnlimitColor = "#00B9D7";

//Component Background Colors
export const darkComponentBg = "rgb(15, 15, 15)";
export const lightComponentBg = "white";

//Screen Background Colors
export const darkBg = "black";
export const lightBg = "rgb(245, 245, 245)";

//black and white opacity 0.8;
export const darkopa = (opa, dark = 0) => `rgba(${dark}, ${dark}, ${dark}, ${opa})`;
export const lightopa = (opa, light = 255) => `rgba(${light}, ${light}, ${light}, ${opa})`;

export const darklight = () => ThemeEvent().darkMode ? "black" : "white";

export const componentBger = () => ThemeEvent().darkMode ? darkComponentBg : lightComponentBg;

export const globalBger = () => ThemeEvent().darkMode ? darkBg : lightBg;

export const opaciter = (opa, dark, light) => ThemeEvent().darkMode ? lightopa(opa, light) : darkopa(opa, dark);

export const themeColorer = arg => {
    if (arg == 0) {
        return unlimitColor;
    } else if (arg == 1){
        return placeColor;
    } else if (arg == 2){
        return greenColor;
    }
}

export const darkColorer = (num = 15, opa = 1) => `rgba(${num}, ${num}, ${num}, ${opa})`;