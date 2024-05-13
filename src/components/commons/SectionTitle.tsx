import React from "react";
import { useRouter } from "next/router";

interface IProps {
  title: string;
  linkUrl?: string;
}

const SectionTitle = (props: IProps) => {
  const { title, linkUrl } = props;

  const router = useRouter();

  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      {linkUrl && (
        <span className="temp_icon" onClick={() => router.push(linkUrl)} />
      )}
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }
        .container > h2.title {
          font-size: 16px;
          font-weight: 500;
          color: #303030;
        }
        .container > .temp_icon {
          position: relative;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          border: 3px solid #000;
        }
        .container > .temp_icon::before {
          content: "";
          position: absolute;
          width: 6px;
          height: 6px;
          border-right: 3px solid #000;
          border-top: 3px solid #000;
          transform: rotate(45deg);
          top: 5px;
          right: 6px;
        }
        @media (min-width: 768px) {
          .container {
            margin-bottom: 12px;
          }
          .container > h2.title {
            font-size: 20px;
          }
        }
        @media (min-width: 1200px) {
          .container {
            margin-bottom: 20px;
          }
          .container > h2.title {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionTitle;
