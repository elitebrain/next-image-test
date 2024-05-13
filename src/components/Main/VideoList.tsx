import React, { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import axios from "axios";

import { IVideo } from "@/interface/Main.interface";
import SectionTitle from "@/components/commons/SectionTitle";
import VideoItem from "@/components/Main/VideoItem";
import EmptyVideo from "@/components/commons/EmptyVideo";
import { VIDEO_LIMIT } from "@/utils/constant";
import useIntersect from "@/hooks/useIntersect";
import useMoreVideoList from "@/hooks/useMoreVideoList";

interface IProps {
  category_level2_no: number;
  title: string;
  linkUrl: string;
  videoList: IVideo[];
}

const VideoList = (props: IProps) => {
  const { category_level2_no, title, linkUrl } = props;

  const { data, isLoading, size, setSize } = useMoreVideoList({
    category_level2_no,
  });
  const videoList = data ? [].concat(...data) : [];
  const isVideoEmpty = data?.[0]?.length === 0;
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isReachingEnd =
    isVideoEmpty || (data && data[data.length - 1]?.length < VIDEO_LIMIT);

  /**
   * 영상 목록 추가 조회 callback 함수
   */
  const moreCategoryVideo = async () => {
    if (!isLoadingMore && !isReachingEnd) {
      setSize((prev) => prev + 1);
    }
  };

  const lastVideoRef = useIntersect(moreCategoryVideo);

  return (
    <section>
      <SectionTitle title={title} linkUrl={linkUrl} />
      <ScrollContainer
        className="ScrollContainer horizontal"
        horizontal={true}
        nativeMobileScroll
      >
        {videoList.length === 0 ? (
          <EmptyVideo />
        ) : (
          videoList.map((video, i) => (
            <VideoItem
              key={video.video_no}
              video_no={video.video_no}
              category_level2_no={video.category_level2_no}
              category_level3_no={video.category_level3_no}
              thumbnail={video.thumbnail}
              count_like={video.count_like}
              count_view={video.count_view}
              lastVideoRef={i + 1 === videoList.length ? lastVideoRef : null}
            />
          ))
        )}
      </ScrollContainer>
      <style jsx>{`
        section {
          margin-bottom: 20px;
        }
      `}</style>
    </section>
  );
};

export default VideoList;
