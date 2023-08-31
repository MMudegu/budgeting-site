'use client'
import { useEffect, useState } from "react";
import LoginForm from "../_loginForm/loginForm";
import Navigation from "../_headerComponent/navigation";

export default function AnuallyPage(){
    
    const [displayLoginForm,setDisplayLogInForm] = useState(true);

    useEffect(()=>{
        const isUserLoggedIn = sessionStorage.getItem('isUserLoggedIn');

        if(isUserLoggedIn){
            setDisplayLogInForm(prev => prev = false)
        }

    },[])

    return(
        <main>
            <LoginForm displayLoginForm={displayLoginForm}/>
            <Navigation/>
        </main>
    )
}