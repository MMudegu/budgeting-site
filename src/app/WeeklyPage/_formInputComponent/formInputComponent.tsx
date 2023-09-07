'use client'
import { currency } from "@/app/_listOfCurrencyData/listOfCurrencyData"
import formInputStyles from './formInputComponent.module.css'
import { useState } from "react";
import { useUserInputDataContext } from "@/app/_globalContext/_ThemeContext/userDataInput/userDataInput";

interface FormInputType{
    description: string | number,
    amount: number | string,
}

export default function FormInputComponent(){

    const {setUserInputData,setCurrency,setNotes} = useUserInputDataContext();
    
    const [currencySelected, setCurrencySelected] = useState('USD');
    const currencyName = Object.keys(currency);
    const currencySymbol = Object.values(currency).map(element => element.symbol_native);

    const [formInputFields,setFormInputFields] = useState<FormInputType[]>([
        {  description:'',
            amount: '',
        },
    ]);
    
    const handleFormInputChange = (event : React.ChangeEvent<HTMLInputElement> ,index:number)=>{
        event.preventDefault();

        let formData:FormInputType[] = [...formInputFields];

        if(event.target.name === 'amount'){
            formData[index][event.target.name as keyof FormInputType] = Number(event.target.value);
        }
        else{
            formData[index][event.target.name as keyof FormInputType] = event.target.value;
        }

        //For local use
        setFormInputFields(formData);

        //For global use
        setUserInputData(formData);

    }

    const createNewInputField = ()=>{

        const newField = {description:'',amount:''}

        setFormInputFields([...formInputFields,newField]);
    }

    const deleteInputField = (index:number)=>{

        let formData:FormInputType[] = [...formInputFields];

        formData.splice(index,1);

        //For local use
        setFormInputFields(formData);
        
        //For global use
        setUserInputData(formData);

    }

    const deleteAllFields = ()=>{ 

        const field = [{description:'',amount:''}]

        //For local use
        setFormInputFields(field);

        //For global use
        setUserInputData(field);
    };

     return(
        <fieldset className={formInputStyles.FormInputContainer}>
            <label htmlFor="CurrencyType"><strong>Choose a currency:</strong></label>
            <select id="CurrencyType" className={formInputStyles.CurrencyType} onChange={
                (e)=>{
                    setCurrency((prev)=>prev = e.target.value);
                    setCurrencySelected((prev)=>prev = e.target.value)}}>

                        {currencyName.map((element,index)=>(
                            <option key={index} value={element}>{`${currencySymbol[index]}  ${element}`}</option>
                        ))}

            </select>

            {formInputFields.map((element,index)=>{
                return(<fieldset key={index}>
                            <div className={formInputStyles.InputsContainer}>
                                <span className={formInputStyles.Inputs}>
                                    <label htmlFor="ItemNumber"><strong>Item:</strong></label>
                                    <h4 id="ItemNumber" className={formInputStyles.ItemNumber}>{index+1}</h4>
                                </span>

                                <span className={formInputStyles.Inputs}>
                                    <label htmlFor="Description" className={formInputStyles.InputLabels}><strong>Description:</strong></label>
                                    <input id="Description" name="description" value={element.description} className={formInputStyles.DescriptionInput} onChange={(event)=>handleFormInputChange(event,index)}
                                    required placeholder="Rent"/>
                                </span>

                                <span className={formInputStyles.Inputs}>
                                    <label htmlFor="Amount" className={formInputStyles.InputLabels}><strong>Amount &#40;{currencySelected}&#41;:</strong></label>
                                    <input type="number" id="Amount" name="amount" value={element.amount} className={formInputStyles.AmountInput} onChange={(event)=>handleFormInputChange(event,index)} placeholder="1000"/>
                                </span>
                            </div>
                    
                            <button className={formInputStyles.ControlButtons} onClick={()=>deleteInputField(index)}>Remove item</button>
                        </fieldset>
                        )
            })}
            
            <div className={formInputStyles.ControlButtonsContainer}>
                <button className={formInputStyles.ControlButtons} onClick={createNewInputField}>Add an item</button>
                <button className={formInputStyles.ControlButtons} onClick={deleteAllFields}>Clear all</button>
            </div>

            <div className={formInputStyles.NotesArea}>
                <h3 className={formInputStyles.TotalAmount}><em>{`Total Amount in ${currencySelected}:

                    ${formInputFields.reduce((accumulator,currentValue)=>accumulator + Number(currentValue.amount),0)}

                `}</em></h3>

                <label htmlFor="Notes"><strong>Notes:</strong></label>
                <textarea id="Notes" rows={10} className={formInputStyles.NotesTextArea} onChange={
                    (e)=>{
                      setNotes(prev=>prev = e.target.value);
                    }
                }/>
            </div>
        </fieldset>
    )
}