import React from 'react'

const PartnerCard = ({imgSrc,setWidth})=>{
    return(
        <div 
            className='border-2 border-accent rounded-md w-[300px] max-w-[300px] h-[200px] grid items-center p-4 m-4'
        >
            <img src={imgSrc} alt="" className={`w-[full] h-auto mx-auto`}/>
        </div>
    )
}
export default PartnerCard