import React, { useEffect, useState } from "react";
import axios from "axios";
import ScrollContainer from "react-indiana-drag-scroll";

import Gnb from "@/components/Gnb";

export const IMAGE_SERVER = "https://image.khanteum.com";
export const CLOUDFRONT_VOD_DESTINATION_PREFIX =
  "https://d3oh3emdg2ecln.cloudfront.net";

export interface IVideo {
  video_no: number;
  category_level2_no: number;
  count_like: number;
  count_view: number;
  thumbnail: string;
}
const VideoThumbnail = ({ thumbnail }: { thumbnail: string }) => {
  return (
    <div className="thumbnail">
      <style jsx>{`
        .thumbnail {
          display: inline-block;
          margin: 10px;
          width: 152.5px;
          height: 210px;
          border-radius: 8px;
          background: center / cover
            url(${IMAGE_SERVER}?file=${CLOUDFRONT_VOD_DESTINATION_PREFIX}/${thumbnail}&size=304x420);
        }
      `}</style>
    </div>
  );
};

const Main = () => {
  const [videoList, setVideoList] = useState<IVideo[]>([]);

  const getVideoList = async () => {
    const { data } = await axios.get(
      "https://api.khanteum.com/api/v2/category/video-list?categoryLevel2No=16&orderBy=created_at"
    );
    setVideoList(data);
  };

  useEffect(() => {
    getVideoList();
  }, []);
  console.log(videoList);
  return (
    <>
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
        <style jsx>{`
          .container {
            max-width: 517.5px;
          }
        `}</style>
      </div>
    </>
  );
};

export default Main;
