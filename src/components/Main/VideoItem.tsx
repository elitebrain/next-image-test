import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { IVideo } from "@/interface/Main.interface";
import { convertImage, numberWithCommas } from "@/utils/functions";

interface IVideoItem extends IVideo {
  lastVideoRef: any;
}

const VideoItem = (props: IVideoItem) => {
  const {
    lastVideoRef,
    category_level2_no,
    category_level3_no,
    video_no,
    thumbnail,
    count_like,
    count_view,
  } = props;

  const router = useRouter();

  return (
    <div
      className="container"
      ref={lastVideoRef}
      onClick={() =>
        router.push(
          `https://m.khanteum.com/videos?type=main&season=2024&currentVideoNo=${video_no}&category2No=${category_level2_no}&category3No=${category_level3_no}`
        )
      }
    >
      <Image
        src={convertImage({ url: thumbnail, isOriginal: true })}
        width={118}
        height={210}
        alt={`video_${video_no}`}
        style={{ objectFit: "cover" }}
      />
      <div className="cover">
        <div className="count_wrapper">
          <p className="count_value">{numberWithCommas(count_like)}</p>
          <p className="count_value">{numberWithCommas(count_view)}</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          position: relative;
          display: inline-block;
          width: 118px;
          height: 210px;
          border-radius: 8px;
          overflow: hidden;
          margin-right: 12px;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.18);
        }
        .container:hover {
          cursor: pointer;
        }
        .cover {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            rgba(3, 3, 3, 0) 47.92%,
            rgba(3, 3, 3, 0.5) 100%
          );
        }
        .cover > .count_wrapper {
          position: absolute;
          left: 10px;
          bottom: 12px;
        }
        .cover > .count_wrapper > p.count_value {
          font-size: 12px;
          font-weight: 300;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default VideoItem;
