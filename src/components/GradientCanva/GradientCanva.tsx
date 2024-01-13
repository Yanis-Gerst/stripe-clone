import React, { useEffect, useRef } from "react";
import { Gradient } from "../../libs/Gradient";

const GradientCanva = () => {
  const gradientElt = useRef<HTMLCanvasElement>(null);
  const gradient: any = new Gradient();
  useEffect(() => {
    console.log("cc enft");
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div className="absolute inset-0 h-[30vh] diagonal-clip-path">
      {" "}
      <canvas id="gradient-canvas" data-transition-in ref={gradientElt} />
    </div>
  );
};

export default GradientCanva;
