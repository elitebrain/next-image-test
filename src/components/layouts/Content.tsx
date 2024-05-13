import React from "react";

interface IContent {
  children: any;
}

const Content = (props: IContent) => {
  const { children } = props;
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          height: calc(100% - 96px);
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

export default Content;
