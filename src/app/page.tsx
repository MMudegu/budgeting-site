'use client'
import { useState } from "react";
import LoginForm from "./_loginForm/loginForm";

const modalText = `Login was successful welcome`

export default function HomePage(){
    const [showLoginForm,setShowLoginForm] = useState(true);

 
    return(
        <>  
            <LoginForm displayLoginForm={showLoginForm}/>
            <h1>Hello World</h1>
        </>
    )
}
