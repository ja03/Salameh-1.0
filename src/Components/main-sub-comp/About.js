import React from "react";
import aboutImg from "../../assets/imgs/teamImg.webp";
// Comps
import AboutCard from "./AboutCard";
const About = () => {
    return (
        <div
            id="AboutSection"
            className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 container">
            <div className="w-full h-fit py-4 lg:w-1/2 order-2 lg:order-1 grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-6 ">
                <div
                    className="w-full h-[250px] sm:h-[300px]"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-once="true">
                    <AboutCard
                        title={"الرسالة"}
                        text={
                            "ان نكون الشركه الاكثر تميزا في خدماتنا ومنتجاتنا وندير اعمالنا بكل شفافيه من خلال عمل جماعي يحقق حمايه الارواح والممتلكات ويحقق المسؤوليه المجتمعية"
                        }
                    />
                </div>

                <div
                    className="w-full h-[250px] sm:h-[300px]"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-once="true">
                    <AboutCard
                        title={"الرؤية"}
                        text={
                            "التميز في اداره وتطوير خدمات انظمه الامن والسلامه ومكافحه الحرائق بما يخدم الفرد والمجتمع"
                        }
                    />
                </div>

                <div
                    className="w-full h-[250px] sm:h-[300px]"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="700"
                    data-aos-duration="1000"
                    data-aos-once="true">
                    <AboutCard
                        title={"الاهداف"}
                        text={
                            "تعزيز الوعي المجتمعي وتحقيق رؤية المملكة العربية السعودية 2030. تقديم خدمات مميزة, تسعى شركة سلامة السعودية للريادة المحلية في منطقة أنظمة الحرائق. تأسيس شراكات ، دولية البحث ، وتطوير نظم مكافحة الحريق."
                        }
                    />
                </div>

                <div
                    className="w-full h-px[250] sm:h-[300px]"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="900"
                    data-aos-duration="1000"
                    data-aos-once="true">
                    <AboutCard
                        title={"القيم"}
                        list={true}
                        listInfo={[
                            "الابداع",
                            "الشفافية",
                            "نشر الوعي (ثقافة السلامة) ",
                            "الالتزام",
                        ]}
                    />
                </div>
            </div>

            <div
                className="w-full lg:w-1/2 lg:order-2 flex flex-col items-center"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-once="true">
                <img src={aboutImg} className="w-[90%]" typeof="image/webp" />
            </div>
        </div>
    );
};
export default About;
