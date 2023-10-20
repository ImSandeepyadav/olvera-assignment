import React, { useEffect, useState } from "react";
import bgOlvera from "../../Images/bg-olvera.svg";
import { Button, Typography, debounce } from "@mui/material";
import Navbar from "../Navbar";
import AboutUs from "../AboutUs";
import Services from "../Services";
import Guides from "../Guides";
import Careers from "../Careers";
import CardCarousel from "../CardCarousel";
import Footer from "../Footer";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    const debouncedHandleResize = debounce(handleResize, 100); // debounce function to limit resize events

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "#C2278E",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          style={{
            color: "rgba(255, 255, 255, 0.75)",
            fontFamily: "Montserrat Alternates",
            fontSize: isMobile ? "10px" : "16px",
            textAlign: "center",
            fontWeight: 800,
            letterSpacing: "0.96px",
            textTransform: "uppercase",
            position: "relative",
            zIndex: 1,
          }}
        >
          Turning Uncertainty Into your advantage
        </Typography>
      </div>
      <div>
        <Navbar />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: isMobile ? "100%" : "800px",
          background: `url(${bgOlvera})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          style={{
            color: "#FFF",
            fontFamily: "Montserrat",
            fontSize: isMobile ? "40px" : "72px",
            fontWeight: 600,
            lineHeight: "130%",
            marginBottom: "10px",
            marginTop: "18%",
            marginLeft: isMobile ? "10%" : "20%",
          }}
        >
          Start your story <br /> with{" "}
          <span
            style={{
              color: "#FFF",
              fontFamily: "Montserrat",
              fontSize: isMobile ? "40px" : "60px",
              fontWeight: 700,
              lineHeight: "130%",
            }}
          >
            Olvera
          </span>
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: isMobile? "5%" : "20%",
          }}
        >
           <Button
          style={{
            width: isMobile ? "" : "10%",
            padding: "10px 20px",
            background: "#F837B7",
            fontFamily: 'Oswald',
            color: "#fff",
            borderRadius: "1000px",
            textDecoration: "none",
          }}
        >
          Contact Us
        </Button>
        </div>
        <div style={{ marginTop: "250px" }}>
          <AboutUs />
        </div>
        <div style={{ marginTop: "50px" }}>
          <Services />
        </div>
        <div>
          <Guides />
        </div>
        <div style={{ marginTop: "750px" }}>
          <Careers />
        </div>
        <div style={{ marginTop: "50px" }}>
          <CardCarousel />
        </div>
        <div style={{ marginTop: "50px" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
