import React from "react";
//media
import service1 from "../../assets/imgs/servicesImgs/sprinklerImg_1.webp";
import service2 from "../../assets/imgs/servicesImgs/gasImg_1.webp";
import service3 from "../../assets/imgs/servicesImgs/alarmImg.webp";
import service4 from "../../assets/imgs/servicesImgs/maintanenceImg.webp";
import service5 from "../../assets/imgs/servicesImgs/extingusherImg.webp";
import service6 from "../../assets/imgs/servicesImgs/cameraImg.webp";

//Comps
import ServiceCard from "./ServiceCard";

const Services = () => {
    return (
        <div
            className="flex flex-col items-center container"
            id="ServiceSection">
            <h2
                className="text-xl mb-6"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="000"
                data-aos-duration="1000"
                data-aos-once="true">
                نحن نقدم مجموعة شاملة من خدمات الأمن والسلامة ، مما يضمن راحة
                البال لعملائنا
            </h2>
            <ServiceCard
                title={"أنظمة مكافحة الحرائق"}
                text={
                    "نظام مرشات الماء التلقائية هو نظام لمكافحة الحريق وإطفائه بالماء، ويتدفق هذا الماء من رؤوس المرشات تحت ضغط وتدفق محسوبين لتغطية موقع الحريق، وتوزَّع هذه الرؤوس قريبةً من السقف"
                }
                imgSrc={service1}
            />
            <ServiceCard
                title={"نظام الاخماد الآلي"}
                text={
                    "نظم إخماد حرائق ثورية بما في ذلك أنظمة الرغوة والاخماد بالغاز وأنظمة الوسائط النظيفة (FM-200 وNOVEC) وأغطية المطابخ. أجهزتنا المتطورة تضمن حماية مثلى مع حد أدنى من البقايا، حيث نجعل سلامتكم أولويتنا القصوى."
                }
                imgSrc={service2}
                flipOrder={true}
            />
            <ServiceCard
                title={"أنظمة إنذار الحريق"}
                text={
                    "نظام اكتشاف الحرائق يصدر إنذاراً صوتياً وضوئياً لإخلاء المنطقة وتنبيه الأفراد عند حدوث حريق، يعمل بشكل يدوي أو تلقائي. هدفه الاستجابة السريعة وتنبيه الحضور بالحريق المبكر."
                }
                imgSrc={service3}
            />
            <ServiceCard
                title={"      صيانة و قائية "}
                text={
                    "يتم إجراء صيانة دورية لأنظمة الحريق واعتمادًا على نوع نظام الحرائق، يتم اتخاذ الإجراءات اللازمة من تنظيف وتشحيم وضبط الدوائر الكهربائية واستبدال الأجزاء التالفة منها"
                }
                imgSrc={service4}
                flipOrder={true}
            />
            <ServiceCard
                title={"طفايات الحريق"}
                text={
                    "نقوم بصيانة وتعبئة وتجهيز طفايات الحريق لديك بفعالية اكيدة  لتبقى خط الدفاع الاول لمواجهه اي حريق لا قدر الله ولتبقى منشاتك بامان"
                }
                imgSrc={service5}
            />
            <ServiceCard
                title={
                    "أنظمة المراقبة CCTV, وانظمةالمراقبة بالكاميرات   HD - IP"
                }
                text={
                    "نظم CCTV عالية الوضوح والكاميرات IP متاحة لتأمين الفلل والشركات والمولات والمناطق السياحية، حيث تراقب أنشطة الزوار وتحمي الأفراد من السرقة. يُستخدم تلفزيون الدائرة المغلقة CCTV لنقل الأحداث المستمرة داخل المكان وخارجه، مما يضمن الأمان الشامل."
                }
                imgSrc={service6}
                flipOrder={true}
            />
        </div>
    );
};
export default Services;
