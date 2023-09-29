"use client";
import React from "react";
import Link from "next/link";
// import banner_bg from "@/assets/img/slider/banner_bg.jpg";
import banner_bg from "@/assets/img/bg/bg.jpg";
import shape from "@/assets/img/icons/shape.svg";
import SvgIconCom from "../common/svg-icon-anim";
import jsPDF from "jspdf";
import { Atomic_Age } from "next/font/google";
import { blob } from "stream/consumers";
const HeroBannerTwo = () => {
  const downloadFile = async () => {
    try {
      const url = `/VCF_WHITEPAPERS.pdf`;

      if (typeof window !== 'undefined') {
        const response = await fetch(url);
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const aTag = document.createElement("a");
        aTag.href = blobUrl;
        aTag.setAttribute("download", "VCF_WHITEPAPERS.pdf");
        document.body.appendChild(aTag);
        aTag.click();
        document.body.removeChild(aTag);
        // Release the blob URL to free up resources
        window.URL.revokeObjectURL(blobUrl);
      }
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  }
    return (
    <section className="banner__area banner__padding">
      <div
        className="banner__bg tg-jarallax"
        style={{ backgroundImage: `url(${banner_bg.src})`, filter: 'brightness(50%) contrast(80%)', }}
      ></div>
      <div className="container custom-container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="banner__content slider__content text-center">
              <h2 className="title wow bounceInLeft" style={{ fontSize: '48px' }} data-wow-delay=".2s">
                Transforming Voices
              </h2>
              <p className="wow bounceInLeft" data-wow-delay=".4s">
              through Artificial Intelligence & Machine Learning
              </p>
              <div
                className="banner__btn wow bounceInLeft"
                data-wow-delay=".6s"
              >
                <Link href="#" onClick={downloadFile} className="tg-btn-3 tg-svg mx-auto" >
                  <SvgIconCom icon={shape} id="svg-1" />
                  <span>WHITEPAPER</span>
                </Link>
                {/* <a href="/VCF_WHITEPAPERS.pdf" download>Download PDF</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerTwo;
