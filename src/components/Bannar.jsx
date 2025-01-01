import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

let BannerData = [
  {
    id: 1,
    name: "",
    img: "../images/b1.jpg",
  },
  {
    id: 2,
    name: "",
    img: "../images/b2.avif",
  },
  {
    id: 3,
    name: "",
    img: "../images/b3.avif",
  },
  {
    id: 4,
    name: "",
    img: "../images/b4.jpg",
  },
  {
    id: 5,
    name: "",
    img: "../images/b5.webp",
  },
];

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const Bannar = () => {
  return (
    <div>
      <Slider {...settings}>
        {BannerData.map((banner) => (
          <div>
            <img className="w-full h-[450px]" src={banner.img} alt={banner.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Bannar;
