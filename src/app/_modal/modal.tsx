import { useState } from 'react'
import modalStyles from './modal.module.css'

interface ModalPropsType{
    text:string,
    displayModal:boolean,
}

export default function Modal({text,displayModal}:ModalPropsType){

    const [showModal,setShowModal] = useState(true);

    return(
        displayModal && showModal ?
        <div className={modalStyles.ModalContainer}>
            <div className={modalStyles.Modal}>
                {text}
                <button id='ModalButton' className={modalStyles.ModalButton} onClick={()=>setShowModal((prev)=>prev = false)}> Proceed ! </button>
            </div>
        </div>
        :
        null
    )
}