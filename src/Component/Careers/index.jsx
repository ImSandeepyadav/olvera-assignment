import React from "react";
import { Button, Typography } from "@mui/material";
import career from "../../Images/career.svg";
import WindowSize from "../WindowSize";

function Careers() {
  const { isPhoneScreen } = WindowSize();

  return (
    <div>
      {isPhoneScreen ? (
        <>
          <div style={{}}>
            <div>
              <img src={career} alt="" style={{ width: '100%' }} />
            </div>
            <div style={{ padding: "10%" }}>
              <div>
                <Typography
                  style={{
                    color: "#C2278E",
                    fontFamily: "Oswald",
                    fontSize: "22px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    letterSpacing: "1.32px",
                    textTransform: "uppercase",
                    textAlign: "center"
                  }}
                >
                  CAREERS
                </Typography>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Typography
                  style={{
                    color: "var(--Heading, #2D2D2D)",
                    fontFamily: "Plus Jakarta Sans",
                    fontSize: "30px",
                    fontWeight: 800,
                    lineHeight: "59px",
                    textTransform: "capitalize",
                    textAlign: "center"
                  }}
                >
                  Careers at Olvera
                </Typography>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Typography
                  style={{
                    color: "var(--Body, #6E6E6E)",
                    fontFamily: "Archivo",
                    fontSize: "17px",
                    fontWeight: 400,
                    lineHeight: "26px",
                  }}
                >
                  Navigate change, develop on-demand skills. Your turnaround
                  journey starts with Olvera.
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                <Button
                 style={{
            padding: "10px 20px",
            background: "#F837B7",
            fontFamily: 'Oswald',
            color: "#FFF",
            borderRadius: "1000px",
            textDecoration: "none",
          }}
                >
                  Search Careers
                </Button>
              </div>
            </div>
          </div>
          <div>
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/qOZmGK2_-Fo?si=UwF7VjzhZJ7_owFH"
              title="YouTube Video"
              allowFullScreen
            ></iframe>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "50px",
            }}
          >
            <div style={{ padding: "10%" }}>
              <div>
                <Typography
                  style={{
                    color: "#C2278E",
                    fontFamily: "Oswald",
                    fontSize: "22px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    letterSpacing: "1.32px",
                    textTransform: "uppercase",
                  }}
                >
                  CAREERS
                </Typography>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Typography
                  style={{
                    color: "var(--Heading, #2D2D2D)",
                    fontFamily: "Plus Jakarta Sans",
                    fontSize: "45px",
                    fontWeight: 800,
                    lineHeight: "59px",
                    textTransform: "capitalize",
                  }}
                >
                  Careers at Olvera
                </Typography>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Typography
                  style={{
                    color: "var(--Body, #6E6E6E)",
                    fontFamily: "Archivo",
                    fontSize: "17px",
                    fontWeight: 400,
                    lineHeight: "26px",
                  }}
                >
                  Navigate change, develop on-demand skills. Your turnaround
                  journey starts with Olvera.
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                <Button
                  style={{
                    width: "40%",
                    height: "40px",
                    padding: "20px 40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "1000px",
                    background: "#FF74D0",
                    color: "#000",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  Search Careers
                </Button>
              </div>
            </div>

            <div>
              <img src={career} alt="" />
            </div>
          </div>
          <div>
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/VIDEO_ID_HERE"
              title="YouTube Video"
              allowFullScreen
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
}

export default Careers;
