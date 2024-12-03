import React from "react";
import one from "./man.png"; // Your image import

const Men = () => {
  return (
    <div style={containerStyle}>
      {/* Left side - Image */}
      <div style={leftStyle}>
        <img src={one} alt="Man" style={imageStyle} />
      </div>

      {/* Right side - Heading and Paragraph */}
      <div style={rightStyle}>
        <h2 style={headingStyle}>Lorem Ipsum</h2>
        <p style={paragraphStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac orci
          a urna condimentum hendrerit. Suspendisse potenti. In a turpis at eros
          ultricies ullamcorper. Morbi ac nunc eget lectus scelerisque
          sollicitudin. Integer sed dui est. Phasellus finibus, ligula vel
          hendrerit feugiat, nunc erat cursus urna, nec mollis nulla enim in
          purus. Donec tempus sem in sapien volutpat, id interdum nisi interdum.
          You can replace it with your content. This is just to show the layout
          where the image is on the left and text is on the right. Lorem Ipsum
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac orci
          a urna condimentum hendrerit. Suspendisse potenti. In a turpis at eros
          ultricies ullamcorper. Morbi ac nunc eget lectus scelerisque
          sollicitudin. Integer sed dui est. Phasellus finibus, ligula vel
          hendrerit feugiat, nunc erat cursus urna, nec mollis nulla enim in
          purus. Donec tempus sem in sapien volutpat, id interdum nisi interdum.
        </p>
      </div>
    </div>
  );
};

// Container to hold the left and right sections
const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center", // Center vertically
  height: "100vh", // Take full viewport height
  backgroundColor: "#f0f0f0", // Light gray background
};

// Left side - Image styling
const leftStyle = {
  flex: 1, // Left side takes up 1 part of the space
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh", // Ensure the left side takes full height
  overflow: "hidden", // Prevent image from overflowing
};

// Image style (reduced size by 30%)
const imageStyle = {
  width: "70%", // Reduced size by 30% (70% of original width)
  height: "auto", // Maintain aspect ratio
  objectFit: "cover", // Ensure the image covers the area without distorting
};

// Right side - Text styling
const rightStyle = {
  flex: 1, // Right side takes up 1 part of the space
  paddingLeft: "20px", // Space between image and text
  paddingRight: "20px", // Padding on the right for balance
};

// Heading style
const headingStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#333",
};

// Paragraph style
const paragraphStyle = {
  fontSize: "16px",
  color: "#666",
  lineHeight: "1.5",
};

export default Men;
