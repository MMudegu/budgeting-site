'use client'

import { useState, createContext, useContext } from "react";

export interface UserInputDataType{
    description:string | number,
    amount:string | number,
}

const initialData: UserInputDataType[]=[
    {
        description:'',
        amount:'',

    }
]

const initCurrencySelected:string= 'USD';
const initNotes:string='';


interface ContextValuePropType{
    userInputData: UserInputDataType[],
    setUserInputData: React.Dispatch<React.SetStateAction<UserInputDataType[]>>,
    currency: string,
    setCurrency: React.Dispatch<React.SetStateAction<string>>,
    notes: string,
    setNotes: React.Dispatch<React.SetStateAction<string>>
}

const initialContext = {
    userInputData:[
        {
            description:'',
            amount:'',
        }
    ],
    setUserInputData: ()=>{},
    currency: 'USD',
    setCurrency: ()=>{},
    notes:'',
    setNotes: ()=>{}
}

const userInputDataContext = createContext<ContextValuePropType>(initialContext);

export default function UserInputDataProvider({children}:{children:React.ReactNode}){

    const [userInputData,setUserInputData] = useState(initialData);
    const [currency,setCurrency] = useState(initCurrencySelected);
    const [notes,setNotes] = useState(initNotes);

    return (
        <userInputDataContext.Provider value={{userInputData,setUserInputData,currency,setCurrency,setNotes,notes}}>
            {children}
        </userInputDataContext.Provider>
    )
} 

export const useUserInputDataContext = ()=> useContext(userInputDataContext);