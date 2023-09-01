'use client'
import { currency } from "@/app/_listOfCurrencyData/listOfCurrencyData"
import formInputStyles from './formInputComponent.module.css'
import { useState } from "react";

interface FormInputType{
    description: string,
    amount: number | string,
}

export default function FormInputComponent(){
    const [currencySelected, setCurrencySelected] = useState('USD');
    const currencyName = Object.keys(currency);
    const currencySymbol = Object.values(currency).map(element => element.symbol_native);

    const [formInputFields,setFormInputFields] = useState<FormInputType[]>([
        {  description:'',
            amount: 0
        },
    ]);
    
    const handleFormInputChange = (event : React.ChangeEvent<HTMLInputElement> ,index:number)=>{
        event.preventDefault();

        let formData:FormInputType[] = [...formInputFields];

        formData[index][event.target.name as keyof FormInputType] = event.target.value;

        setFormInputFields(formData);
    }

    const createNewInputField = ()=>{

        const newField = {description:'',amount:0}

        setFormInputFields([...formInputFields,newField]);
    }

    const deleteInputField = (index:number)=>{

        let formData:FormInputType[] = [...formInputFields];

        formData.splice(index,1);

        setFormInputFields(formData);
    }

    const deleteAllFields = ()=>{ 

        const field = [{description:'',amount:0}]

        setFormInputFields(field);
    };

     return(
        <fieldset className={formInputStyles.FormInputContainer}>
            <label htmlFor="CurrencyType"><strong>Choose a currency:</strong></label>
            <select id="CurrencyType" className={formInputStyles.CurrencyType} onChange={(e)=>setCurrencySelected((prev)=>prev = e.target.value)}>{currencyName.map((element,index)=>(
                <option key={index} value={element}>{`${currencySymbol[index]}  ${element}`}</option>))}
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
                                    <input id="Description" name="description" value={element.description} className={formInputStyles.DescriptionInput} onChange={(event)=>handleFormInputChange(event,index)}/>
                                </span>
                                <span className={formInputStyles.Inputs}>
                                    <label htmlFor="Amount" className={formInputStyles.InputLabels}><strong>Amount &#40;{currencySelected}&#41;:</strong></label>
                                    <input type="number" id="Amount" name="amount" value={element.amount} className={formInputStyles.AmountInput} onChange={(event)=>handleFormInputChange(event,index)}/>
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
                <h3 className={formInputStyles.TotalAmount}><em>{`Total Amount in ${currencySelected}:`}</em></h3>
                <label htmlFor="Notes"><strong>Notes:</strong></label>
                <textarea id="Notes" rows={10} className={formInputStyles.NotesTextArea}/>
            </div>
        </fieldset>
    )
}