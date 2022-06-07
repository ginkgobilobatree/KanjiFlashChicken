import React from "react";

export default function Cube() {
  const style = {
    container: {
        width: "200px",
        height: "200px",
        perspective: "800px"
    },
    cube: {
        width: "100%",
        height: "100%",
        position: "relative",
        transformStyle: "preserve-3d",
    },
    cubeSurface: {
        position: "absolute",
        width: "200px",
        height: "200px",
    },
    front: {
        backgroundColor: "#123456"
    },
    back: {
    },
    left: {},
    right: {},
    top: {},
    bottom: {},
  };

  return (
    <div className={style.container}>
      <div className={style.cube}>
        <div className={`${style.front} ${style.cubeSurface}`}></div> 
        <div className={`${style.back} ${style.cubeSurface}`}></div> 
        <div className={`${style.left} ${style.cubeSurface}`}></div> 
        <div className={`${style.right} ${style.cubeSurface}`}></div> 
        <div className={`${style.top} ${style.cubeSurface}`}></div>
        <div className={`${style.bottom} ${style.cubeSurface}`}></div> 
      </div>
    </div>
  );
}
