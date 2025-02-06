import React from "react";

const Loading = ({ isLoading }) => {
  return <div>{isLoading ? "Loading..." : null}</div>;
};

export default Loading;
