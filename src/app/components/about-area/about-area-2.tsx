"use client";
import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import icon from '@/assets/img/icons/shape.svg';
import shape from '@/assets/img/icons/shape.svg';
import SvgIconCom from '../common/svg-icon-anim';
import circel from '@/assets/img/icons/circle.svg';
import fun_fact_shape from '@/assets/img/others/fun_fact_shape.png';
import fun_fact from '@/assets/img/others/imgs-1.png';
import trophy from '@/assets/img/icons/trophy.png';
import VideoPopup from '../common/video-popup';
import CounterUp from "../common/counter-up";
import { auto } from "@popperjs/core";
import rotatedpic from '@/assets/img/rotation.png'
import alpha from '@/assets/css/about.module.css'
const AboutAreaTwo = () => {
   const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
   const imgStyle = { height: 'auto', width: 'auto' };

   return (
      <>
         <section className="about__area-two section-pt-160 section-pb-190">
            <div className="container">
               <div className="row justify-content-center align-items-center">
                  <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
                     {/* <div className="about__funFact-images"> */}
                     {/* <Image src={fun_fact_shape} alt="background" className="bg-shape" /> */}
                     <div className="l1">
                        {/* <div className="alal" style={{height: "500px", width:"100px", background: '#'}}></div> */}
                        {/* <Image src={fun_fact} className="main-img" alt="image" style={{ height: '500px', border: "1px solid purple", width:'auto'  }} /> */}
                        {/* <Image  src={rotatedpic} alt="img" style={imgStyle} /> */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                 <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                 <text>
                                    <textPath href="#textPath">super nft Gaming sits</textPath>
                                 </text>
                              </svg> */}
                        {/* </div> */}
                     </div>
                     <Image className={alpha.rotate} src={rotatedpic} alt="img" style={imgStyle} />
                     {/* </div> */}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-10">
                     <div className="section__title text-start mb-30">
                        <h3 className="title" style={{ fontSize: '60px' }} >TOKENOMICS</h3>
                     </div>
                     <div className="about__content-two">
                        <p style={{ fontSize: "20px" }}>A marketing plan is a comprehensive document or blueprint that outlines a company advertising and marketing efforts for the comming year.</p>
                     </div>
                     <div className="about__content-bottom">
                        <div className="about__content-circle">
                           {/* <Image src={circel} alt="img" style={imgStyle} /> */}
                           {/* <Image src={rotatedpic} alt="img" style={imgStyle}/> */}
                           {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                 <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                 <text>
                                    <textPath href="#textPath">super nft Gaming sits</textPath>
                                 </text>
                              </svg> */}
                        </div>
                        <div className="about__funFact-wrap">
                           <div className="about__funFact-lists">
                              <div className="about__funFact-item">
                                 <h2 className="count">
                                    <CounterUp number={2000000} />
                                 </h2>
                                 <p>Total Supply</p>
                              </div>
                              <div className="about__funFact-item">
                                 <h2 className="count">
                                    <p style={{ margin: 0, color: "#fff", fontSize: "22px" }} className="title count">VCF</p>
                                 </h2>
                                 <p>SYMBOL</p>
                              </div>
                              <div className="about__funFact-item">
                                 <h2 className="count">
                                    <p style={{ margin: 0, color: "#fff", fontSize: "22px" }} className="title count">BEP-20</p>
                                 </h2>
                                 <p>TYPE</p>
                              </div>
                           </div>
                           <div className="row" style={{ marginTop: "20px" }}>
                              <div className="col-12" >
                                 <div className="grand__final" >
                                    <div className="grand__final-button" >
                                       <Link href="/" className="tg-btn-3 tg-svg mx-auto" >
                                          <SvgIconCom icon={icon} id="svg-5" />
                                          <span>read more</span>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"ssrNcwxALS4"}
         />
         {/* video modal end */}
      </>
   );
};

export default AboutAreaTwo;