import React from "react";
import Image from "next/image";
import Test from "@/assets/welcome_img.webp";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="w-full">
        <Image
          src={Test}
          alt="test-banner"
          rel="preload"
          quality={100}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Banner;
