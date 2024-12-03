import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Mainimg.jpg";

// Apply Poppins font globally within this component
const Main = () => {
  return (
    <div
      className="container-fluid" // Use container-fluid for full width
      style={{
        fontFamily: "'Poppins', sans-serif", // Set the Poppins font
        backgroundColor: "#f0f0f0", // Light gray background
        height: "100vh", // Full page height
        display: "flex", // Use flexbox for layout
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        padding: "0", // Remove default padding
      }}
    >
      <div className="row align-items-center" style={{ width: "80%" }}>
        {" "}
        {/* Adjust the width of the row */}
        {/* Left side text section */}
        <div className="col-md-6 text-section">
          <h1 className="display-4 fw-bold text-dark">
            Adventure Awaits: Your Ultimate Backpack Destination
          </h1>
          <p className="lead text-dark">
            Gear Up and Go: Explore Our Backpack Selection
          </p>
        </div>
        {/* Right side image section */}
        <div className="col-md-6 position-relative image-section">
          <img src={logo} alt="Backpack" className="img-fluid rounded" />

          {/* Product Tag Below the Image */}
        </div>
      </div>
    </div>
  );
};

export default Main;
