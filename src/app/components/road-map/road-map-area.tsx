"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import bg from "@/assets/img/bg/roadmap_bg.jpg";
import road_map from "@/assets/img/Vocalify Images/roadmap.png";
import road_map_step from "@/assets/img/others/roadmap_img.png";
import useTextAnimation from "@/hooks/use-text-animation";

// road map lists
type IRoadMap = {
  id: number;
  active: boolean;
  title: string;
  lists: {
    active: boolean;
    text: string;
  }[];
};
const road_map_lists: IRoadMap[] = [
  {
    id: 1,
    active: true,
    title: "Q1-Part-1 2024",
    lists: [
      { active: true, text: "Platform Launch: Official release of the Vocalify platform.AI Model Marketplace Debut: Introduction of premium voice models.Staking Program Initiation: Begin staking options for VCF holders." },
    ],
  },
  {
    id: 2,
    active: false,
    title: "Q2-Part-2 2024",
    lists: [
      { active: true, text: "Mobile App Launch: Release of Vocalify mobile application for iOS and Android. Advanced Real-Time Rendering: Implementation of faster, more efficient real-time voice cloning.Liquidity Pool Expansion: Increase liquidity pools across decentralized exchanges." },
    ],
  },
  {
    id: 3,
    active: false,
    title: "Q2-Part-1 2024",
    lists: [
      { active: true, text: "Community Showcase: Monthly spotlight on exceptional projects and contributions.Governance Mechanism: Introduction of token-based governance.Strategic Partnerships: Announcement of collaborations with key industry players." },
    ],
  },

  {
    id: 4,
    active: false,
    title: "Q2-Part-2 2024",
    lists: [
      { active: true, text: "Mobile App Launch: Release of Vocalify mobile application for iOS and Android. Advanced Real-Time Rendering: Implementation of faster, more efficient real-time voice cloning.Liquidity Pool Expansion: Increase liquidity pools across decentralized exchanges." },
    ],
  },

  {
    id: 5,
    active: false,
    title: "Q3- 2024",
    lists: [
      { active: true, text: "Voice Customization Suite: Advanced tools for fine-tuning voice models.NFT Integration: Unique, tradable voice models enabled by blockchain.Global Expansion: Extend market reach to new geographical areas." },
    ],
  },

  {
    id: 6,
    active: false,
    title: "Future Outlook",
    lists: [
      { active: true, text: "Continuous Improvement: Ongoing updates based on user feedback and technological advancements. Enterprise Solutions: Customized voice cloning services for corporate clients. Community-Driven Initiatives: More opportunities for community members to influence the platform’s development." },
    ],
  },

  {
    id: 7,
    active: false,
    title: "Q4 2023",
    lists: [
      { active: true, text: "Beta Launch: Initial testing phase for core functionalities.Community Onboarding: Initiate forums and community engagement channels.Token Pre-Sale: Early investment opportunities for VCF await." },
    ],
  },
  // {
  //   id: 4,
  //   active: false,
  //   title: "Q2-Part-2 2024",
  //   lists: [
  //     { active: true, text: "Mobile App Launch: Release of Vocalify mobile application for iOS and Android. Advanced Real-Time Rendering: Implementation of faster, more efficient real-time voice cloning.Liquidity Pool Expansion: Increase liquidity pools across decentralized exchanges." },
  //   ],
  // },
  // {
  //   id: 5,
  //   active: false,
  //   title: "Q3- 2024",
  //   lists: [
  //     { active: true, text: "Voice Customization Suite: Advanced tools for fine-tuning voice models.NFT Integration: Unique, tradable voice models enabled by blockchain.Global Expansion: Extend market reach to new geographical areas." },
  //   ],
  // },
  // {
  //   id: 3,
  //   active: false,
  //   title: "season 3",
  //   lists: [
  //     { active: false, text: "Battle Practice Mode" },
  //     { active: false, text: "iOS Open Beta" },
  //     { active: false, text: "Land Creation & Building" },
  //     { active: false, text: "Land Creation & Building" },
  //   ],
  // },
];

const RoadMapArea = () => {
  const [isView, setIsView] = useState<boolean>(false);
  useTextAnimation(isView);

  const handleInViewChange = (inView: boolean) => {
    if (inView) {
      setIsView(true);
    }
  };


  return (
    <section
      className="roadMap__area roadMap-bg section-pt-150 section-pb-150"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="roadMap__inner">
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                  <div className="roadMap__content">
                    <h2 className="title">ROADMAP</h2>
                    <p>
                    Our roadmap is a living document that outlines the key milestones we aim to achieve as we continue to innovate and expand the Vocalify platform. We are committed to delivering exceptional value to our community, and this roadmap serves as our strategic blueprint for the journey ahead.
                    </p>
                    {/* <Link href="/contact" className="tg-btn-1 -btn-yellow"> */}
                      {/* <span>roadmap</span> */}
                    {/* </Link> */}
                  </div>
                  <div className="roadMap__img">
                    <Image
                      src={road_map}
                      className="tg-parallax"
                      data-scale="1.0"
                      data-orientation="down"
                      alt="roadMap__img" style={{height: "auto"}}
                    />
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                  <div className="roadMap__steps-wrap">
                    {road_map_lists.map((item) => (
                      <div
                        key={item.id}
                        className={`roadMap__steps-item ${item.active ? "active" : ""}`}
                      >
                        <h3 className="title">{item.title}</h3>
                        <InView
                          as="ul"
                          onChange={handleInViewChange} className="roadMap__list list-wrap">
                          {item.lists.map((l, i) => (
                            <li
                              key={i}
                              className={`${l.active ? "active" : ""} tg__animate-text style2`}
                            >
                              {l.text}
                            </li>
                          ))}
                        </InView>
                        <Image
                          src={road_map_step}
                          alt="img"
                          className="roadMap__steps-img"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMapArea;
