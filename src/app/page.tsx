'use client'
import LoginForm from "./_loginForm/loginForm";
import { useThemeContext } from "./_globalContext/_ThemeContext/themeContext";
import { theme } from "./layout";
import HeroComponent from "./_heroSection/heroComponent";

export default function HomePage(){
    const {toogleTheme} = useThemeContext();
     
    return(
        <>  
            <LoginForm displayLoginForm={false}/>
            <main className={theme(toogleTheme)}>
                <HeroComponent/>
            </main>
        </>
    )
}
