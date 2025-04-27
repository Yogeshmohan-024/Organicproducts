import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../App.jsx"; // Global Cart Context

import img1 from "../assets/productimg1.png";
import img2 from "../assets/productimg2.png";
import img5 from "../assets/productimg3.png";
import tea0 from "../assets/Tea0.png";
import tea1 from "../assets/Tea1.png";
import tea2 from "../assets/Tea2.png";
import tea3 from "../assets/Tea3.png";
import tea4 from "../assets/Tea4.png";
import tea5 from "../assets/Tea5.png";
import tea6 from "../assets/Tea6.png";
import tea7 from "../assets/Tea7.png";
import tea8 from "../assets/Tea8.png";
import tea9 from "../assets/Tea9.png";
import tea10 from "../assets/Tea10.png";
import health1 from "../assets/Health1.png"; // LIVER KIDNEY CARE CAPSULES
import health2 from "../assets/Health2.png"; // ASHWAGANDHA FOR STRESS RELIEF
import health3 from "../assets/Health3.png"; // TRIPHALA POWDER
import health4 from "../assets/Health4.png"; // SKIN CAPSULES FOR GLOWING SKIN
import health5 from "../assets/Health5.png"; // LIPID CARE FOR CHOLESTEROL
import health6 from "../assets/Health6.png"; // SUGAR BALANCE CAPSULES
import health7 from "../assets/Health7.png"; // MORINGA POWDER
import health8 from "../assets/Health8.png"; // ORGANIC TURMERIC POWDER
import health9 from "../assets/Health9.png"; // ORGANIC FLAXSEED OIL CAPSULES
import health10 from "../assets/Health10.png"; // ORGANIC AMALA CAPSULES
import health11 from "../assets/Health11.png"; // SPIRULINA CAPSULES
import staple1 from "../assets/Staple1.png";
import staple2 from "../assets/Staple2.png";
import staple3 from "../assets/Staple3.png";
import staple4 from "../assets/Staple4.png";
import staple5 from "../assets/Staple5.png";
import staple6 from "../assets/Staple6.png";
import staple7 from "../assets/Staple7.png";
import staple8 from "../assets/Staple8.png";
import staple9 from "../assets/Staple9.png";
import staple10 from "../assets/Staple10.png";
import staple11 from "../assets/Staple11.png";
import staple12 from "../assets/Staple12.png";
import dhal1 from "../assets/Dhal 1.png";
import dhal2 from "../assets/Dhal 2.png";
import dhal3 from "../assets/Dhal 3.png";
import dhal4 from "../assets/Dhal 4.png";
import dhal5 from "../assets/Dhal 5.png";
import dhal6 from "../assets/Dhal 6.png";
import dhal7 from "../assets/Dhal 7.png";
import dhal8 from "../assets/Dhal 8.png";
import dhal9 from "../assets/Dhal 9.png";
import dhal10 from "../assets/Dhal 10.png";
import dhal11 from "../assets/Dhal 11.png";
import dhal12 from "../assets/Dhal 12.png";
import beauty1 from "../assets/Beauty 1.png";
import beauty2 from "../assets/Beauty 2.png";
import beauty3 from "../assets/Beauty 3.png";
import beauty4 from "../assets/Beauty 4.png";
import beauty5 from "../assets/Beauty 5.png";
import beauty6 from "../assets/Beauty 6.png";
import beauty7 from "../assets/Beauty 7.png";
import beauty8 from "../assets/Beauty 8.png";
import beauty9 from "../assets/Beauty 9.png";
import Detox1 from "../assets/Detox1.webp";
import Detox2 from "../assets/Detox2.png";

const Product = () => {
  const location = useLocation();
  const { cart, setCart } = useContext(CartContext); // Cart Context for global state
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  // Retrieve category and subcategory from URL query parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    const subcategory = queryParams.get("subcategory");

    if (category) {
      setSelectedCategory(category.replace(/-/g, " "));
    }
    if (subcategory) {
      setSelectedSubcategory(subcategory.replace(/-/g, " "));
    }
  }, [location]);

  // Function to Add Product to Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.name === product.name);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Categories and Products Data
  const categories = {
            "Teas & Infusion": {
                "Green Tea": [
                    { name: "Tulsi Classic Green Tea", img: tea0, price: "₹ 215.00" },
                    { name: "Tulsi Lemon Ginger Tea", img: tea1, price: "₹ 215.00" },
                    { name: "Tulsi Honey Ginger Tea", img: tea2, price: "₹ 265.00" },
                ],
                "Wellness Tea": [
                    { name: "Tulsi Tummy Green Tea", img: tea3, price: "₹ 206.00" },
                    { name: "Assam Black Tea", img: tea4, price: "₹ 195.00" },
                    { name: "Organic Hibiscus Tea", img: tea5, price: "₹ 245.00" },
                ],
                "Infusions": [
                    { name: "Tulsi Ginger Turmeric Tea", img: tea6, price: "₹ 145.00" },
                    { name: "Organic Sweet Rose Tea", img: tea7, price: "₹ 195.00" },
                    { name: "Organic Cinnamon Tea", img: tea8, price: "₹ 195.00" },
                    { name: "Organic Masala Tea", img: tea9, price: "₹ 265.00" },
                    { name: "Kashmiri Kahwa With Saffron", img: tea10, price: "₹ 365.00" },
                ],
            },
            "Health & Wellness": {
                            "Health Care": [
                                { name: "Liver Kidney Care Capsules", img: health1, price: "₹ 250.00" },
                                { name: "Ashwagandha For Stress Relief", img: health2, price: "₹ 250.00" },
                                { name: "Triphala Powder", img: health3, price: "₹ 230.00" },
                                { name: "Skin Capsules For Glowing Skin", img: health4, price: "₹ 250.00" },
                                { name: "Lipid Care For Cholesterol", img: health5, price: "₹ 250.00" },
                                { name: "Sugar Balance Capsules", img: health6, price: "₹ 400.00" },
                            ],
                            "Daily Nutrition": [
                                { name: "Moringa Powder", img: health7, price: "₹ 250.00" },
                                { name: "Organic Turmeric Powder", img: health8, price: "₹ 350.00" },
                                { name: "Organic Flaxseed Oil Capsules", img: health9, price: "₹ 465.00" },
                                { name: "Organic Amala Capsules", img: health10, price: "₹ 250.00" },
                                { name: "Spirulina Capsules", img: health11, price: "₹ 445.00" },
                            ],
                        },
                        "Staple & Packed Food": {
                            "Staple & Packed Food": [
                                { name: "Organic Groundnut Oil 1 Litre", img: staple1, price: "₹ 550.00" },
                                { name: "Organic Gingelly Oil 1 Litre", img: staple2, price: "₹ 669.00" },
                                { name: "Organic Mustard Oil 1 Litre", img: staple3, price: "₹ 430.00" },
                                { name: "Organic Cow Ghee", img: staple4, price: "₹ 849.00" },
                                { name: "Virgin Coconut Oil", img: staple5, price: "₹ 650.00" },
                                { name: "Organic Olive Oil 1 Litre", img: staple6, price: "₹ 999.00" },
                                { name: "Organic Nuts Mixed 1 Kg", img: staple7, price: "₹ 1050.00" },
                                { name: "Organic Pink Rock Salt", img: staple8, price: "₹ 150.00" },
                                { name: "Organic Mustard Seeds", img: staple9, price: "₹ 165.00" },
                                { name: "Organic Red Chilli Powder", img: staple10, price: "₹ 150.00" },
                                { name: "Organic Coriander Powder", img: staple11, price: "₹ 145.00" },
                                { name: "Organic Whole Jeera", img: staple12, price: "₹ 145.00" },
                            ]
                        },
                        "Pulses & Dhals": {
                            "Pulses And Dhals": [
                                { name: "Organic Toor Dhal", price: "₹350.00", img: dhal1 },
                                { name: "Organic Channa Dhal", price: "₹369.00", img: dhal2 },
                                { name: "Organic Moong Dhal", price: "₹230.00", img: dhal3 },
                                { name: "Organic Urad Dhal", price: "₹249.00", img: dhal4 },
                                { name: "Organic Black Channa", price: "₹250.00", img: dhal5 },
                                { name: "Organic Kidney Bean", price: "₹299.00", img: dhal6 },
                                { name: "Organic Red Rice", price: "₹150.00", img: dhal7 },
                                { name: "Organic Rice 1 KG", price: "₹150.00", img: dhal8 },
                                { name: "Organic Black Urad Dhal", price: "₹265.00", img: dhal9 },
                                { name: "Organic White Channa", price: "₹150.00", img: dhal10 },
                                { name: "Organic Massor Dhal", price: "₹145.00", img: dhal11 },
                                { name: "Organic Wheat Flour 1 KG", price: "₹75.00", img: dhal12 },
                            ]
                        },
                        "PersonalCare": {
                            "BodyCare": [
                                { name: "Organic Rose Geranium Body Oil", price: "₹750.00", img: beauty1 },
                                { name: "Organic Body Mist", price: "₹369.00", img: beauty2 },
                                { name: "Organic Men's Body Oil", price: "₹230.00", img: beauty3 },
                            ],
                            "FaceCare": [
                                { name: "Organic Face Serum", price: "₹249.00", img: beauty4 },
                                { name: "Kumkumadhi Face Serum", price: "₹250.00", img: beauty5 },
                                { name: "Organic Neem Face Wash", price: "₹299.00", img: beauty6 },
                            ],
                            "HairCare": [
                                { name: "Organic Bhringraj Hair Oil", price: "₹350.00", img: beauty7 },
                                { name: "Organic Radiance Hair Oil", price: "₹250.00", img: beauty8 },
                                { name: "Organic Hair Shampoo", price: "₹265.00", img: beauty9 },
                            ],
                        },
                        "Detox": {
                            "Detox": [
                                { name: "Organic Natural Detox Kit", price: "₹1450.00", img: Detox1 },
                                { name: "Organic Detox Care", price: "₹369.00", img: Detox2 },
                            ]
                        },
        };
    

  return (
    <div style={{ fontFamily: "Arial" }}>
      {/* Images Section */}
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#FFD700",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <img src={img1} alt="Product 1" style={{ width: "50%", height: "300px" }} />
          <img src={img2} alt="Product 2" style={{ width: "25%", height: "300px" }} />
          <img src={img5} alt="Product 3" style={{ width: "25%", height: "300px" }} />
        </div>
      </div>

      {/* Main Section */}
      <div style={{ display: "flex" }}>
        {/* Left Sidebar - Categories */}
        <div style={{ flex: "1", padding: "20px 10px", borderRight: "1px solid #ddd" }}>
          <h3 style={{ textDecoration: "underline", color: "black", marginBottom: "20px" }}>
            Categories
          </h3>
          {Object.keys(categories).map((category, index) => (
            <div key={index}>
              <h4
                style={{
                  fontWeight: "bold",
                  color: selectedCategory === category ? "#FFD700" : "black",
                  cursor: "pointer",
                  marginBottom: "10px",
                }}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedSubcategory(""); // Reset subcategory
                }}
              >
                {category}
              </h4>
              {selectedCategory === category &&
                categories[selectedCategory] &&
                Object.keys(categories[selectedCategory]).map((subcategory, subIndex) => (
                  <div
                    key={subIndex}
                    style={{
                      marginLeft: "20px",
                      fontSize: "16px",
                      marginBottom: "10px",
                      cursor: "pointer",
                      color: selectedSubcategory === subcategory ? "#FFD700" : "black",
                    }}
                    onClick={() => setSelectedSubcategory(subcategory)}
                  >
                    - {subcategory}
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Center Content - Products */}
        <div style={{ flex: "3", padding: "10px" }}>
          {selectedCategory &&
            categories[selectedCategory] &&
            Object.keys(categories[selectedCategory]).map((subcategory, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#F5F5F5",
                  marginBottom: "20px",
                  padding: "15px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <h3 style={{ textAlign: "center", color: "black", marginBottom: "10px" }}>
                  {subcategory}
                </h3>
                {(!selectedSubcategory || selectedSubcategory === subcategory) && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "20px",
                      justifyContent: "center",
                    }}
                  >
                    {categories[selectedCategory][subcategory].map((product, index) => (
                      <div
                        key={index}
                        style={{
                          border: "1px solid #ddd",
                          borderRadius: "10px",
                          padding: "10px",
                          width: "300px",
                          textAlign: "center",
                          backgroundColor: "#fff",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        }}
                      >
                        <img
                          src={product.img || "https://via.placeholder.com/150"}
                          alt={product.name}
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                            borderRadius: "10px",
                            marginBottom: "10px",
                          }}
                        />
                        <h4 style={{ fontWeight: "bold", color: "#333" }}>{product.name}</h4>
                        <p
                          style={{
                            fontSize: "16px",
                            color: "#6B8E23",
                            marginBottom: "10px",
                          }}
                        >
                          {product.price || "0.00"}
                        </p>
                        <button
                          onClick={() => addToCart(product)}
                          style={{
                            padding: "10px 20px",
                            backgroundColor: "#6B8E23",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
