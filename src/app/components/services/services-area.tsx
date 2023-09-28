'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import service_img_1 from '@/assets/img/others/services_img01.jpg';
import service_img_2 from '@/assets/img/others/services_img02.jpg';
import service_img_3 from '@/assets/img/others/services_img03.jpg';
import service_img_4 from '@/assets/img/others/services_img04.jpg';
import service_img_5 from '@/assets/img/others/imgs-1.jpg';
import Link from 'next/link';

// service images
const service_images = [service_img_1, service_img_2, service_img_3, service_img_4];
const service_items: {
  id: number;
  icon: string;
  title: string;
  desc: string;
}[] = [
    {
      id: 1,
      icon: 'flaticon-diamond',
      title: 'Unparalleled Realism',
      desc: 'Our AI-driven voice cloning technology captures the subtle nuances of speech, from intonation to emotion, delivering an incredibly lifelike auditory experience.'
    },
    {
      id: 2,
      icon: 'flaticon-user-profile',
      title: 'Emotional Versatility',
      desc: 'Vocalify can produce voice clones that express a wide range of emotions, enabling more genuine and empathetic interactions with your audience.'
    },
    {
      id: 3,
      icon: 'flaticon-ethereum',
      title: 'Multi-Language Support',
      desc: "Whether you're looking to clone voices in English, Spanish, Mandarin, or more, Vocalify supports a multitude of languages to bring your global projects to life."
    },
    {
      id: 4,
      icon: 'flaticon-settings-1',
      title: 'High-Quality Audio',
      desc: 'Our algorithms generate crystal-clear audio output, ensuring that your voice clones meet the highest industry standards for sound quality.'
    },
    {
      id: 5,
      icon: 'flaticon-settings-1',
      title: 'User-Friendly Interface',
      desc: 'With an intuitive dashboard and simple customization options, creating your own voice clone has never been easier or more accessible.'
    },
    {
      id: 6,
      icon: 'flaticon-settings-1',
      title: 'Data Security',
      desc: 'Your privacy is our top priority. All voice data is securely encrypted, and we adhere to stringent data protection protocols.'
    },
    {
      id: 7,
      icon: 'flaticon-settings-1',
      title: 'Real-Time Rendering',
      desc: 'Need a voice clone in a pinch? Our powerful algorithms can generate voiceovers in real-time, speeding up your creative process.'
    },
    {
      id: 8,
      icon: 'flaticon-settings-1',
      title: 'API Access',
      desc: "For developers looking to integrate Vocalify's capabilities into their own platforms, we offer a robust API that makes implementation seamless."
    }
  ];

const ServicesArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleMouseOver = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseOut = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <section style={{ paddingBottom: "10px" }} className="section-pt-30">
      <div className="">
        <div className="row align-items-end align-items-xl-start">
          <div style={{ width: "100%" }} className="">
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }} className="services__wrapper">
              {service_items.map((item, i) => (
                <div key={item.id} className="services__item" onMouseOver={() => handleMouseOver(i)} onMouseOut={() => handleMouseOut(i)}>
                  {/* <div className="services__icon"> */}
                  {/* <i className={item.icon}></i> */}
                  {/* </div> */}
                  <div className="shop__widget" style={{"height": "200px", "margin": "10px"}}>
                    <h4 className="shop__widget-title">{item.title}</h4>
                    <div className="shop__widget-inner" style={{"height": "200px"}}>
                      <div className="tournament__advertisement" style={{"width": "300px"}}>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                  {/* <div style={{width: "300px"}} className="services__content"> */}
                  {/* <h4 className="title"><Link href="/service-details">{item.title}</Link></h4> */}
                  {/* </div> */}
                </div>
              ))}
            </div>
          </div>
          {/* <div className="col-lg-6"> */}
          {/* <div className="services__images"> */}
          {/* <div className={`services__images-item active `}> */}
          {/* <Image src={service_img_5} alt="img" style={{width:'100%',height:'100%'}} /> */}
          {/* </div> */}
          {/* {service_images.map((s,i) => ( */}
          {/* <Link href="/service-details" className="services__link"> */}
          {/* <i className="flaticon-next"></i> */}
          {/* </Link> */}
          {/* ))} */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesArea;