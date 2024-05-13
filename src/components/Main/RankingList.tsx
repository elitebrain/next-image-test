import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import SectionTitle from "@/components/commons/SectionTitle";
import { IRanking } from "@/interface/Main.interface";
import RankingItem from "@/components/Main/RankingItem";

interface IProps {
  rankingList: IRanking[];
}

const RankingList = (props: IProps) => {
  const { rankingList } = props;
  return (
    <section>
      <SectionTitle
        title="2024 모두의 창업 드리머 랭킹"
        linkUrl="https://m.khanteum.com/ranking"
      />
      <ScrollContainer
        className="ScrollContainer horizontal"
        horizontal={true}
        nativeMobileScroll
      >
        {rankingList.map((ranking) => (
          <RankingItem
            key={ranking.user_no}
            user_no={ranking.user_no}
            user_photo={ranking.user_photo}
            nickname={ranking.nickname}
          />
        ))}
      </ScrollContainer>
    </section>
  );
};

export default RankingList;
