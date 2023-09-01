'use client'
import { useEffect, useState } from "react";
import LoginForm from "../_loginForm/loginForm";
import Navigation from "../_headerComponent/navigation";
import { useThemeContext } from "../_globalContext/_ThemeContext/themeContext";
import { theme } from "../layout";

export default function AnuallyPage(){
    const {toogleTheme} = useThemeContext();
    const [displayLoginForm,setDisplayLogInForm] = useState(true);

    useEffect(()=>{
        const isUserLoggedIn = sessionStorage.getItem('isUserLoggedIn');

        if(isUserLoggedIn){
            setDisplayLogInForm(prev => prev = false)
        }

    },[])

    return(
        <main className={theme(toogleTheme)}>
            <LoginForm displayLoginForm={displayLoginForm}/>
            <Navigation/>
        </main>
    )
}