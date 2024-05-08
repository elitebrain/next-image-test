import React, { useEffect, useState } from "react";
import axios from "axios";
import Gnb from "@/components/Gnb";

const IMAGE_SERVER = "https://image.khanteum.com";
const CLOUDFRONT_VOD_DESTINATION_PREFIX =
  "https://d3oh3emdg2ecln.cloudfront.net";

const VideoThumbnail = ({ video }) => (
  <div className="thumbnail">
    <style jsx>{`
      .thumbnail {
        display: inline-block;
        margin: 10px;
        width: 152.5px;
        height: 210px;
        background: center / cover
          url(${IMAGE_SERVER}?file=${CLOUDFRONT_VOD_DESTINATION_PREFIX}/${video.thumbnail}&size=304x420);
      }
    `}</style>
  </div>
);

const Main = () => {
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
    <>
      <Gnb />
      <div className="container">
        {videoList.map((video) => (
          <VideoThumbnail key={video.video_no} video={video}></VideoThumbnail>
        ))}
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