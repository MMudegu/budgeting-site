import SignUpForm from '../_signUpForm/signUpForm'
import signUpFormStyles from '../_signUpForm/signUpForm.module.css'
import { useState, useReducer, ChangeEvent } from 'react'
import HomePage from '../page'

enum ReducerActionType{
    inputUserName,
    inputPassword,
}

interface FormDataType{
    username:string,
    password:string,
}

type reducerAction = {
    type: ReducerActionType,
    payload?: string,
}

const initState = {
    username:'',
    password:'',
}

const reducer = (state: typeof initState,action:reducerAction): typeof initState=>{
    switch(action.type){
        case (ReducerActionType.inputUserName):  return({...state, username: action.payload ?? 'null'});
            
        case (ReducerActionType.inputPassword):  return({...state, password: action.payload ?? 'null'});

        default: throw new Error('Action is not valid!!');
    }

}


export default function LoginForm({displayLoginForm}:{displayLoginForm:boolean}){

    const [showLoginForm,setShowLoginForm] = useState(true);

    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails')??'{"Error":"userNotFound"}')

    const [state,dispatch] = useReducer(reducer,initState);

    if(storedUserDetails.Error === 'userNotFound'){
        return <SignUpForm displaySignUpForm={true}/>
    }


    const handleSubmit = (event:React.FormEvent<HTMLFormElement>,userDetails:FormDataType)=>{
        event.preventDefault();
        if(userDetails.password !== storedUserDetails.password)
        {
            const userPassword : HTMLElement | null = document.getElementById('Password');
    
            userPassword!==null ? userPassword.style.border = 'solid red' : console.log('Password Element Not Found!!');
            
            const errorDivElement : HTMLElement | null = document.getElementById('Error');

            errorDivElement !==null ? errorDivElement.textContent = 'Please Enter Correct Password !' : console.log('Error Element Not Found');
    
            return
        }

        if(userDetails.username !== storedUserDetails.username)
        {
            const userName : HTMLElement | null = document.getElementById('Username');
    
            userName!==null ? userName.style.border = 'solid red' : console.log('Username Element Not Found!!');
            
            const errorDivElement : HTMLElement | null = document.getElementById('Error');
            
            errorDivElement !==null ? errorDivElement.textContent = 'Please Enter Correct Username !' : console.log('Error Element Not Found');
    
            return
        }

        
        localStorage.setItem('isUserLoggedIn','true');

        setShowLoginForm(false);
    }
    
    return(
        displayLoginForm && showLoginForm ?
        <div className={signUpFormStyles.FormContainer}>
            <form className={signUpFormStyles.Form} onSubmit={(event)=>handleSubmit(event,state)}>
                <h1>Login</h1>
                <h3 id='Error' className={signUpFormStyles.Error}/>
                <div className={signUpFormStyles.FormField}>
                    <label htmlFor='Username'>Enter username:</label>
                    <input id='Username' className={signUpFormStyles.FormInput} required placeholder='John' onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                        dispatch({
                            type: ReducerActionType.inputUserName,
                            payload: e.target.value,
                        })
                    }}/>
                </div>
                <div className={signUpFormStyles.FormField}>
                    <label htmlFor='Password'>Enter password:</label>
                    <input type='password' id='Password' className={signUpFormStyles.FormInput} required onChange={
                        (e:ChangeEvent<HTMLInputElement>)=>{
                            dispatch({
                                type: ReducerActionType.inputPassword,
                                payload: e.target.value,
                            })
                        }
                    }/>
                </div>
               
                <button type='submit' className={signUpFormStyles.SubmitButton}>Login !</button>
            </form>
        </div>
        :
        null
    )

}