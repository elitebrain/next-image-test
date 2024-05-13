import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { convertImage } from "@/utils/functions";
import { IRanking } from "@/interface/Main.interface";

const RankingItem = (props: IRanking) => {
  const { user_no, user_photo, nickname } = props;

  const router = useRouter();

  return (
    <div
      className="container"
      onClick={() =>
        router.push(`https://m.khanteum.com/user?user_no=${user_no}`)
      }
    >
      <Image
        src={convertImage({ url: user_photo, isOriginal: true })}
        width={100}
        height={100}
        className="user_photo"
        style={{
          objectFit: "cover",
          borderRadius: "50%",
          boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 6px",
        }}
        alt={`ranking_${user_no}`}
      />
      <p className="nickname">{nickname}</p>
      <style jsx>{`
        .container {
          display: inline-block;
          vertical-align: top;
          margin-right: 20px;
        }
        .container:hover {
          cursor: pointer;
        }
        .container > .user_photo {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
        .container > .nickname {
          font-size: 16px;
          font-weight: 700;
          text-align: center;
          color: #464646;
        }
      `}</style>
    </div>
  );
};

export default RankingItem;
