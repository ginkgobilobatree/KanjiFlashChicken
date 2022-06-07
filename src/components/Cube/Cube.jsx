import React from "react";

export default function Cube() {
  const style = {
    container: "w-[20rem] h-[20rem]",
    cube: "w-full h-full relative",
    cubeSurface: "absolute w-[20rem] h-[20rem] bg-red",
    front: "",
    back: "",
    left: "",
    right: "",
    top: "",
    bottom: "",
  };

  return (
    <div className={style.container} style={{perspective: "60rem"}}>
      <div className={style.cube} style={{transformStyle: "preserve-3d"}}>
        <div className={style.cubeSurface} style={{transform: "rotateY(  0deg) translateZ(100px)"}}>front</div> 
        <div className={style.cubeSurface} style={{transform: "rotateY(  90deg) translateZ(100px)"}}>back</div> 
        <div className={style.cubeSurface} style={{transform: "rotateY(  180deg) translateZ(100px)"}}>right</div> 
        <div className={style.cubeSurface} style={{transform: "rotateY(  -90deg) translateZ(100px)"}}>left</div> 
        <div className={style.cubeSurface} style={{transform: "rotateX(  90deg) translateZ(100px)"}}>top</div>
        <div className={style.cubeSurface} style={{transform: "rotateX(  -90deg) translateZ(100px)"}}>bottom</div> 
      </div>
    </div>
  );
}
