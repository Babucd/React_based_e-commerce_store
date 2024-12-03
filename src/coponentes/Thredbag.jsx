import React, { useState } from "react";
import two from "./real3.png"; // Import image for the left and right sides

const Thredbag = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  return (
    <div
      style={{
        background: "linear-gradient(to right, #333, #666)", // Gray to black gradient
        padding: "20px",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left and Right Images */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          backgroundImage: `url(${two})`, // Image for the left side
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: -1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          backgroundImage: `url(${two})`, // Image for the right side
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: -1,
        }}
      ></div>

      <h2 style={{ color: "white", textAlign: "center" }}>Product Categories, All Colors,   Price Range , All Features
        Product Categories
      </h2>

      {/* Buttons for all filter sections aligned horizontally */}
      <div style={horizontalButtonsContainer}>
        {/* All Categories Button */}
        <div style={buttonWrapper}>
          <button
            style={buttonStyle}
            onClick={() => setShowCategories(!showCategories)}
          >
            All Categories{" "}
            <span style={{ marginLeft: "10px" }}>
              {showCategories ? "▼" : "▲"}
            </span>
          </button>
          {showCategories && (
            <div style={subButtonContainer}>
              <button style={subButtonStyle}>Category 1</button>
              <button style={subButtonStyle}>Category 2</button>
              <button style={subButtonStyle}>Category 3</button>
              <button style={subButtonStyle}>Category 4</button>
            </div>
          )}
        </div>

        {/* All Colors Button */}
        <div style={buttonWrapper}>
          <button
            style={buttonStyle}
            onClick={() => setShowColors(!showColors)}
          >
            All Colors{" "}
            <span style={{ marginLeft: "10px" }}>{showColors ? "▼" : "▲"}</span>
          </button>
          {showColors && (
            <div style={subButtonContainer}>
              <button style={subButtonStyle}>Red</button>
              <button style={subButtonStyle}>Blue</button>
              <button style={subButtonStyle}>Green</button>
              <button style={subButtonStyle}>Black</button>
            </div>
          )}
        </div>

        {/* All Features Button */}
        <div style={buttonWrapper}>
          <button
            style={buttonStyle}
            onClick={() => setShowFeatures(!showFeatures)}
          >
            All Features{" "}
            <span style={{ marginLeft: "10px" }}>
              {showFeatures ? "▼" : "▲"}
            </span>
          </button>
          {showFeatures && (
            <div style={subButtonContainer}>
              <button style={subButtonStyle}>Feature 1</button>
              <button style={subButtonStyle}>Feature 2</button>
              <button style={subButtonStyle}>Feature 3</button>
              <button style={subButtonStyle}>Feature 4</button>
            </div>
          )}
        </div>

        {/* Price Range Button */}
        <div style={buttonWrapper}>
          <button style={buttonStyle} onClick={() => setShowPrice(!showPrice)}>
            Price Range{" "}
            <span style={{ marginLeft: "10px" }}>{showPrice ? "▼" : "▲"}</span>
          </button>
          {showPrice && (
            <div style={subButtonContainer}>
              <button style={subButtonStyle}>$10 - $20</button>
              <button style={subButtonStyle}>$20 - $50</button>
              <button style={subButtonStyle}>$50 - $100</button>
              <button style={subButtonStyle}>$100 - $200</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Container for the main buttons aligned horizontally
const horizontalButtonsContainer = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px",
};

// Wrapping each button and its dropdown
const buttonWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

// Main button style
const buttonStyle = {
  padding: "12px 20px",
  backgroundColor: "#444", // Dark gray
  color: "white",
  border: "none",
  borderRadius: "12px", // Rounded corners
  cursor: "pointer",
  fontSize: "16px",
  transition: "all 0.3s ease",
  width: "200px", // Fixed width for each button
  display: "flex",
  justifyContent: "space-between", // Space between text and caret
  alignItems: "center",
};

// Sub-button container for each section
const subButtonContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  paddingTop: "10px",
  alignItems: "center", // Center sub-buttons
  width: "100%", // Fill the available width under the main button
};

// Sub-button style for the dropdowns
const subButtonStyle = {
  padding: "8px 16px",
  backgroundColor: "#555", // Slightly lighter gray for sub-buttons
  color: "white",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  fontSize: "14px",
  transition: "all 0.3s ease",
  width: "100%", // Full width of the parent container
  boxSizing: "border-box", // Make sure padding doesn't expand the width
};

export default Thredbag;
