import React from 'react'
import discIcon from '../../assets/imgs/disc.svg'
const AboutCard = ({title, text, list, listInfo})=>{
    const isList = (list, listInfo)=>{
        if(list){
            return (
                <ul className='flex flex-col gap-4 py-2'>
                {listInfo.map((info) => (
                        <li className='p-2 text-[16px] 
                        flex items-center gap-2'>
                            <span className='flex-1'>
                                {info}
                            </span>
                            <img src={discIcon} className='w-[3%]'/>
                        </li>
                ))}
                </ul>
            )
        }
        else{
            return (text)
        }

    }
    return(
        <div 
            className='flex flex-col gap-3 border-2 h-full border-accent mx-auto  p-4 transition-colors duration-300 hover:bg-accent/30'
            
            >
            <h3 className='font-bold text-base'>{title}</h3>
            <p className='text-sm md:text-[15px] leading-normal'>{isList(list, listInfo)}</p>
            
        </div>
    )
}
export default AboutCard