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
      <Link href="/next-image-indiana">
        <span
          className={`link-item${
            router.pathname === "/next-image-indiana" ? " active" : ""
          }`}
        >
          NextImageIndiana
        </span>
      </Link>
      <style jsx>{`
        .container {
          margin: 30px auto;
        }
        .link-item {
          display: inline-block;
          line-height: 40px;
          text-align: center;
          border-bottom: 2px solid #bbb;
          color: #bbb;
          padding-inline: 12px;
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
