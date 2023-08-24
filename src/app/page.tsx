'use client'
import { useState } from "react";
import LoginForm from "./_loginForm/loginForm";
import { useThemeContext } from "./_globalContext/_ThemeContext/themeContext";
import { theme } from "./layout";

export default function HomePage(){
    const {toogleTheme} = useThemeContext();
     
    return(
        <>  
            <LoginForm displayLoginForm={false}/>
            <div className={theme(toogleTheme)}>
            </div>
        </>
    )
}
