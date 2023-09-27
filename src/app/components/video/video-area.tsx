"use client";
import React, { useState } from "react";
import bg from "@/assets/img/bg/video_bg.jpg";
import VideoPopup from "../common/video-popup";

const VideoArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      {/* <section className="video__area video-bg tg-jarallax" style={{backgroundImage:`url(${bg.src})`}}> */}
       
      {/* </section> */}

      {/* video modal start */}
      {/* <VideoPopup */}
        {/* isVideoOpen={isVideoOpen} */}
        {/* setIsVideoOpen={setIsVideoOpen} */}
        {/* videoId={"ssrNcwxALS4"} */}
      {/* /> */}
      {/* video modal end */}
    </>
  );
};

export default VideoArea;
