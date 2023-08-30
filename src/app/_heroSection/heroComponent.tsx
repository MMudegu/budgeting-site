import Link from 'next/link'
import heroComponentStyles from './heroComponent.module.css'
import {useState, useEffect, useMemo, ReactElement} from 'react';
import { quotes } from '../_quotesData/quotes';

const checkElementIsInsideViewport = (id:string)=>{
    const element = (document.getElementById(id))!;
    const elementDimensions =  element.getBoundingClientRect();

    return(
        elementDimensions.top >= 0 &&
        elementDimensions.left >= 0 &&
        elementDimensions.right <= window.innerWidth &&
        elementDimensions.bottom <= window.innerHeight
    )
}

const QuotesTile = ({quoteIndex}:{quoteIndex:number})=>{
    return(
        <div className={heroComponentStyles.QuoteTile}>
            <h4>Today's Quote &#129417;</h4>
            <p> &#8221; {quotes[quoteIndex].q} &#8221; </p>
            <p>{quotes[quoteIndex].a}</p>
        </div>
    )
}



export default function HeroComponent(){
    const links = ['./ShoppingPage','./WeeklyPage','./MonthlyPage','./AnnualyPage'];
    const textContent = ['Shopping Page','Weekly Page','Monthly Page','Annually Page'];

    const [displayLinkIndex,setDisplayLinkIndex] = useState(0);
    const [changeQuoteIndex,setChangeQuoteIndex] = useState(0);
    const linkTimeDelay = 5000;
    let linkChangeCounter = 0;

    useEffect(()=>{
        setChangeQuoteIndex(prev =>{
            const randomIndex = Math.ceil(Math.random() * quotes.length - 1);
    
            return prev = randomIndex;
        })
    },[])

    const changeLink = ()=>{    
        if(linkChangeCounter <= links.length - 1 && linkChangeCounter >= 0){
            setDisplayLinkIndex((prev)=> prev = linkChangeCounter);
            linkChangeCounter = linkChangeCounter + 1;

            return;
        }
         linkChangeCounter = 0;
         setDisplayLinkIndex((prev)=> prev = linkChangeCounter);

         return ;
    }

        // useEffect(()=>{

        //     const timer = setInterval(changeLink,linkTimeDelay)

        //     const stopIntervalTimer = ()=>{
        //         const isHeroComponentInView = checkElementIsInsideViewport('HeroComponentContainer');

        //         if(!isHeroComponentInView){
        //             clearInterval(timer);
        //         }
        //     }

        //     window.addEventListener('scroll',stopIntervalTimer);


        // },[linkChangeCounter]);

    return(
        <div className={heroComponentStyles.HeroComponentContainer} id='HeroComponentContainer'>
            <h3 className={heroComponentStyles.Title}>Quick Budget</h3>
            <p className={heroComponentStyles.IntroParagrapgh}>
                Quick budget is a simplified financial planning app to enable you
                to set <strong>weekly, monthly  and yearly</strong> goals easily. 
                It also has a special page called <strong>shopping</strong> that allows 
                you to plan your shopping needs.                
            </p>
            <QuotesTile quoteIndex={changeQuoteIndex}/>
           <Link href={links[displayLinkIndex]} className={heroComponentStyles.CallToActionLink}>{textContent[displayLinkIndex]}</Link>
        </div>
    )
}