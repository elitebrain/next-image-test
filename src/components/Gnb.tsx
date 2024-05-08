import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Gnb = () => {
  const router = useRouter();

  return (
    <div className="container">
      <Link href="/">
        <span
          className={`link-item${router.pathname === "/" ? " active" : ""}`}
        >
          Home
        </span>
      </Link>
      <Link href="/next-image">
        <span
          className={`link-item${
            router.pathname === "/next-image" ? " active" : ""
          }`}
        >
          NextImage
        </span>
      </Link>
      <style jsx>{`
        .container {
          margin: 30px auto;
        }
        .link-item {
          display: inline-block;
          width: 100px;
          line-height: 40px;
          text-align: center;
          border-bottom: 2px solid #bbb;
          color: #bbb;
        }
        .link-item.active {
          border-color: #fff;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Gnb;
