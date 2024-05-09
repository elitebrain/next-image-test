import React, { useEffect, useState } from "react";
import axios from "axios";
import ScrollContainer from "react-indiana-drag-scroll";

import {
  CLOUDFRONT_VOD_DESTINATION_PREFIX,
  IMAGE_SERVER,
  IVideo,
} from "@/components/Main";
import Gnb from "@/components/Gnb";
import { VideoThumbnail } from "@/components/NextImage";

const NextImageIndiana = () => {
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
        <ScrollContainer
          className="ScrollContainer horizontal"
          horizontal={true}
          nativeMobileScroll
        >
          {videoList.map((video: IVideo, idx: number) => (
            <VideoThumbnail
              key={idx}
              thumbnail={video.thumbnail}
            ></VideoThumbnail>
          ))}
        </ScrollContainer>
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

export default NextImageIndiana;
