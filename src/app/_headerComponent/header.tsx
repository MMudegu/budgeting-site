import { useThemeContext } from '../_globalContext/_ThemeContext/themeContext'
import ToogleButton from '../_toogleButton/toogleButton'
import headerStyles from './header.module.css'
import { theme } from '../layout';
import Link from 'next/link';

export default function Header(){

    const {toogleTheme,setToogleTheme} = useThemeContext();
   
    return(
        <header className={theme(toogleTheme)}>
            <span className={headerStyles.HeaderContainer}>
                <ToogleButton initialState={toogleTheme} setToogleState={setToogleTheme}/>
                <nav className={headerStyles.HeaderNavigation}>
                    <Link href={'./ShoppingPage'} className={headerStyles.NavLink}>Shopping</Link>
                    <Link href={'./WeeklyPage'} className={headerStyles.NavLink}>Weekly</Link>
                    <Link href={'./MonthlyPage'} className={headerStyles.NavLink}>Monthly</Link>
                    <Link href={'./AnnuallyPage'} className={headerStyles.NavLink}>Annually</Link>
                </nav>
            </span>
        </header>
    )
}