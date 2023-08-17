import React from 'react'
//media
import icon1 from '../../assets/imgs/socialIcons/facebook.png'
import icon2 from '../../assets/imgs/socialIcons/insta-icon.png'
import icon3 from '../../assets/imgs/socialIcons/linkedIn-icon.png'
import icon4 from '../../assets/imgs/socialIcons/twitter-icon.png'
//Comps
import Btn from '../Btn'

const Contact = ()=>{
    return(
        <div 
            className='w-full bg-muted p-4 md:pt-16 md:pb:8 rounded-t-3xl'
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="000"
            data-aos-duration="1000"
            data-aos-once="true"    
        >

            <div className='container p-8 flex flex-col gap-8'>

                <div 
                    className='flex flex-col items-center gap-8 text-center'>
                    <h3 className='font-bold text-base text-accent'>دعنا نتواصل</h3>
                    <p className='text-lg'>يسعدنا مساعدتك  في تحقيق أهدافك المتعلقة بالسلامة والأمن <br />  تواصل معنا  اليوم للبدء</p>
                    <Btn btn_text={'لنتحدث'} fill={true} animate={false} />
                </div>

                <div 
                    className='flex flex-col md:flex-row justify-between items-center border-t-2 border-t-accent pt-8 text-md text-accent'>

                    <div className='order-2 md:order-1 text-center md:text-right '>
                        <p>جميع الحقوق محفوظة شركة سلامة السعودية</p>
                        <a className='underline underline-offset-4' href="#">تصميم و تطوير أحمد محمود</a>
                    </div>
                    <div className='order-1 md:order-2 flex flex-col items-center md:block mb-6 md:mb-0 '>
                        <p className='text-base mb-3 font-semibold'>تعرف علينا اكثر</p>
                        <div className='flex items-center gap-6'>
                            <img src={icon1} className='w-[40px]'alt='icon' />
                            <img src={icon2} className='w-[40px]'alt='icon' />
                            <img src={icon3} className='w-[40px]'alt='icon' />
                            <img src={icon4} className='w-[40px]'alt='icon' />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Contact