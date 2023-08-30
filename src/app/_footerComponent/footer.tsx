import {useEffect, useState} from 'react'
import footerStyles from './footer.module.css'
import Link from 'next/link'
import { useThemeContext } from '../_globalContext/_ThemeContext/themeContext'

export default function Footer(){

    const {toogleTheme} = useThemeContext();
    const [backgroundColor,setBackgroundColor] = useState('#E1AAF0');

    useEffect(()=>{
        if(toogleTheme){
            setBackgroundColor(prev => prev = '#121212')
        }
        else if(!toogleTheme){
            setBackgroundColor(prev => prev = '#E1AAF0')
        }
    },[toogleTheme])

    return(
           <footer style={{background:`${backgroundColor}`}} className={footerStyles.FooterContainer}>
                <nav className={footerStyles.NavLinkContainer}>
                    <Link href={'./ShoppingPage'} className={footerStyles.NavLink}>Shopping</Link>
                    <Link href={'./WeeklyPage'} className={footerStyles.NavLink}>Weekly</Link>
                    <Link href={'./MonthlyPage'} className={footerStyles.NavLink}>Monthly</Link>
                    <Link href={'./AnnualyPage'} className={footerStyles.NavLink}>Annualy</Link>
                </nav>
                <h4>&copy; <a href='https://marvinmudegu.online' className={footerStyles.PortfolioWebsiteLink}>Marvin Mudegu</a></h4>
           </footer>
    )
}