import { Dispatch,SetStateAction,ReactNode, createContext, useState, useContext } from "react";

interface ThemeContextType{
    toogleTheme:boolean,
    setToogleTheme: Dispatch<SetStateAction<boolean>>
}

const initialThemeContext = {
    toogleTheme: false,
    setToogleTheme: ()=>{},
};

const ThemeContext = createContext<ThemeContextType>(initialThemeContext);

export default function ThemeContextProvider({children}:{children:ReactNode}){
    
    const [toogleTheme,setToogleTheme] = useState(false);

    return(
        <ThemeContext.Provider value={{toogleTheme,setToogleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = ()=>useContext(ThemeContext);