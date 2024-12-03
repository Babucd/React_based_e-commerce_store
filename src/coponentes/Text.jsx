import React from "react";

const Text = () => {
  return (
    <div
      style={{
        minHeight: "100vh", // Ensures full page height
        background: "linear-gradient(to right, #000000, #555555)", // Black to gray gradient
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "20px",
        alignItems: "center", // Center the container horizontally
      }}
    >
      {/* Main container with 60% width and more padding-top */}
      <div
        style={{
          width: "60%", // Adjusted width to 60%
          maxWidth: "1200px", // Optional: To prevent too wide content on large screens
          paddingTop: "100px", // Increased top padding for more space
        }}
      >
        {/* Main Heading */}
        <div
          style={{
            width: "100%",
            textAlign: "center", // Center the heading text
            marginBottom: "20px", // Space between heading and subheadings
          }}
        >
          <h1 style={{ fontSize: "3rem" }}>
            "We seek to build bridges and make connections. Our mission is to
            enable curious minds to make the most out of their adventures."
          </h1>
        </div>

        {/* Subheading Section (side-by-side) */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between", // Distribute the subheadings evenly
            marginTop: "30px", // Added margin-top to separate the subheading section from the heading
          }}
        >
          {/* Subheading 1 */}
          <div style={{ width: "48%" }}>
            <h3 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
              Sustainability and Innovation:
            </h3>
            <p style={{ fontSize: "1.2rem" }}>
              "While the RE Series and its 97% recycled hard shell benchmarked
              sustainable polycarbonate luggage, our R&D team collaborates with
              material science experts on Circle One and its 100% plant-based
              hard shell, making it the world's most sustainable luxury luggage.
              Proving that performance and sustainability aren’t mutually
              exclusive, we’re determined to lead the way towards a sustainable
              future of travel.
              <br /> <br />
              Sign up to our newsletter to stay tuned. Seth Troxler to design
              the Pro Model ST DJ case; with renowned sound artist Emeka Ogboh
              we created a limited range inspired by the vibrant West African
              metropolis of Lagos.""
            </p>
          </div>

          {/* Subheading 2 */}
          <div style={{ width: "48%" }}>
            <h3 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
              Our Partnerships:
            </h3>
            <p style={{ fontSize: "1.2rem" }}>
              "We’re firm believers in the power of creative exchange. So we’ve
              collaborated with like-minded brands like Beats by Dre, BMW, Soho
              House, and Design Hotels. To truly involve the voices shaping
              contemporary culture, we joined forces with acclaimed DJ and
              producer, Seth Troxler to design the Pro Model ST DJ case; with
              renowned sound artist Emeka Ogboh we created a limited range
              inspired by the vibrant West African metropolis of Lagos."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
