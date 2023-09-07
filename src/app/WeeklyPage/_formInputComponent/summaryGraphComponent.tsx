import { ResponsiveContainer,PieChart,Pie,Sector, Cell, } from 'recharts'
import {useEffect,useState} from 'react'
import graphStyles from './summaryGraphComponent.module.css'
import { useUserInputDataContext } from '@/app/_globalContext/_ThemeContext/userDataInput/userDataInput'

//const test = [{description:'a',amount:10},{description:'b',amount:20},{description:'c',amount:30},{description:'d',amount:40}]

const hexColorGenerator = (index:number)=>{
    let arrayOfColors:string[]=[];

    for(let i=0;i<index;i++){
        arrayOfColors[i] = `#${Math.floor(Math.random()*10)}A${Math.floor(Math.random()*10)}B${Math.floor(Math.random()*10)}C`;
    }

    return arrayOfColors;
}



// const RADIAN = Math.PI / 180;

// interface RenderCustomizedLabelType{
//     cx:number,
//     cy:number,
//     midAngle:number,
//     innerRadius:number,
//     outerRadius:number,
//     percent:number,
//     index:number,
// }

// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }:RenderCustomizedLabelType) => {

//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

export default function SummaryGraph({title}:{title:string}){

    const {userInputData} = useUserInputDataContext();

    const [colors,setColors] = useState<string[]>([]);
    const [displayChart,setDisplayChart] = useState(false);

    const RenderChart = ()=>{        
        return(
            <ResponsiveContainer height={500} width="100%">
                <PieChart>
                    <Pie data={userInputData} dataKey={'amount'} nameKey={'description'} fill={colors[0]} label={true}  labelLine={true}>
                        {
                            userInputData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        )
    }

    useEffect(()=>{
        userInputData.length > 1?setDisplayChart(true):setDisplayChart(false);
        setColors(hexColorGenerator(userInputData.length))
    },[userInputData])

    return(
        displayChart?
                <div>
                    <h4>{title + ' Graph'}</h4>
                    <RenderChart/>
                </div>
            :
            null
    )
}