import React from 'react'
import featureImg1 from '../../assets/imgs/manImg.png'
import featureImg2 from '../../assets/imgs/teamWorkingImg.png'
//Comps
import FeatureCard from './FeatureCard'

const Features = ()=>{
    return(
        <div className='flex flex-col gap-8 md:gap-16 container'>
            <FeatureCard 
                title={'أمان بلا حدود'} 
                text={'خدماتنا في مجال توريد وتركيب وصيانة انظمة الحماية من الحريق  انظمه الاطفاء بالماء - يدوي/الآلي. انظمة الاخماد الآلي بالغاز والرغوة،  انظمة الانذار المبكر عن الحريق تقليدي/معنون، جميع ادوات ومعدات السلامة، توفير حلول عملية في مجال الحماية من الحرائق، عقد دورات تدريبية على التعامل مع اجهزه السلامة- الاخلاء انظمة المراقبة-وانظمة الدخول والخروج- والبوابات الامنية.'}
                imgSrc={featureImg1}
                flipOrder={false}
                />
            <FeatureCard
                subTitle={'مضخات الحريق'}
                title={'الجزء الحيوي من نظام الرش الآلي الذي يغذي مرشات مكافحة الحريق'}
                text={'وتعمل هذه المضخات عن طريق تغذيتها بالكهرباء أو الديزل . عادة ما يكون خط السحب للمضخة متصل بمصدر ثابت للمياه (خزان مياه، بحيرة،…). وظيفة المضخة هو إيصال تيار مائي بضغط عالٍ إلى الصواعد المتصلة بالمرشات المائية وخراطيم إطفاء الحريق.'}
                imgSrc={featureImg2}
                flipOrder={true}
            />
        </div>
    )
}

export default Features