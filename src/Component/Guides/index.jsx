import React from "react";
import bgGuides from "../../Images/bg-guides.svg";
import { Typography } from "@mui/material";
import { PiArrowCircleRightThin } from "react-icons/pi";
import WindowSize from "../WindowSize";

function Guides() {
  const { isPhoneScreen } = WindowSize();

  return (
    <div>
      {isPhoneScreen ? (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "700px",
            background: `url(${bgGuides})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            style={{
              color: "#FFF",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "72px",
              textTransform: "capitalize",
              padding: "6%",
              textAlign: "center",
            }}
          >
            Olvera Guides
          </Typography>
          <div style={{ padding: "6%" }}>
            <Typography
              style={{
                color: "#FFF",
                fontFamily: "Archivo",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </div>
          <div>
            <Typography
              style={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "21px",
                fontWeight: 400,
                lineHeight: "26px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                gap: "10px",
              }}
            >
              View More
              <PiArrowCircleRightThin
                style={{ width: "30%", height: "30%", color: "#fff" }}
              />
            </Typography>
          </div>
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "700px",
            background: `url(${bgGuides})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            style={{
              color: "#FFF",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "72px",
              textTransform: "capitalize",
              padding: "6%",
            }}
          >
            Olvera Guides
          </Typography>
          <div>
            <Typography
              style={{
                alignItems: "center",
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "21px",
                fontWeight: 400,
                lineHeight: "26px",
                display: "flex",
                justifyContent: "end",
                marginRight: "10%",
                gap: "10px",
              }}
            >
              View More
              <PiArrowCircleRightThin
                style={{ width: "8%", height: "8%", color: "#fff" }}
              />
            </Typography>
          </div>
          <div style={{ width: "590px", padding: "6%" }}>
            <Typography
              style={{
                color: "#FFF",
                fontFamily: "Archivo",
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
}

export default Guides;
