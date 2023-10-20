import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Olvera from "../../Images/Olvera.svg";
import { Button } from "@mui/material";
import WindowSize from "../WindowSize";

function Navbar() {
  const { isPhoneScreen } = WindowSize();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px",
        flexWrap: "wrap",
      }}
    >
      <div>
        <img src={Olvera} alt="Logo" style={{ width: "100px" }} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1 }}>
          <Link
            to="/"
            style={{
              margin: "0 4px",
              color: "#1C1C1C",
              fontFamily: "Montserrat Alternates",
              fontSize: isPhoneScreen ? "12px" : "16px",
              fontWeight: 800,
              lineHeight: "24px",
              letterSpacing: "0.96px",
              textTransform: "uppercase",
              textDecoration: "none",
              width: "100%",
              display: "block",
              textAlign: "center",
            }}
          >
            Home
          </Link>
        </div>
        <div style={{ flex: 1 }}>
          <Link
            to="/about"
            style={{
              margin: "0 4px",
              color: "#1C1C1C",
              fontFamily: "Montserrat Alternates",
              fontSize: isPhoneScreen ? "12px" : "16px",
              fontWeight: 800,
              lineHeight: "24px",
              letterSpacing: "0.96px",
              textTransform: "uppercase",
              textDecoration: "none",
              width: "100%",
              display: "block",
              textAlign: "center",
            }}
          >
            AboutUs
          </Link>
        </div>
        <div style={{ flex: 1 }}>
          <Link
            to="/services"
            style={{
              margin: "0 4px",
              color: "#1C1C1C",
              fontFamily: "Montserrat Alternates",
              fontSize: isPhoneScreen ? "12px" : "16px",
              fontWeight: 800,
              lineHeight: "24px",
              letterSpacing: "0.96px",
              textTransform: "uppercase",
              textDecoration: "none",
              width: "100%",
              display: "block",
              textAlign: "center",
            }}
          >
           Services
          </Link>
        </div>
        <div style={{ flex: 1 }}>
          <Link
            to="/experience"
            style={{
              margin: "0 4px",
              color: "#1C1C1C",
              fontFamily: "Montserrat Alternates",
              fontSize: isPhoneScreen ? "12px" : "16px",
              fontWeight: 800,
              lineHeight: "24px",
              letterSpacing: "0.96px",
              textTransform: "uppercase",
              textDecoration: "none",
              width: "100%",
              display: "block",
              textAlign: "center",
            }}
          >
           Experience
          </Link>
        </div>
        <div style={{ flex: 1 }}>
          <Link
            to="/resources"
            style={{
              margin: "0 4px",
              color: "#1C1C1C",
              fontFamily: "Montserrat Alternates",
              fontSize: isPhoneScreen ? "12px" : "16px",
              fontWeight: 800,
              lineHeight: "24px",
              letterSpacing: "0.96px",
              textTransform: "uppercase",
              textDecoration: "none",
              width: "100%",
              display: "block",
              textAlign: "center",
            }}
          >
            Resources
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          style={{
            padding: "10px 20px",
            background: "#F837B7",
            fontFamily: "Oswald",
            color: "#FFF",
            borderRadius: "1000px",
            textDecoration: "none",
          }}
        >
          Contact Us
        </Button>
        <div style={{ display: "flex", marginLeft: "20px" }}>
          <FaFacebook style={{ fontSize: "24px", marginRight: "10px" }} />
          <FaInstagram style={{ fontSize: "24px", marginRight: "10px" }} />
          <FaLinkedin style={{ fontSize: "24px" }} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
