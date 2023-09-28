import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import result_bg from '@/assets/img/bg/result_bg.png';
import shape from '@/assets/img/icons/win_shape.svg';
import icon from '@/assets/img/icons/shape.svg';
import win_1 from '@/assets/img/others/win01.png';
import win_2 from '@/assets/img/others/win02.png';
import SvgIconCom from '../common/svg-icon-anim';
import TextAnimation from '../common/text-animation';
// import StreamersArea from '../streamers/streamers-area';
import StreamersArea1 from './streamers-area';
import ServicesArea from '../services/services-area';
// img style 
const imgStyle = {
    height: 'auto'
}

// match winner item
// prop type
type IWinnerItem = { name: string; amount: string; img: StaticImageData, id: string; place: string }
function MatchWinnerItem({ name, amount, img, id, place }: IWinnerItem) {
    return (
        <div className="match__winner-wrap">
            <div className="match__winner-info">
                <h4 className="name">{name}</h4>
                <span className="price-amount">${amount}</span>
            </div>
            <div className="match__winner-img tg-svg">
                <div className="team-logo-img">
                    <Link href="/team-details"><Image src={img} alt="img" style={imgStyle} /></Link>
                </div>
                <SvgIconCom icon={shape} id={`svg-${id}`} />
                <h3 className="match__winner-place">{place}</h3>
            </div>
        </div>
    )
}

const MatchResultArea = () => {
    return (
        <section id="experienceArea" className="match__result-area">
            <div className="match__result-bg" style={{ backgroundImage: `url(${result_bg.src})` }}></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="section__title text-center mb-55" style={{ color: "#800080" }}>
                            <TextAnimation title="LATEST RESULTS FOR" />
                            <h3 className="title">EXPERIENCE JUST FOR</h3>
                        </div>
                    </div>
                </div>
                <ServicesArea/>
                {/* <StreamersArea1 /> */}
                {/* <div className="row" style={{ marginTop: "20px" }}>
                    <div className="col-12" >
                        <div className="grand__final" >
                            <div className="grand__final-button" >
                                <Link href="/services" className="tg-btn-3 tg-svg mx-auto" >
                                    <SvgIconCom icon={icon} id="svg-5" />
                                    <span>read more</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row" style={{marginTop: 0}}>
            <div className="col-12" style={{marginTop: 0}}>
                <div className="grand__final" style={{marginTop: 0}}>
                    <div className="grand__final-button" style={{marginTop: 0}}>
                        <Link href="/" className="tg-btn-3 tg-svg mx-auto" style={{marginTop: 0}}>
                            <SvgIconCom icon={icon} id="svg-5"/>
                            <span>read more</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div> */}

            </div>
        </section>
    );
};

export default MatchResultArea;