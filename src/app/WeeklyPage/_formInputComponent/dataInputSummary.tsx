'use client'
import { useUserInputDataContext } from '@/app/_globalContext/_ThemeContext/userDataInput/userDataInput'
import dataInputSummaryStyles from './dataInputSummary.module.css'
import SummaryGraph from './summaryGraphComponent';

export default function DataInputSummary({title}:{title:string}){

    const {userInputData,currency} = useUserInputDataContext();

    return(
        <div className={dataInputSummaryStyles.SummaryContainer}>
            <h3>{`${title} Summary`}</h3>
            <div className={dataInputSummaryStyles.SummaryContentTitle}>
                <h4><strong><em>Item</em></strong></h4>
                <h4><strong><em>Description</em></strong></h4>
                <h4><strong><em>Amount</em></strong></h4>
            </div>
            {userInputData.map((element,index)=>{
                    return(
                    <div key={index} className={dataInputSummaryStyles.SummaryContent}>
                            <p className={dataInputSummaryStyles.Item}>{index + 1}</p>
                            <p className={dataInputSummaryStyles.Description}>{element.description}</p>
                            <p className={dataInputSummaryStyles.Amount}>{element.amount}</p>
                    </div>
                    )
                })}
            
            <h3 className={dataInputSummaryStyles.TotalAmount}><em>{`Total Amount in ${currency}:

                ${userInputData.reduce((accumulator,currentVal)=>{
                    return Number(currentVal.amount) + accumulator
                },0)}

                `}</em></h3>
                <SummaryGraph title={title}/>
        </div>
    )
}