import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Mainimg.jpg";

const Main = () => {
  return (
    <div
      className="container-fluid"
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f0f0f0",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0",
      }}
    >
      <div className="row align-items-center" style={{ width: "80%" }}>
        <div className="col-md-6 text-section">
          <h1 className="display-4 fw-bold text-dark">
            Adventure Awaits: Your Ultimate Backpack Destination
          </h1>
          <p className="lead text-dark">
            Gear Up and Go: Explore Our Backpack Selection
          </p>
        </div>
        <div className="col-md-6 position-relative image-section">
          <img src={logo} alt="Backpack" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default Main;
