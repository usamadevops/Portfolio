import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/avatar-1.svg",
    userName:  "Sardar Yousaf MD",
    subtitle: "UX Design Project",
    review:
      "Working with Usama was a game-changer for our UX design. Their attention to detail and creativity exceeded our expectations. Highly recommend!",
  },
  {
    id: 2,
    avatar: "images/avatar-2.svg",
    userName: "Mark R.",
    subtitle: "React Native App Development",
    review:
      "Impressed with Usama's expertise in React Native. Our app turned out flawless. A reliable developer, highly recommended!",
  },
  {
    id: 3,
    avatar: "images/avatar-3.svg",
    userName:  "Emily S",
    subtitle: "UI Design Consultation",
    review:
      "Collaborating with Usama was eye-opening. Their design recommendations greatly improved user engagement. Top-notch UI expertise!",
  },
  {
    id: 4,
    avatar: "images/avatar-3.svg",
    userName:  "David L",
    subtitle: "React Native App Development",
    review:
      "Usama is a skilled and reliable React Native developer. They delivered a flawless app on time. Highly recommended!",
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
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
