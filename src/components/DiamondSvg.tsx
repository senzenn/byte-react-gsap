// DiamondSVG.tsx
import React from "react";

const DiamondSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    id="diamondShape"
    width="200"
    height="200"
    viewBox="0 0 200 200"
    {...props}
  >
    <polygon
      id="diamond"
      points="100,20 180,100 100,180 20,100"
      fill="white"
      stroke="none"
    />
  </svg>
);
export default DiamondSVG;
