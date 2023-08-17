import React from 'react'

const FeatureCard = ({title, subTitle, text,imgSrc ,flipOrder})=>{
    return(
        <div className={`flex flex-col gap-8 md:gap-0 md:flex-row items-center`}>

            <div 
                className={`w-full md:w-1/2 flex flex-col  gap-6 md:${flipOrder && 'order-2'}`}
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                <p className='text-base text-accent'>{subTitle}</p>
                <h3 className='text-xl font-semibold'>{title}</h3>
                <p className='tet-base'>{text}</p>
            </div>

            <div 
                className={`w-full md:w-1/2 flex flex-col items-center md:${flipOrder && 'order-1'} ` }
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="000"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                <img src={imgSrc} alt="" className='w-3/4 h-auto'/>
            </div>
        </div>
    )
}
export default FeatureCard