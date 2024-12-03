import React from "react";
import one from "./bag1.png";
import two from "./bag2.png";
import three from "./bag3.png";
import four from "./bag4.png";
import five from "./bag5.png";
import six from "./bag6.png";
import seven from "./bag7.png";
import eight from "./bag8.png";

const Bags = () => {
  // Array of bag data (image, name, price, description) Product Categories, All Colors,   Price Range , All Features
  const bagsData = [
    {
      src: one,
      name: "Stylish Bag",
      price: "$50",
      description: "A trendy and versatile bag for every occasion.",
    },
    {
      src: two,
      name: "Stylish Bag",
      price: "$50",
      description: "A trendy and versatile bag for every occasion.",
    },
    {
      src: three,
      name: "Stylish Bag",
      price: "$50",
      description: "A trendy and versatile bag for every occasion.",
    },
    {
      src: four,
      name: "Stylish Bag",
      price: "$50",
      description: "A trendy and versatile bag for every occasion.",
    },
    {
      src: five,
      name: "Stylish Bag",
      price: "$50",
      description: "A trendy and versatile bag for every occasion.",
    },
    {
      src: six,
      name: "Stylish Bag",
      price: "$50",
      description: "A trendy and versatile bag for every occasion.",
    },
    {
      src: seven,
      name: "Stylish Bag",
      price: "$50",
      description: "A trendy and versatile bag for every occasion.",
    },
    {
      src: eight,
      name: "Stylish Bag",
      price: "$50",
      description: "A trendy and versatile bag for every occasion.",
    },
  ];

  return (
    <div style={{ backgroundColor: "rgb(60, 60, 60)", padding: "20px" }}>
      {/* Top four buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            padding: "12px 20px",
            backgroundColor: "rgb(40, 40, 40)", // Light black background for buttons
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
            width: "22%",
          }}
        >
          Product Categories
        </button>
        <button
          style={{
            padding: "12px 20px",
            backgroundColor: "rgb(40, 40, 40)", // Light black background for buttons
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
            width: "22%",
          }}
        >
          All Colors
        </button>
        <button
          style={{
            padding: "12px 20px",
            backgroundColor: "rgb(40, 40, 40)", // Light black background for buttons
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
            width: "22%",
          }}
        >
          Price Range
        </button>
        <button
          style={{
            padding: "12px 20px",
            backgroundColor: "rgb(40, 40, 40)", // Light black background for buttons
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
            width: "22%",
          }}
        >
          All Features
        </button>
      </div>

      {/* Heading for the section */}
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "white" }}>
        Our Exclusive Bag Collection
      </h2>

      {/* Grid for bags */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 items per row
          gap: "20px",
          width: "100%", // Full width for grid
        }}
      >
        {bagsData.map((bag, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "rgb(50, 50, 50)", // Light black for bag containers
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={bag.src}
              alt={bag.name}
              style={{
                width: "80%", // Reduced width by 20%
                height: "auto", // Height adjusts automatically
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
            <h3 style={{ fontSize: "18px", margin: "10px 0", color: "white" }}>
              {bag.name}
            </h3>
            <p style={{ fontSize: "16px", color: "green" }}>{bag.price}</p>
            <p style={{ fontSize: "14px", color: "gray", marginTop: "5px" }}>
              {bag.description}
            </p>

            {/* Adding the Card and Buy buttons below the description */}
            <div style={{ marginTop: "10px" }}>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "rgb(40, 40, 40)", // Light black background for buttons
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "14px",
                  marginRight: "10px", // Space between the buttons
                }}
              >
                View Card
              </button>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "rgb(60, 60, 60)", // Slightly lighter shade for the second button
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bags;
