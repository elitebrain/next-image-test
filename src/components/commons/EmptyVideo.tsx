import React from "react";

const EmptyVideo = () => {
  return (
    <div className="empty_video">
      등록된 영상이 없습니다.
      <style jsx>{`
        .empty_video {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 210px;
          font-size: 16px;
          color: #cdcdcd;
        }
      `}</style>
    </div>
  );
};

export default EmptyVideo;
