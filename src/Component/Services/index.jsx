import { Typography } from "@mui/material";
import React from "react";
import { PiArrowRightDuotone } from "react-icons/pi";
import WindowSize from "../WindowSize";

function Services() {
  const { isPhoneScreen } = WindowSize();
  return (
    <div>
      {
        isPhoneScreen ? (
          <><div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            padding: "2rem",
          }}
          >
            <div>
              <Typography
                style={{
                  color: "#CC0E8C",
                  fontFamily: "Montserrat Alternates",
                  fontSize: "62px",
                  fontWeight: 800,
                }}
              >
                150+
              </Typography>
              <Typography
                style={{
                  color: "#292929",
                  fontFamily: "Montserrat",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Projects
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: "#CC0E8C",
                  fontFamily: "Montserrat Alternates",
                  fontSize: "62px",
                  fontWeight: 800,
                }}
              >
                80+
              </Typography>
              <Typography
                style={{
                  color: "#292929",
                  fontFamily: "Montserrat",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Clients
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: "#CC0E8C",
                  fontFamily: "Montserrat Alternates",
                  fontSize: "62px",
                  fontWeight: 800,
                }}
              >
                200+
              </Typography>
              <Typography
                style={{
                  color: "#292929",
                  fontFamily: "Montserrat",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Professionals
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: "#CC0E8C",
                  fontFamily: "Montserrat Alternates",
                  fontSize: "62px",
                  fontWeight: 800,
                }}
              >
                97%
              </Typography>
              <Typography
                style={{
                  color: "#292929",
                  fontFamily: "Montserrat",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Clients
              </Typography>
            </div>
          </div><div
            style={{
            }}
          >
              <div style={{  marginTop: "10px", }}>
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
                      display:'flex', 
                      justifyContent: 'center',
                    }}
                  >
                    SERVICES
                  </Typography>
                </div>
                <div style={{ marginTop: "20px", }}>
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
                    Our services that can help your business
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <Typography
                      style={{
                        color: "var(--Body, #6E6E6E)",
                        fontFamily: "Archivo",
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: "26px",
                        marginTop: "20px",
                      }}
                    >
                      Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                    </Typography>
                  </Typography>
                </div>
              </div>

              <div>
                <Typography
                  style={{
                    color: "#C2278E",
                    fontzfamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "59px",
                    textTransform: "capitalize",
                    
                  }}
                >
                  01.
                </Typography>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    style={{
                      color: "var(--Heading, #2D2D2D)",
                      fontFamily: "Montserrat Alternates",
                      fontSize: "24px",
                      fontWeight: 800,
                      lineHeight: "29px",
                      textTransform: "capitalize",
                    }}
                  >
                    Sustainability
                  </Typography>
                  <PiArrowRightDuotone style={{ fontSize: "24px" }} />
                </div>
                <hr />
                <Typography
                  style={{
                    color: "#C2278E",
                    fontzfamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "59px",
                    textTransform: "capitalize",
                  }}
                >
                  02.
                </Typography>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    style={{
                      color: "var(--Heading, #2D2D2D)",
                      fontFamily: "Montserrat Alternates",
                      fontSize: "24px",
                      fontWeight: 800,
                      lineHeight: "29px",
                      textTransform: "capitalize",
                    }}
                  >
                    Small Business
                  </Typography>
                  <PiArrowRightDuotone style={{ fontSize: "24px" }} />
                </div>
                <hr />
                <Typography
                  style={{
                    color: "#C2278E",
                    fontzfamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "59px",
                    textTransform: "capitalize",
                  }}
                >
                  03.
                </Typography>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    style={{
                      color: "var(--Heading, #2D2D2D)",
                      fontFamily: "Montserrat Alternates",
                      fontSize: "24px",
                      fontWeight: 800,
                      lineHeight: "29px",
                      textTransform: "capitalize",
                    }}
                  >
                    Forensic Services
                  </Typography>
                  <PiArrowRightDuotone style={{ fontSize: "24px" }} />
                </div>
                <hr />
                <Typography
                  style={{
                    color: "#C2278E",
                    fontzfamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "59px",
                    textTransform: "capitalize",
                  }}
                >
                  04.
                </Typography>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    style={{
                      color: "var(--Heading, #2D2D2D)",
                      fontFamily: "Montserrat Alternates",
                      fontSize: "24px",
                      fontWeight: 800,
                      lineHeight: "29px",
                      textTransform: "capitalize",
                    }}
                  >
                    Risk Management
                  </Typography>
                  <PiArrowRightDuotone style={{ fontSize: "24px" }} />
                </div>
                <hr />
                <Typography
                  style={{
                    color: "#C2278E",
                    fontzfamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "59px",
                    textTransform: "capitalize",
                  }}
                >
                  05.
                </Typography>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    style={{
                      color: "var(--Heading, #2D2D2D)",
                      fontFamily: "Montserrat Alternates",
                      fontSize: "24px",
                      fontWeight: 800,
                      lineHeight: "29px",
                      textTransform: "capitalize",
                    }}
                  >
                    CFO Advisory
                  </Typography>
                  <PiArrowRightDuotone style={{ fontSize: "24px" }} />
                </div>
                <hr />
              </div>
            </div></>
        ) : (
            <><div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div>
                <Typography
                  style={{
                    color: "#CC0E8C",
                    fontFamily: "Montserrat Alternates",
                    fontSize: "62px",
                    fontWeight: 800,
                  }}
                >
                  150+
                </Typography>
                <Typography
                  style={{
                    color: "#292929",
                    fontFamily: "Montserrat",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  Projects
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    color: "#CC0E8C",
                    fontFamily: "Montserrat Alternates",
                    fontSize: "62px",
                    fontWeight: 800,
                  }}
                >
                  80+
                </Typography>
                <Typography
                  style={{
                    color: "#292929",
                    fontFamily: "Montserrat",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  Clients
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    color: "#CC0E8C",
                    fontFamily: "Montserrat Alternates",
                    fontSize: "62px",
                    fontWeight: 800,
                  }}
                >
                  200+
                </Typography>
                <Typography
                  style={{
                    color: "#292929",
                    fontFamily: "Montserrat",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  Professionals
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    color: "#CC0E8C",
                    fontFamily: "Montserrat Alternates",
                    fontSize: "62px",
                    fontWeight: 800,
                  }}
                >
                  97%
                </Typography>
                <Typography
                  style={{
                    color: "#292929",
                    fontFamily: "Montserrat",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  Clients
                </Typography>
              </div>
            </div><div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "50px",
                padding: "80px",
              }}
            >
                <div style={{ width: "50%", marginTop: "10px" }}>
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
                      SERVICES
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
                      Our services that can help your business
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      <Typography
                        style={{
                          color: "var(--Body, #6E6E6E)",
                          fontFamily: "Archivo",
                          fontSize: "17px",
                          fontWeight: 400,
                          lineHeight: "26px",
                          marginTop: "20px",
                        }}
                      >
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt
                      </Typography>
                    </Typography>
                  </div>
                </div>

                <div style={{ width: "50%" }}>
                  <Typography
                    style={{
                      color: "#C2278E",
                      fontzfamily: "Montserrat",
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "59px",
                      textTransform: "capitalize",
                    }}
                  >
                    01.
                  </Typography>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography
                      style={{
                        color: "var(--Heading, #2D2D2D)",
                        fontFamily: "Montserrat Alternates",
                        fontSize: "24px",
                        fontWeight: 800,
                        lineHeight: "29px",
                        textTransform: "capitalize",
                      }}
                    >
                      Sustainability
                    </Typography>
                    <PiArrowRightDuotone style={{ fontSize: "24px" }} />
                  </div>
                  <hr />
                  <Typography
                    style={{
                      color: "#C2278E",
                      fontzfamily: "Montserrat",
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "59px",
                      textTransform: "capitalize",
                    }}
                  >
                    02.
                  </Typography>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography
                      style={{
                        color: "var(--Heading, #2D2D2D)",
                        fontFamily: "Montserrat Alternates",
                        fontSize: "24px",
                        fontWeight: 800,
                        lineHeight: "29px",
                        textTransform: "capitalize",
                      }}
                    >
                      Small Business
                    </Typography>
                    <PiArrowRightDuotone style={{ fontSize: "24px" }} />
                  </div>
                  <hr />
                  <Typography
                    style={{
                      color: "#C2278E",
                      fontzfamily: "Montserrat",
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "59px",
                      textTransform: "capitalize",
                    }}
                  >
                    03.
                  </Typography>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography
                      style={{
                        color: "var(--Heading, #2D2D2D)",
                        fontFamily: "Montserrat Alternates",
                        fontSize: "24px",
                        fontWeight: 800,
                        lineHeight: "29px",
                        textTransform: "capitalize",
                      }}
                    >
                      Forensic Services
                    </Typography>
                    <PiArrowRightDuotone style={{ fontSize: "24px" }} />
                  </div>
                  <hr />
                  <Typography
                    style={{
                      color: "#C2278E",
                      fontzfamily: "Montserrat",
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "59px",
                      textTransform: "capitalize",
                    }}
                  >
                    04.
                  </Typography>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography
                      style={{
                        color: "var(--Heading, #2D2D2D)",
                        fontFamily: "Montserrat Alternates",
                        fontSize: "24px",
                        fontWeight: 800,
                        lineHeight: "29px",
                        textTransform: "capitalize",
                      }}
                    >
                      Risk Management
                    </Typography>
                    <PiArrowRightDuotone style={{ fontSize: "24px" }} />
                  </div>
                  <hr />
                  <Typography
                    style={{
                      color: "#C2278E",
                      fontzfamily: "Montserrat",
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "59px",
                      textTransform: "capitalize",
                    }}
                  >
                    05.
                  </Typography>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography
                      style={{
                        color: "var(--Heading, #2D2D2D)",
                        fontFamily: "Montserrat Alternates",
                        fontSize: "24px",
                        fontWeight: 800,
                        lineHeight: "29px",
                        textTransform: "capitalize",
                      }}
                    >
                      CFO Advisory
                    </Typography>
                    <PiArrowRightDuotone style={{ fontSize: "24px" }} />
                  </div>
                  <hr />
                </div>
              </div></>
        )
      }
      
    </div>
  );
}

export default Services;
