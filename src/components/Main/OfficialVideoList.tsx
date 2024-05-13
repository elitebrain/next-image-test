import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import SectionTitle from "@/components/commons/SectionTitle";
import { IVideo } from "@/interface/Main.interface";
import OfficialVideoItem from "@/components/Main/OfficialVideoItem";

interface IProps {
  officialVideoList: IVideo[];
}

const OfficialVideoList = (props: IProps) => {
  const { officialVideoList } = props;

  return (
    <section>
      <SectionTitle title="오피셜 영상" />
      <ScrollContainer
        className="ScrollContainer horizontal"
        horizontal={true}
        nativeMobileScroll
      >
        {officialVideoList.map((video) => (
          <OfficialVideoItem
            key={video.video_no}
            video_no={video.video_no}
            thumbnail={video.thumbnail}
            count_like={video.count_like}
            count_view={video.count_view}
          />
        ))}
      </ScrollContainer>
    </section>
  );
};

export default OfficialVideoList;
