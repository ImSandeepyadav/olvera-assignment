import React from "react";
import { Button, Typography } from "@mui/material";
import olvera from "../../Images/Olvera-Capital.svg";
import { CiFacebook } from "react-icons/ci";
import {
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import WindowSize from "../WindowSize";

function Footer() {
  const { isPhoneScreen } = WindowSize();

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#000" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "800px",
            marginTop: "40px",
          }}
        >
          <Typography
            style={{
              color: "var(--neutral-10, #FFF)",
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: "50px",
              fontaWeight: 600,
              lineHeight: "110%",
            }}
          >
            We are open and accepting to all. Come work with us
          </Typography>
          <Typography
            style={{
              color: "var(--neutral-40, #E0E0E0)",
              textAlign: "center",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "130%",
              marginTop: "40px",
            }}
          >
            Experts teach you everything from the comfort of your own home.
            Improve your career today by enrolling in excellent courses at
            affordable prices.
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
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
          </div>
        </div>
      </div>
      {isPhoneScreen ? (
        <>
          <div
            style={{
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            <div>
              <img
                src={olvera}
                alt=""
                style={{
                  width: "256px",
                  height: "42px",
                }}
              />
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "130%",
                  marginTop: "10px",
                }}
              >
                Turning Uncertainty Into Your Advantage
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: "var(--neutral-10, #FFF)",
                  fontFamily: "Plus Jakarta Sans",
                  fontsize: "18px",
                  fontWeight: 600,
                  lineHeight: "135%",
                }}
              >
                Resources
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Home
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Articles
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Videos & Guides
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                About Us
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: "var(--neutral-10, #FFF)",
                  fontFamily: "Plus Jakarta Sans",
                  fontsize: "18px",
                  fontWeight: 600,
                  lineHeight: "135%",
                }}
              >
                Careers
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Olevera academy
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Cookies
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                }}
              >
                Liability Limited By A Scheme Approved Under Professional
                Services Scheme
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Phone: (64) 09 973 4905{" "}
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Email: ezibuyenquiries@olveraadvisors.com{" "}
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Website: olvera.co.nz/ezibuy
              </Typography>
            </div>
          </div>
          <hr style={{ color: "#fff", marginTop: "7%" }} />
          <div
            style={{
              textAlign: "center",
              padding: "40px",
            }}
          >
            <Typography
              style={{
                color: "var(--neutral-40, #E0E0E0)",
                fontFamily: "Plus Jakarta Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "150%",
              }}
            >
              ©2023 olevra advisors. All rights reserved
            </Typography>
            <div>
              <div style={{ display: "flex", gap: "70px" , textAlign: 'center', marginTop: '20px' }}>
                <CiFacebook style={{ color: "#fff", fontSize: "24px" }} />
                <AiOutlineInstagram
                  style={{ color: "#fff", fontSize: "24px" }}
                />
                <AiFillTwitterCircle
                  style={{ color: "#fff", fontSize: "24px" }}
                />
                <AiFillLinkedin style={{ color: "#fff", fontSize: "24px" }} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "90px 80px 0px 80px",
            }}
          >
            <div>
              <img
                src={olvera}
                alt=""
                style={{
                  width: "256px",
                  height: "42px",
                }}
              />
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "130%",
                  marginTop: "10px",
                }}
              >
                Turning Uncertainty Into Your Advantage
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: "var(--neutral-10, #FFF)",
                  fontFamily: "Plus Jakarta Sans",
                  fontsize: "18px",
                  fontWeight: 600,
                  lineHeight: "135%",
                }}
              >
                Resources
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Home
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Articles
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Videos & Guides
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                About Us
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: "var(--neutral-10, #FFF)",
                  fontFamily: "Plus Jakarta Sans",
                  fontsize: "18px",
                  fontWeight: 600,
                  lineHeight: "135%",
                }}
              >
                Careers
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Olevera academy
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Cookies
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                }}
              >
                Liability Limited By A Scheme Approved Under Professional
                Services Scheme
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Phone: (64) 09 973 4905{" "}
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Email: ezibuyenquiries@olveraadvisors.com{" "}
              </Typography>
              <Typography
                style={{
                  color: "var(--neutral-40, #E0E0E0)",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  marginTop: "10px",
                }}
              >
                Website: olvera.co.nz/ezibuy
              </Typography>
            </div>
          </div>
          <hr style={{ color: "#fff", marginTop: "7%" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "40px",
            }}
          >
            <Typography
              style={{
                color: "var(--neutral-40, #E0E0E0)",
                fontFamily: "Plus Jakarta Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "150%",
              }}
            >
              ©2023 olevra advisors. All rights reserved
            </Typography>
            <div>
              <div style={{ display: "flex", gap: "40px" }}>
                <CiFacebook style={{ color: "#fff", fontSize: "24px" }} />
                <AiOutlineInstagram
                  style={{ color: "#fff", fontSize: "24px" }}
                />
                <AiFillTwitterCircle
                  style={{ color: "#fff", fontSize: "24px" }}
                />
                <AiFillLinkedin style={{ color: "#fff", fontSize: "24px" }} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Footer;
