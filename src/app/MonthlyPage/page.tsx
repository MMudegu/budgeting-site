'use client'
import LoginForm from "../_loginForm/loginForm";
import { useEffect, useState } from "react";
import Navigation from "../_headerComponent/navigation";
import { theme } from "../layout";
import { useThemeContext } from "../_globalContext/_ThemeContext/themeContext";

export default function MonthlyPage(){
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