import toogleButtonStyles from './toogleButton.module.css'

export default function ToogleButton({initialState,toogleState}:{initialState:boolean,toogleState:React.Dispatch<React.SetStateAction<boolean>>}){

    return(
        initialState ? 
        <div style={{background:'black',justifyContent:'left'}} className={toogleButtonStyles.ToogleButtonContainer}>
            <span className={toogleButtonStyles.LightSide} onClick={()=>toogleState((prevState)=>!prevState)}>Light</span>
        </div>  :
        <div style={{background:'skyblue',justifyContent:'right'}} className={toogleButtonStyles.ToogleButtonContainer}>
            <span className={toogleButtonStyles.DarkSide} onClick={()=>toogleState((prevState)=>!prevState)}>Dark</span>
        </div>
    )
}