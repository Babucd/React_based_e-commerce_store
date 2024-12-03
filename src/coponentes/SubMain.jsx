import React from "react";
import one from "./real1.png";
import two from "./real3.png";
import three from "./real2.png"; // The central image of the man
import four from "./real4.png";
import five from "./10.jpg";

const SubMain = () => {
  return (
    <div style={{ backgroundColor: "#2F2F2F", padding: "40px" }}>
      {" "}
      {/* Background color changed to light black */}
      <h1
        className="text-center mb-5"
        style={{ fontSize: "2rem", fontWeight: "bold", color: "#fff" }}
      >
        Discover Backpacks
      </h1>
      <div className="container text-center">
        <div className="row justify-content-around align-items-center g-5">
          {" "}
          {/* Increased gap */}
          {/* Left Section */}
          <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column gap-5">
            {" "}
            {/* Adjusted column size */}
            <div
              className="card"
              style={{
                height: "320px", // Slightly increased height
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <img
                src={one}
                alt="Left Top Image"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px", // Smoother corners
                }}
              />
            </div>
            <div
              className="card"
              style={{
                height: "320px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <img
                src={two}
                alt="Left Bottom Image"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
          {/* Center Image */}
          <div className="col-lg-5 col-md-8 col-sm-12">
            {" "}
            {/* Adjusted column size */}
            <div
              className="card"
              style={{
                height: "620px", // Slightly increased height
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <img
                src={three}
                alt="Center Image"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>
          </div>
          {/* Right Section */}
          <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column gap-5">
            {" "}
            {/* Adjusted column size */}
            <div
              className="card"
              style={{
                height: "320px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <img
                src={four}
                alt="Right Top Image"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div
              className="card"
              style={{
                height: "320px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <img
                src={five}
                alt="Right Bottom Image"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubMain;
