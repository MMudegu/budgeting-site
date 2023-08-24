import { useState,useReducer, ChangeEvent } from 'react'
import signUpFormStyles from './signUpForm.module.css'
import Modal from '../_modal/modal'

enum ReducerActionType{
    inputUserName,
    inputPassword,
    inputRepeatPassword
}

interface FormDataType{
    username:string,
    password:string,
    repeatPassword:string,
}

type reducerAction = {
    type: ReducerActionType,
    payload?: string,
}

const initState = {
    username:'',
    password:'',
    repeatPassword:'',
}

const reducer = (state: typeof initState,action:reducerAction): typeof initState=>{
    switch(action.type){
        case (ReducerActionType.inputUserName):  return({...state, username: action.payload ?? 'null'});
            
        case (ReducerActionType.inputPassword):  return({...state, password: action.payload ?? 'null'});

        case (ReducerActionType.inputRepeatPassword):  return({...state, repeatPassword: action.payload ?? 'null'});

        default: throw new Error('Action is not valid!!');
    }

}

export default function SignUpForm({displaySignUpForm}:{displaySignUpForm:boolean}){

    const [showSignUpForm,setShowSignUpForm] = useState(true);
    const [state,dispatch] = useReducer(reducer,initState);
    const [showModal,setShowModal] = useState(false);
    const [showLoginForm,setShowLoginForm] = useState(false);

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>,userDetails:FormDataType)=>{
        event.preventDefault();
        if(userDetails.password !== userDetails.repeatPassword)
        {
            const userPassword : HTMLElement | null = document.getElementById('Password');
            const userRepeatPassword : HTMLElement | null = document.getElementById('RepeatPassword');
    
            userPassword!==null ? userPassword.style.border = 'solid red' : console.log('Password Element Not Found!!');
            userRepeatPassword!==null ? userRepeatPassword.style.border = 'solid red': console.log('RepeatPassword Element Not Found!!');
            
            const errorDivElement : HTMLElement | null = document.getElementById('Error');
            errorDivElement !==null ? errorDivElement.textContent = 'Passwords do not match !' : console.log('Error Element Not Found');
    
            return
        }

        localStorage.setItem('userDetails',JSON.stringify(userDetails));

        setShowSignUpForm(false);
        setShowModal(true);
    }
   
    return(
        displaySignUpForm && showSignUpForm ?
        <div className={signUpFormStyles.FormContainer}>
            <form className={signUpFormStyles.Form} onSubmit={(event)=>handleSubmit(event,state)}>
                <h1>Sign Up</h1>
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
                <div className={signUpFormStyles.FormField}>
                    <label htmlFor='RepeatPassword'>Repeat password:</label>
                    <input type='password' id='RepeatPassword' className={signUpFormStyles.FormInput} required onChange={
                        (e:ChangeEvent<HTMLInputElement>)=>{
                            dispatch({
                                type: ReducerActionType.inputRepeatPassword,
                                payload: e.target.value,
                            })
                        }
                    }/>
                </div>
                <button type='submit' className={signUpFormStyles.SubmitButton}>Submit !</button>
            </form>
        </div>
        :
    
            <Modal text={'Your account has been setup successfuly'} displayModal={showModal}/>
                 
              
    )
}