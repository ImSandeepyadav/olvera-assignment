import { Grid, Typography } from "@mui/material";
import React from "react";
import ELLERY from "../../Images/ELLERY.svg";
import GING from "../../Images/GING.svg";
import pngwing from "../../Images/pngwing.svg";
import pngegg from "../../Images/pngegg.svg";
import Vector from "../../Images/Vector 48.svg";
import WindowSize from "../WindowSize";

function AboutUs() {
  const { isPhoneScreen } = WindowSize();

  return (
    <div
      style={{
        backgroundColor: "#C2278E",
        position: "relative",
        height: "600px",
      }}
    >
      {isPhoneScreen ? (
        <>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Typography
              style={{
                color: "#FFF",
                fontFamily: "Plus Jakarta Sans",
                fontSize: "30px",
                fontWeight: 400,
                lineHeight: "72px",
                textTransform: "capitalize",
              }}
            >
              About Olvera
            </Typography>
            <div style={{ marginTop: "60px" }}>
              <Typography
                style={{
                  color: "#FFF",
                  fontFamily: "Archivo",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "30px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </div>
          </div>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ display: 'flex', alignItems: 'center',  }}
          >
            <Grid item xs={6}>
              <img src={pngegg} alt="" style={{width: '100%', height: '100%'}}/>
            </Grid>
            <Grid item xs={6}>
              <img src={pngwing} alt="" style={{width: '100%', height: '100%'}}/>
            </Grid>
            <Grid item xs={6}>
              <img src={ELLERY} alt="" style={{width: '100%', height: '100%'}}/>
            </Grid>
            <Grid item xs={6}>
              <img src={GING} alt="" style={{width: '100%', height: '100%'}}/>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <div
            style={{
              padding: "100px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                color: "#FFF",
                fontFamily: "Plus Jakarta Sans",
                fontSize: "30px",
                fontWeight: 400,
                lineHeight: "72px",
                textTransform: "capitalize",
              }}
            >
              About Olvera
            </Typography>
            <div style={{ width: "440px", marginTop: "60px" }}>
              <Typography
                style={{
                  color: "#FFF",
                  fontFamily: "Archivo",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "30px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img src={pngegg} alt="" />
            <img src={pngwing} alt="" />
            <img src={ELLERY} alt="" />
            <img src={GING} alt="" />
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Vector} alt="" />
          </div>
        </>
      )}
    </div>
  );
}

export default AboutUs;
