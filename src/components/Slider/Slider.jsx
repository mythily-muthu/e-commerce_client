import { EastOutlined, WestOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Slider.scss";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    "https://images.unsplash.com/photo-1444920275954-9dddec6b714e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];

  const prevSlide = () => {
    // test 1 : previous slide
    // test 2: if the act. image is first image, go to the last slide
    if (currentSlide === 0) {
      setCurrentSlide(data.length - 1);
    } else setCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    // setCurrentSlide(currentSlide + 1);
    // test 1 : forward direction
    // test 2 : if i press next button while image is last go to the first
    if (currentSlide === data.length - 1) {
      setCurrentSlide(0);
    } else setCurrentSlide(currentSlide + 1);
  };

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  //   }, 2500);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [currentSlide]);

  const handleActiveImage = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
          width: `${data.length * 100}vw`,
        }}
      >
        {data.map((image, index) => {
          return <img key={index} src={image} alt="" />;
        })}
      </div>
      <div className="icons">
        <div className="image-slide-icons-dots-container">
          <div className="icon" onClick={prevSlide}>
            <WestOutlined />
          </div>
          <div className="icon" onClick={nextSlide}>
            <EastOutlined />
          </div>
        </div>
        <div className="slideImageDotContainer">
          {data.map((image, index) => {
            return (
              <div
                key={index}
                onClick={() => handleActiveImage(index)}
                style={{
                  backgroundColor:
                    currentSlide === index
                      ? "rgb(244, 179, 228)"
                      : " transparent",
                }}
                className="sliderImageDot"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
