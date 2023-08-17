import React from 'react'
//media
import brand1 from '../../assets/imgs/brandsImgs/emaar.png'
import brand2 from '../../assets/imgs/brandsImgs/movenpick.png'
import brand3 from '../../assets/imgs/brandsImgs/non.png'
import brand4 from '../../assets/imgs/brandsImgs/skechers.png'
//Comps
import PartnerCard from './PartnerCard'

const Partners = ()=>{
    return(
        <div className='container'>
            <h2 
                className='mb-12 text-lg'
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="000"
                data-aos-duration="1000"
                data-aos-once="true"
            >اكثر من  100 شريك حول المملكة</h2>
                <div 
                    className=' border-x-4 border-white/30 flex flex-row items-center space-x-3 justify-between overflow-x-scroll '
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="000"
                    data-aos-duration="1000"
                    data-aos-once="true"
                    >
                    <div className=''>
                        <PartnerCard imgSrc={brand1} setWidth={'full'}/>
                    </div>
                    <div className=''>
                        <PartnerCard imgSrc={brand2} setWidth={'full'}/>
                    </div>
                    <div className=''>
                        <PartnerCard imgSrc={brand3} setWidth={'full'}/>
                    </div>
                    <div className=''>
                        <PartnerCard imgSrc={brand4} setWidth={'full'}/>
                    </div>
            </div>
        </div>  
    )
}
export default Partners