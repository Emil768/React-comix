import React from "react";
import ContentLoader from "react-content-loader";
function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={260}
      height={545}
      viewBox="30 0 260 545"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="-1" y="16" rx="0" ry="0" width="260" height="370" />
      <rect x="5" y="562" rx="0" ry="0" width="260" height="34" />
      <rect x="1" y="403" rx="0" ry="0" width="260" height="40" />
      <rect x="80" y="458" rx="0" ry="0" width="128" height="30" />
      <rect x="4" y="498" rx="0" ry="0" width="260" height="40" />
    </ContentLoader>
  );
}

export default LoadingBlock;
