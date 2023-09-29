import React from 'react';
import Image from 'next/image';
import TextAnimation from '../common/text-animation';
import AboutDots from '../svg/about-dots';
import Circle from '../svg/circle';
import circle_img from '@/assets/img/rotation.png';
import mask_img from '@/assets/img/others/mask_img01.jpg';
import mask_img_2 from '@/assets/img/others/mask_img02.jpg';

const AboutAreaThree = () => {
    return (
        <section className="about__area-three section-pt-10 section-pb-70" id="aboutSec">
            <div className="container">
                {/* <div className="row">
            <div className="col-xl-4">
                <div className="about__title-wrap">
                    <h2 className="title">
                        <i>WE ARE</i>
                        <span>developer</span>
                        <i>ern nft</i>
                        <i>gam<b>ing</b></i>
                    </h2>
                </div>
            </div>
            <div className="col-xl-8">
                <div className="about__three-images">
                    <Image src={mask_img} alt="img" className="left"/>
                    <Image src={mask_img_2} alt="img" className="right"/>
                    <div className="about__dots">
                        <AboutDots/>
                    </div>
                </div>
                <div className="about__three-paragraph">
                  <TextAnimation style_2={true} title='Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis tincidunt massa venenatis. Lorem Ipsum is simply dummyd the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s when an unknown printer took a galley.' />
                </div>
            </div>
        </div> */}

                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="section__title text-center mt-55" style={{ color: "#800080" }}>
                            {/* <TextAnimation title="LATEST RESULTS FOR" /> */}
                            <h3 className="title">ABOUT US</h3>
                        </div>
                    </div>
                </div>
                <p style={{ color: "#fff", "lineHeight": "2.3rem", "marginBottom": "40px", "textAlign": "justify", "marginTop": "100px" }}>At Vocalify, we are driven by the vision of transforming the way humans and machines interact through voice. Established as the flagship project under the RVC 2 initiative, we utilize state-of-the-art artificial intelligence and machine learning technologies to create voice clones that are astonishingly lifelike and emotionally resonant. Our interdisciplinary team of engineers, data scientists, and voice experts are committed to pushing the boundaries of whats possible in speech synthesis.</p>
                <p style={{ color: "#fff", "lineHeight": "2.3rem", "marginBottom": "40px", "textAlign": "justify" }}>Our technology opens up a myriad of applications, from personalizing digital assistants to generating voiceovers that carry the precise emotional tone you require. By blending science and creativity, we are not just creating voices; we are revolutionizing the auditory experience.</p>
                <p style={{ color: "#fff", "lineHeight": "2.3rem", "marginBottom": "40px", "textAlign": "justify" }}>Thank you for visiting Vocalify. We invite you to explore our website and discover how our technology can serve your needs. Together, lets give voice to the future.</p>

            </div>
            <h2 className="big-title">online</h2>
        </section>
    );
};

export default AboutAreaThree;