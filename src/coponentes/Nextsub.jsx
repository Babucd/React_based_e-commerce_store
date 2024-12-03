import React from "react";
import one from "./real5.png";

const Nextsub = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        backgroundColor: "black", // Set background color to black
        color: "#d3d3d3", // Set default text color to gray-white
      }}
    >
      {/* Left Side: Image */}
      <div style={{ flex: "1", textAlign: "center" }}>
        <img
          src={one}
          alt="Descriptive Alt Text"
          style={{
            width: "90%", // Keep width responsive
            height: "90%", // Reduce height by 10% relative to its original size
            objectFit: "cover", // Maintain proportions while cropping
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)", // Light shadow for visibility
          }}
        />
      </div>

      {/* Right Side: Text */}
      <div
        style={{
          flex: "1",
          paddingLeft: "20px",
          fontSize: "20px", // Increased text size for the paragraph
          lineHeight: "1.8", // Adjusted for better readability
          fontWeight: "500", // Increased text weight for the paragraph
        }}
      >
        <h2
          style={{
            marginBottom: "10px",
            color: "white",
            fontSize: "28px", // Increased heading size
            fontWeight: "700", // Bolded the heading
          }}
        >
          Discover the Beauty
        </h2>
        <p>
          We seek to build bridges and make connections. Our mission is to
          enable curious minds to make the most out of their adventures.
        </p>
      </div>
    </div>
  );
};

export default Nextsub;
