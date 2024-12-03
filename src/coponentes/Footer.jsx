import React from "react";

export const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#333",
        color: "white",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {/* Brand Name Section */}
      <div style={{ flex: 1, marginRight: "80px" }}>
        <h3 style={{ marginBottom: "10px" }}>Brand Name</h3>
        <p style={{ fontSize: "14px" }}>
          A brief description of the brand. This is where you can introduce your
          company or brand.
        </p>
      </div>

      {/* Shop Section */}
      <div style={{ flex: 1, marginRight: "20px" }}>
        <h3 style={{ marginBottom: "10px" }}>Shop</h3>
        <ul style={{ listStyle: "none", paddingLeft: "0" }}>
          <li style={{ marginBottom: "8px" }}>Backpacks</li>
          <li style={{ marginBottom: "8px" }}>Luggage</li>
          <li style={{ marginBottom: "8px" }}>Accessories</li>
        </ul>
      </div>

      {/* About Section */}
      <div style={{ flex: 1, marginRight: "20px" }}>
        <h3 style={{ marginBottom: "10px" }}>About</h3>
        <ul style={{ listStyle: "none", paddingLeft: "0" }}>
          <li style={{ marginBottom: "8px" }}>About Us</li>
          <li style={{ marginBottom: "8px" }}>Quality</li>
          <li style={{ marginBottom: "8px" }}>Shops</li>
        </ul>
      </div>

      {/* More Section */}
      <div style={{ flex: 1, marginRight: "20px" }}>
        <h3 style={{ marginBottom: "10px" }}>More</h3>
        <ul style={{ listStyle: "none", paddingLeft: "0" }}>
          <li style={{ marginBottom: "8px" }}>Career</li>
          <li style={{ marginBottom: "8px" }}>Press</li>
          <li style={{ marginBottom: "8px" }}>Privacy Policy</li>
        </ul>
      </div>

      {/* Support Section */}
      <div style={{ flex: 1 }}>
        <h3 style={{ marginBottom: "10px" }}>Support</h3>
        <ul style={{ listStyle: "none", paddingLeft: "0" }}>
          <li style={{ marginBottom: "8px" }}>Contact Us</li>
          <li style={{ marginBottom: "8px" }}>FAQ</li>
          <li style={{ marginBottom: "8px" }}>Terms & Conditions</li>
        </ul>
      </div>
    </div>
  );
};
