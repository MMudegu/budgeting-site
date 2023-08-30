'use client'
import LoginForm from "./_loginForm/loginForm";
import { useThemeContext } from "./_globalContext/_ThemeContext/themeContext";
import { theme } from "./layout";
import HeroComponent from "./_heroSection/heroComponent";
import pageStyles from './page.module.css'

const MotivationSection = ()=>{
    return(
        <div className={pageStyles.MotivationSectionContainer}>
            <h4>Why Quick Budget ?</h4>
            <p>
                Quick budget provides a fast and effecient way to plan your expenses without the need
                to surrender any data. Everything is done on your browser which can then be exported as 
                comma separated values (CSV) in order to be saved offline or to be used in other apps.  
            </p>
        </div>
    )
}

export default function HomePage(){
    const {toogleTheme} = useThemeContext();
         
    return(
        <>  
            <LoginForm displayLoginForm={false}/>
            <main className={theme(toogleTheme)}>
                <HeroComponent/>
                <MotivationSection/>
            </main>
        </>
    )
}
