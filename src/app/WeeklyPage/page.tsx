'use client'
import LoginForm from "../_loginForm/loginForm";
import { useEffect, useState } from "react";
import Navigation from "../_headerComponent/navigation";
import FormInputComponent from "./_formInputComponent/formInputComponent";
import { theme } from "../layout";
import { useThemeContext } from "../_globalContext/_ThemeContext/themeContext";
import DataInputSummary from "./_formInputComponent/dataInputSummary";
import SaveOrExport from "./_formInputComponent/saveOrExportComponent";


export default function WeeklyPage(){
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
            <FormInputComponent/>
            <DataInputSummary title="Weekly"/>
            <SaveOrExport title="Weekly"/>
        </main>
    )
}