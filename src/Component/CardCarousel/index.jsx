import React, { useState } from "react";
import { Typography, Card, CardContent } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import WindowSize from "../WindowSize";

function CardCarousel() {
  const { isPhoneScreen } = WindowSize();

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (id) => {
    setHoveredCard(id);
  };
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      date: "October 1, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 2,
      name: "John Doe",
      date: "October 1, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 3,
      name: "John Doe",
      date: "October 1, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 4,
      name: "John Doe",
      date: "October 1, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 5,
      name: "John Doe",
      date: "October 1, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];
  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  //   { width: 768, itemsToShow: 3 },
  //   { width: 1200, itemsToShow: 4 },
  // ];

  return (
    <div>
      {isPhoneScreen ? (
        <>
          <div style={{ }}>
            <Typography
              style={{
                color: "#000",
                fontFamily: "Plus Jakarta Sans",
                fontSize: "40px",
                fontWeight: 700,
                lineHeight: "42px",
                textAlign: "center"
              }}
            >
              What our clients say about us
            </Typography>
          </div>
          <div style={{ marginTop: "50px",}}>
            <Carousel showArrows={true} showThumbs={false}>
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  style={{
                    width: "300px",
                    margin: "0 10px",
                    cursor: "pointer",
                    backgroundColor: "#C2278E",
                    fill: hoveredCard === testimonial.id ? "#C2278E" : "#fff",
                    filter:
                      hoveredCard === testimonial.id
                        ? "drop-shadow(114px 75px 62px rgba(19, 95, 132, 0.13))"
                        : "none",
                  }}
                  onMouseEnter={() => handleCardHover(testimonial.id)}
                  onMouseLeave={() => handleCardHover(null)}
                >
                  <CardContent>
                    <Typography
                      style={{
                        // color: '#FFF',
                        fontFamily: "Heebo",
                        fontSize: "20px",
                        fontWeight: 400,
                        lineHeight: "150%",
                      }}
                    >
                      {testimonial.content}
                    </Typography>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {/* Image */}
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#ccc",
                          marginRight: "10px",
                        }}
                      ></div>
                      {/* Details */}
                      <div>
                        <Typography
                          style={{
                            // color: '#FFF',
                            fontFamily: "Poppins",
                            fontSize: "18px",
                            fontWeight: 700,
                            lineHeight: "140%",
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          style={{
                            color: "#C5E9FB",
                            fontFamily: "Poppins",
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "140%",
                          }}
                        >
                          {testimonial.date}
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Carousel>
          </div>
        </>
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              style={{
                color: "#000",
                fontFamily: "Plus Jakarta Sans",
                fontSize: "45px",
                fontWeight: 700,
                lineHeight: "42px",
              }}
            >
              What our clients say about us
            </Typography>
          </div>
          <div style={{ marginTop: "50px", width: "20%",marginLeft: '40%' }}>
            <Carousel showArrows={true} showThumbs={false}>
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  style={{
                    width: "300px",
                    margin: "0 10px",
                    cursor: "pointer",
                    backgroundColor: "#C2278E",
                    fill: hoveredCard === testimonial.id ? "#C2278E" : "#fff",
                    filter:
                      hoveredCard === testimonial.id
                        ? "drop-shadow(114px 75px 62px rgba(19, 95, 132, 0.13))"
                        : "none",
                  }}
                  onMouseEnter={() => handleCardHover(testimonial.id)}
                  onMouseLeave={() => handleCardHover(null)}
                >
                  <CardContent>
                    <Typography
                      style={{
                        // color: '#FFF',
                        fontFamily: "Heebo",
                        fontSize: "20px",
                        fontWeight: 400,
                        lineHeight: "150%",
                      }}
                    >
                      {testimonial.content}
                    </Typography>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {/* Image */}
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#ccc",
                          marginRight: "10px",
                          borderRadius: "30px",
                        }}
                      ></div>
                      {/* Details */}
                      <div>
                        <Typography
                          style={{
                            // color: '#FFF',
                            fontFamily: "Poppins",
                            fontSize: "18px",
                            fontWeight: 700,
                            lineHeight: "140%",
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          style={{
                            color: "#C5E9FB",
                            fontFamily: "Poppins",
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "140%",
                          }}
                        >
                          {testimonial.date}
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Carousel>
          </div>
        </>
      )}
    </div>
  );
}

// const myArrow = ({ type, onClick, isEdge }) => {
//   const pointer = type === "PREV" ? <BsChevronLeft /> : <BsChevronRight />;
//   return (
//     <button
//       onClick={onClick}
//       disabled={isEdge}
//       style={{
//         backgroundColor: "transparent",
//         border: "none",
//         cursor: "pointer",
//       }}
//     >
//       {pointer}
//     </button>
//   );
// };

export default CardCarousel;
