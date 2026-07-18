import { createContext, useContext } from "react";

export const ThemeContext=createContext(
    {
        themeMode:"",
        lighTheme:()=>{},
        darkTheme:()=>{},
    }
);

export const ThemeContextProvider=ThemeContext.Provider;

export default function useTheme()
{
    return useContext(ThemeContext);
}