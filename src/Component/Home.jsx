import React, { useState } from "react";
import { Link } from "react-router-dom";
import caro1 from "../assets/caro1.jpeg";
import caro2 from "../assets/caro2.png";
import caro3 from "../assets/caro3.png";
import moringa from "../assets/moringa.jpg";
import healthcap from "../assets/healthcap.png";
import detox from "../assets/detox.webp";
import greentea from "../assets/greentea.png";
import dhals from "../assets/dhals.png";
import aswagandha from "../assets/aswangandha.png";
import livevideo from "../assets/livevideo.png";
import livemessage from "../assets/livemessage.png";
import ourproducts1 from "../assets/ourproducts1.png";
import ourproducts2 from "../assets/ourproducts2.png";
import ourproducts3 from "../assets/ourproducts3.webp";
import ourproducts4 from "../assets/ourproducts4.webp";
import ourproducts5 from "../assets/ourproducts5.webp";
import ourproducts6 from "../assets/ourproducts6.webp";
import ourproducts7 from "../assets/ourproducts7.webp";
import ourproducts8 from "../assets/ourproducts8.webp";
import tulsiplant1 from "../assets/tulsiplant1.png";
import tulsiplant2 from "../assets/tulsiplant2.png";
import tulsiplant3 from "../assets/tulsiplant3.png";
import tulsiplant4 from "../assets/tulsiplant4.png";
import healthhome from "../assets/healthhome.webp";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Function to toggle popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      {/* Header Section */}
      <div
        className="d-flex flex-row align-items-center justify-content-center"
        style={{
          height: "80px",
          backgroundColor: "#FFD700",
          fontFamily: "Arial",
        }}
      >
        <Link
          to="/live-qna"
          onClick={(e) => {
            e.preventDefault();
            togglePopup();
          }}
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: "20px",
            margin: "10px",
            padding: "10px 20px",
            fontWeight: "bold",
          }}
        >
          Live Q&A Session
        </Link>
        <Link
          to="/organic"
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: "20px",
            margin: "10px",
            padding: "10px 20px",
            fontWeight: "bold",
          }}
        >
          Organic Lifestyle Tips
        </Link>
      </div>

      {/* Carousel Section */}
      <div className="d-flex align-items-center justify-content-center">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ width: "100%", maxWidth: "100%" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={caro1}
                className="d-block w-100"
                alt="Slide 1"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={caro2}
                className="d-block w-100"
                alt="Slide 2"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={caro3}
                className="d-block w-100"
                alt="Slide 3"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Best Selling Products Section */}
      <div
        className="d-flex flex-column align-items-center"
        style={{ marginTop: "50px", fontFamily: "Arial" }}
      >
        <h2
          style={{
            textDecoration: "underline",
            color: "black",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          BEST SELLING PRODUCTS
        </h2>
        <div
          className="carousel-container"
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: "20px",
            marginTop: "20px",
            paddingBottom: "20px",
          }}
        >
          {/* Inline CSS for hiding scrollbars */}
          <style>
            {`
      .carousel-container::-webkit-scrollbar {
        display: none; /* Hide scrollbar for WebKit browsers */
      }
    `}
          </style>
          {[
            { src: moringa, label: "Moringa Powder" },
            { src: healthcap, label: "Health Capsules" },
            { src: detox, label: "Detox" },
            { src: aswagandha, label: "Aswagandha" },
            { src: greentea, label: "Organic Tea" },
            { src: dhals, label: "Dhals" },
          ].map((product, index) => (
            <div
              className="product-card"
              key={index}
              style={{
                flex: "0 0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "500px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <img
                src={product.src}
                alt={product.label}
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "10px",
                  marginBottom: "15px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  width: "100%",
                  background: "#6B8E23",
                  color: "black",
                  marginTop: "20px",
                  borderRadius: "5px",
                  textAlign: "center",
                  padding: "10px 0",
                }}
              >
                <h3 style={{ margin: "0" }}>{product.label}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Popup Message */}
      {showPopup && (
        <div>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "800px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              textAlign: "center",
              padding: "20px",
              zIndex: 1000,
            }}
          >
            <h3
              style={{
                marginBottom: "15px",
                fontWeight: "bold",
                backgroundColor: "#6B8E23",
                padding: "10px",
                borderRadius: "5px",
                color: "white",
              }}
            >
              Live Q&A Sessions
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "40px",
                marginTop: "20px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                  src={livevideo}
                  alt="Live Video Chat"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <p style={{ fontWeight: "bold", marginTop: "5px", color: "black" }}>
                  Live Video Chats
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                  src={livemessage}
                  alt="Live Chats"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <p style={{ fontWeight: "bold", marginTop: "5px", color: "black" }}>Live Chats</p>
              </div>
            </div>
            <button
              onClick={togglePopup}
              style={{
                marginTop: "20px",
                padding: "10px 15px",
                backgroundColor: "#6B8E23",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,

            }}
            onClick={togglePopup}
          ></div>
        </div>
      )}

      <hr
        style={{
          marginTop: "50px",
          textAlign: "center",
          fontFamily: "Arial",
        }}
      />

      {/* OUR PRODUCTS Section */}
      <div
        className="d-flex flex-column align-items-center flex-wrap"
        style={{ marginTop: "50px", fontFamily: "Arial"}}
      >
        <h2
          style={{
            textDecoration: "underline",
            color: "black",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          OUR PRODUCTS
        </h2>
        <div
          className="d-flex justify-content-center flex-wrap"
          style={{
            width: "100%",
            gap: "50px",
          }}
        >
          {[
            { src: ourproducts1, label: "Teas & Infusions", link: "/product?category=Teas%20%26%20Infusion" },
            { src: ourproducts2, label: "Health & Wellness", link: "/product?category=Health%20%26%20Wellness" },
            { src: ourproducts3, label: "Staple & Packed Foods", link: "/product?category=Staple%20%26%20Packed Food" },
            { src: ourproducts4, label: "Health Food", link: "/product?category=Health%20%26%20Wellness" },
            { src: ourproducts5, label: "Pulses & Dhals", link: "/product?category=Pulses%20%26%20Dhals" },
            { src: ourproducts6, label: "Personal Care", link: "/product?category=PersonalCare" },
            { src: ourproducts7, label: "Detox", link: "/product?category=Detox" },
            { src: ourproducts8, label: "Beauty", link: "/product?category=PersonalCare" },
          ].map((product, index) => (
            <Link to={product.link} key={index} style={{ textDecoration: "none" }}>
              <div
                className="product-card"
                style={{
                  width: "100%",
                  textAlign: "center",
                  borderRadius: "10px",
                  overflow: "hidden",
                  transition: "transform 0.3s",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={product.src}
                  alt={product.label}
                  style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    border: "3px solid #FFD700", // Golden-yellow border
                    objectFit: "cover",
                    transition: "transform 0.3s",
                  }}
                />
                <h3
                  style={{
                    marginTop: "50px",
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: "14px",
                  }}
                >
                  {product.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Separator */}
      <hr
        style={{
          marginTop: "50px",
          textAlign: "center",
          fontFamily: "Arial",
        }}
      />

      {/* Tulsi Wellness Section */}
      <div
        className="d-flex flex-row align-items-center"
        style={{ marginTop: "90px", fontFamily: "Arial" }}
      >
        <div
          className="d-flex align-items-center"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "20px",
            width: "100%",
          }}
        >
          {/* Left-Side Image */}
          <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
            <img
              src={tulsiplant1}
              alt="Tulsi Plant 1"
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>

          {/* Right-Side Heading */}
          <div style={{ flex: "2", textAlign: "center", alignItems: "center" }}>
            <h2
              style={{

                color: "black",
                fontWeight: "bold",
                fontSize: "1.8rem",
              }}
            >
              GET THE TULSI WELLNESS EDGE
            </h2>


            {/* Tulsi Products */}
            <div
              className="d-flex flex-column"
              style={{
                width: "100%",
                marginTop: "30px",
                gap: "20px",
              }}
            >
              {[
                { src: tulsiplant2, label: "Guard Against Cough, Cold & Pollution", description: "Highlights Tulsi's anti-inflammatory, anti-bacterial, and anti-viral properties to boost immunity." },
                { src: tulsiplant3, label: "Fight Stress", description: "Focuses on Tulsi as a powerful adaptogen, lowering cortisol levels, relaxing the nervous system, and improving cognitive function." },
                { src: tulsiplant4, label: "Support Metabolism", description: "Explains how Tulsi's antioxidants enhance liver health, reduce acid reflux, and optimize digestion." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    padding: "15px",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                  }}
                >
                  {/* Image */}
                  <img
                    src={item.src}
                    alt={item.label}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  {/* Label and Description */}
                  <div style={{ flex: "1", textAlign: "left" }}>
                    <h3 style={{ fontWeight: "bold", color: "#6B8E23", marginBottom: "5px" }}>
                      {item.label}
                    </h3>
                    <p style={{ color: "black", margin: "0" }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/product?category=Teas%20%26%20Infusion"
              style={{
                display: "inline-block",
                marginTop: "30px",
                padding: "10px 20px",
                backgroundColor: "#6B8E23",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      {/* Healthy Conscious Living Section */}
      <div className="container-fluid mt-5" style={{ fontFamily: "Arial", width: "100%", margin: "0" }}>
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-6" style={{
            textAlign: "center",
            background: "linear-gradient(to right, #6B8E23, #FFFFFF)", // Olive green to white gradient
            padding: "20px", lineHeight: "45px", width: "50%"
          }}>
            <h2>HEALTHY CONSCIOUS LIVING</h2>
            <p>
              Healthy Conscious Living Healthy Conscious Living includes conscious business practices to ensure our impact on our world and communities is a positive one. At the foundation of ORGANIC INDIA’s products, company, and sourcing is regenerative agriculture that not only sustains but replenishes the earth; fair trade practices that support and honor farmer partners with equitable wages, health care, and ongoing organic agricultural training; and a LEED Platinum certified production facility that is a marvel of top-tier sustainable design, construction, and operations.
            </p>
            <Link
              to="/product?category=Health%20%26%20Wellness"
              style={{
                display: "inline-block",
                marginTop: "30px",
                padding: "10px 20px",
                backgroundColor: "white",
                color: "blue",
                textDecoration: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Shop Now
            </Link>
          </div>

          {/* Right Column */}
          <div className="col-md-6 text-center" style={{ width: "50%" }}>
            <img
              src={healthhome} // Replace with your image URL
              alt="Healthy Living"
              className="img-fluid"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

    </div>

  );
};

export default Home;
