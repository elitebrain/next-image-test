import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Gnb from "@/components/Gnb";
import {
  CLOUDFRONT_VOD_DESTINATION_PREFIX,
  IMAGE_SERVER,
  IVideo,
} from "@/components/Main";

export const VideoThumbnail = ({ thumbnail }: { thumbnail: string }) => {
  return (
    <Image
      src={`${IMAGE_SERVER}?file=${CLOUDFRONT_VOD_DESTINATION_PREFIX}/${thumbnail}&size=304x420`}
      width={152.5}
      height={210}
      style={{ margin: "10px", borderRadius: "8px" }}
      alt={`dreamer_${thumbnail}`}
    />
  );
};

const NextImage = () => {
  const [videoList, setVideoList] = useState([]);

  const getVideoList = async () => {
    const { data } = await axios.get(
      "https://api.khanteum.com/api/v2/category/video-list?categoryLevel2No=16&orderBy=created_at"
    );
    setVideoList(data);
  };

  useEffect(() => {
    getVideoList();
  }, []);

  return (
    <div className="main">
      <Gnb />
      <div className="container">
        {videoList.map((video: IVideo, idx: number) => (
          <VideoThumbnail
            key={idx}
            thumbnail={video.thumbnail}
          ></VideoThumbnail>
        ))}
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 6rem;
        }
        .container {
          max-width: 517.5px;
        }
      `}</style>
    </div>
  );
};

export default NextImage;
