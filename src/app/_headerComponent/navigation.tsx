import Link from 'next/link'
import navigationStyles from './navigation.module.css'
import { theme } from '../layout'
import { useThemeContext } from '../_globalContext/_ThemeContext/themeContext'
import Modal from '../_modal/modal';
import { useState } from 'react';

const deleteUserDetails = ()=>{
    sessionStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('userDetails');
    location.reload();
}

export default function Navigation(){
    const {toogleTheme} = useThemeContext();
    const [displayModal,setDisplayModal] = useState(false);

    const onClickHandler = ()=>{
        setDisplayModal((prev)=>prev = true);
    }

    return(
        <div className={theme(toogleTheme)}>
            <nav className={navigationStyles.NavContainer}>
                <Link href={'./'} className={navigationStyles.HomeLink}>Home</Link>
                <button className={navigationStyles.SignOutButton} onClick={onClickHandler}>Delete User Details</button>
            </nav>
            <Modal text={'Your username and password have been deleted'} displayModal={displayModal} optionalFunction={deleteUserDetails}/>
        </div>
    )
}