import React from "react";
import one from "./bag9.png";
import two from "./bag10.png";
import three from "./9.jpg";

const SecondBag = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, black, gray)",
        padding: "20px",
        height: "100vh", // Full viewport height
        display: "flex",
      }}
    >
      {/* Left Side: Two Images Stacked Vertically */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Space out images evenly
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "white", textAlign: "center" }}>
          Design & Compact
        </h2>

        {/* First Image */}
        <img
          src={one}
          alt="Bag 1"
          style={{
            width: "81%", // Reduced an additional 10% (90% → 81%)
            height: "auto", // Maintain aspect ratio
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transform: "translateX(10%)", // Shift 10% to the right
          }}
        />
        {/* Second Image */}
        <img
          src={three}
          alt="Bag 2"
          style={{
            width: "81%", // Reduced an additional 10% (90% → 81%)
            height: "auto", // Maintain aspect ratio
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transform: "translateX(10%)", // Shift 10% to the right
          }}
        />
      </div>

      {/* Right Side: One Image */}
      <div
        style={{
          flex: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={two}
          alt="Large Bag"
          style={{
            width: "67.5%", // Reduced an additional 10% (75% → 67.5%)
            height: "auto", // Maintain aspect ratio
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transform: "translateX(10%)", // Shift 10% to the right
          }}
        />
      </div>
    </div>
  );
};

export default SecondBag;
