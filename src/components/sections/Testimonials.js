import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/avatar-1.svg",
    userName: "Shaheer Shahzad",
    subtitle: "CEO Software Solutions",
    review:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    avatar: "images/avatar-2.svg",
    userName: "Ejaz Khan",
    subtitle: "LotVector Founder",
    review:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 3,
    avatar: "images/avatar-3.svg",
    userName: "Mark Randell",
    subtitle: "Sr. Product Designer",
    review:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Clients & Review" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
