import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

import { IBanner } from "@/components/Main/index";
import { convertImage } from "@/utils/functions";

interface IProps {
  bannerList: IBanner[];
}

const Banner = (props: IProps) => {
  const { bannerList } = props;
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="container">
      <Swiper
        slidesPerView={1.1}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        loop={true}
      >
        {bannerList.map((banner) => (
          <SwiperSlide key={banner.banner_no} style={{ paddingInline: "50px" }}>
            <div className="banner_wrapper">
              <Image
                src={convertImage({ url: banner.banner_url, isOriginal: true })}
                className="banner"
                alt={`banner_${banner.banner_no}`}
                fill
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent} className="left-time"></span>
        </div>
      </Swiper>
      <style jsx>{`
        .container {
          padding-bottom: 50px;
        }
        .banner_wrapper {
          width: 100%;
          height: 398px;
          border-radius: 20px;
          overflow: hidden;
        }
        .autoplay-progress {
          position: absolute;
          right: 16px;
          bottom: 0px;
          z-index: 10;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #007aff;
          background: #fff;
          border-radius: 50%;
          box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 6px;
        }

        .autoplay-progress svg {
          --progress: 0;
          position: absolute;
          left: 0;
          top: 0px;
          z-index: 10;
          width: 100%;
          height: 100%;
          stroke-width: 4px;
          stroke: #007aff;
          fill: none;
          stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
          stroke-dasharray: 125.6;
          transform: rotate(-90deg);
        }
        .left-time {
          font-size: 14px;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default Banner;
