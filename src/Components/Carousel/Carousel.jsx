import React from "react";
import { Carousel } from "react-responsive-carousel";
import img from "./images/data"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import styles from "./carousel.module.css";
function CustomCarousel() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        stopOnHover={false}
        interval={5000}
      >
        {img.map((imageitem) => {
          return <img src={imageitem} />;
        })}
      </Carousel>
      <div className={styles["fade-footer"]}></div>
    </div>
  );
}
export default CustomCarousel;
