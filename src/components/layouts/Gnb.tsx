import React from "react";

const Gnb = () => {
  return (
    <nav className="container">
      <ul>
        <li>인덱스</li>
        <li>업로드</li>
        <li>홈</li>
        <li>검색</li>
        <li>마이</li>
      </ul>
      <style jsx>{`
        .container {
          height: 50px;
          width: 100%;
        }
        .container > ul {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style-type: normal;
          height: 100%;
        }
        .container > ul > li {
          display: inline-block;
          width: 20%;
          text-align: center;
          font-size: 14px;
        }
      `}</style>
    </nav>
  );
};

export default Gnb;
