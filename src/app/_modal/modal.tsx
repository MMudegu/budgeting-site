import { useState } from 'react'
import modalStyles from './modal.module.css'

interface ModalPropsType{
    text:string,
    displayModal:boolean,
    optionalFunction?: ()=>void,
}

export default function Modal({text,displayModal,optionalFunction}:ModalPropsType){

    const [showModal,setShowModal] = useState(true);
    const handleClick = ()=>{
        optionalFunction ? optionalFunction() : null;
        setShowModal((prev)=>prev = false);
    }

    return(
        displayModal && showModal ?
        <div className={modalStyles.ModalContainer}>
            <div className={modalStyles.Modal}>
                {text}
                <button id='ModalButton' className={modalStyles.ModalButton} onClick={handleClick}> Proceed ! </button>
            </div>
        </div>
        :
        null
    )
}