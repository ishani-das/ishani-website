import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/Contact.scss";
import "../assets/styles/Piano.scss";

// Custom arrow components
const CustomPrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      onClick={onClick}
      style={{ left: "-40px" }} // Adjust positioning
    >
      &#8592; {/* Left arrow symbol */}
    </div>
  );
};

const CustomNextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      onClick={onClick}
      style={{ right: "-40px" }} // Adjust positioning
    >
      &#8594; {/* Right arrow symbol */}
    </div>
  );
};

function Piano() {
  const videoUrls = [
    "https://www.youtube.com/embed/Ab7HO-MnvP0",
    "https://www.youtube.com/embed/iLCNpdvdKXU",
    "https://www.youtube.com/embed/yz2b1bT936k",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
  };

  return (
    // <div className="piano-container">
    //   <h2>Piano</h2>
    //   <Slider {...settings}>
    //     {videoUrls.map((url, index) => (
    //       <div key={index} className="video-slide">
    //         <iframe
    //           width="60%"
    //           height="350"
    //           src={url}
    //           title={`YouTube Video ${index + 1}`}
    //           frameBorder="0"
    //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //           allowFullScreen
    //         ></iframe>
    //       </div>
    //     ))}
    //   </Slider>
    // </div>

    <div id="piano-container">
      <div className="items-container">
        <div className="piano_wrapper">
          <h1>Piano</h1>
          {/* <p>Click on the button below to send me an email!</p> */}

          <Slider {...settings}>
            {videoUrls.map((url, index) => (
              <div key={index} className="video-slide">
                <iframe
                  width="60%"
                  height="350"
                  src={url}
                  title={`YouTube Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Piano;
