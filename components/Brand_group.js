import React from "react";
import Image from "next/image";

function Brand_group(props) {
  return (
    <div className={props.divclassname}>
      <Image src={props.imgsrc} layout="fill" objectFit="cover" />
      <video
        autoPlay
        loop
        playsInline
        className="hidden group-hover:inline rounded-lg object-cover"
      >
        <source src={props.vidsrc} type="video/mp4" />
      </video>
    </div>
  );
}

export default Brand_group;
