import React, { useRef } from "react";
import classes from "./Widget4.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { FaClock, FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Widget4({ BlinkItData }) {
  const sliderRef = useRef(null);

  const showingWidget = BlinkItData.map((item, index) => (
    <div key={index} className={classes.widget4}>
      <div className={classes.widget4Heading}>
        <h2>{item.name}</h2>
      </div>
      <div className={classes.widget4Items}>
        <Swiper
          slidesPerView={5.5}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className={classes.slider}
        >
          {item.data.map((val, index) => (
            <SwiperSlide key={index} className={classes.swiperSlide}>
              <div className={classes.widget4Item}>
                <div className={classes.widget4ItemPic}>
                  <img src={val.itemImg} alt={val.itemName} />
                </div>
                <div className={classes.widget4ItemInfo}>
                  <div className={classes.time}>
                    <FaClock /> {val.itemDuration}
                  </div>
                  <p className={classes.title}>{val.itemName}</p>
                  <p className={classes.itemInfo}>{val.itemInfo}</p>
                  <div className={classes.itemBtn}>
                    <p>{val.itemPrice}</p>
                    <button className={classes.addtocartBtn}>ADD</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className={classes.widget4ArrowBtn}>
          <button className={classes.widget4LeftArrow}>
            <FaArrowLeft />
          </button>
          <button className={classes.widget4RightArrow}>
            <FaArrowRight />
          </button>
        </div> */}
      </div>
    </div>
  ));

  return <div className={classes.widget4Container}>{showingWidget}</div>;
}

export default Widget4;
