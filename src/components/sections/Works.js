import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "Everything",
  },
  {
    id: 2,
    text: "Design",
  },
  {
    id: 5,
    text: "Development",
  },
];

const allData = [
  {
    id: 1,
    title: "Dental Ecommerce App",
    category: "design",
    image: "newimages/Qdent.png",
    popupLink: ["newimages/Qdent.png"],
  },
  {
    id: 2,
    title: "BloodDonor App",
    category: "design",
    image: "newimages/blooddonor.jpg",
    popupLink: [
      "newimages/blooddonor.jpg",
    ],
  },
  {
    id: 3,
    title: "Online News App",
    category: "design",
    image: "newimages/NewsappDesign.jpg",
    popupLink: ["newimages/NewsappDesign.jpg"],
  },
  {
    id: 4,
    title: "LotVector Web & App",
    category: "design",
    image: "images/works/4.svg",
    popupLink: [
   
    ],
  },
  {
    id: 5,
    title: "Social Network App",
    category: "design",
    image: "newimages/socialnetwork/SN1.png",
    popupLink: ["newimages/socialnetwork/SN1.png"],
  },
  {
    id: 6,
    title: "GoldSpot",
    category: "design",
    image: "newimages/goldspot/Goldspot.jpg",
    popupLink: [
      "newimages/goldspot/Goldspot.jpg",
      "newimages/goldspot/Frame 1.jpg",
    "newimages/goldspot/Group 81.jpg",
    "newimages/goldspot/iPhone 12 Pro.jpg",
    "newimages/goldspot/iPhone 13 Pro.jpg",
    "newimages/goldspot/iPhone 13.jpg",

  ],
  },
  {
    id: 7,
    title: "Event Management Notifier",
    category: "design",
    image: "newimages/BuzzMain.png",
    popupLink: ["newimages/BuzzMain.png","newimages/buzz.png"],
  },
  {
    id: 8,
    title: "Rate me",
    category: "design",
    image: "images/works/1.svg",
    popupLink: ["images/works/1.svg"],
  },
  {
    id: 9,
    title: "GoldSpot in React Native",
    category: "development",
    image: "images/works/4.svg",
    popupLink: ["images/works/4.svg"],
  },
  {
    id: 10,
    title: "Online News Application",
    category: "development",
    image: "images/works/6.svg",
    link: "https://dribbble.com",
  },
  {
    id: 11,
    title: "Social Network",
    category: "development",
    image: "images/works/3.svg",
    link: "https://pinterest.com",
  },
  {
    id: 12,
    title: "Oboarding Screens",
    category: "design",
    image: "newimages/onboarding/thumbnail.png",
    popupLink: ["newimages/onboarding/record.mov "],
  },
  {
    id: 13,
    title: "Pinflex",
    category: "development",
    image: "newimages/pinflex/Screenshot 2022-10-09 at 7.22.13 PM.png",
    link: "https://pinflex.xyz",
  },
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        console.log("they are same");
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Recent Works" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "No more items"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Load more
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
