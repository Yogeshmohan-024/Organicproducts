import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const AddToCart = () => {
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState(""); // State for coupon
  const [discount, setDiscount] = useState(0); // Discount percentage
  const [isCouponApplied, setIsCouponApplied] = useState(false); // Coupon applied flag

  // Load Cart from LocalStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Helper: Sanitize Price
  const sanitizePrice = (price) => {
    return parseFloat(price.replace(/[^\d.-]/g, "")) || 0;
  };

  // Update Quantity
  const updateQuantity = (index, delta) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += delta;
    if (updatedCart[index].quantity < 1) {
      updatedCart[index].quantity = 1; // Minimum quantity should be 1
    }
    setCart(updatedCart);
  };

  // Delete Item
  const deleteItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Apply Coupon Logic
  const applyCoupon = () => {
    if (coupon === "MYFIRSTPRODUCTS") {
      setDiscount(15); // Apply 15% discount
      setIsCouponApplied(true); // Mark coupon as applied
    } else {
      alert("Invalid coupon code. Please try again."); // Show alert for invalid coupon
      setDiscount(0); // Reset discount if invalid
      setIsCouponApplied(false); // Ensure coupon is not applied
    }
  };

  // Calculate Total Price
  const calculateTotal = () => {
    return cart.reduce((sum, item) => {
      const itemPrice = sanitizePrice(item.price);
      return sum + itemPrice * item.quantity;
    }, 0);
  };

  // Calculate Discounted Price
  const calculateDiscountedTotal = () => {
    const total = calculateTotal();
    const discountedTotal = total - (total * discount) / 100;
    return discountedTotal.toFixed(2); // Round to 2 decimal places
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Cart</h2>

      {/* Cart Items */}
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div
            key={index}
            className="row align-items-center mb-3"
            style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px" }}
          >
            {/* Product Image */}
            <div className="col-md-3 text-center">
              <img
                src={item.img || "https://via.placeholder.com/150"}
                alt={item.name || "Product"}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>

            {/* Product Details */}
            <div className="col-md-3">
              <h5 style={{ fontWeight: "bold", color: "#333" }}>{item.name}</h5>
              <p style={{ margin: "0", color: "#666" }}>Weight: {"500g"}</p>
            </div>

            {/* Quantity Management */}
            <div className="col-md-2 text-center">
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-outline-secondary mx-1"
                  onClick={() => updateQuantity(index, -1)}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="btn btn-outline-secondary mx-1"
                  onClick={() => updateQuantity(index, 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="col-md-2 text-center">
              <h5 style={{ color: "#6B8E23" }}>
                ₹ {sanitizePrice(item.price) * item.quantity}
              </h5>
            </div>

            {/* Delete Button */}
            <div className="col-md-2 text-center">
              <button
                className="btn btn-danger"
                onClick={() => deleteItem(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}

      <hr />

      {/* Apply Coupon Section */}
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Coupon Code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)} // Update coupon state
          />
        </div>
        <div className="col-md-6 text-center">
          <button
            className={`btn btn-${isCouponApplied ? "success" : "primary"}`}
            onClick={applyCoupon}
            disabled={isCouponApplied} // Disable button if coupon is applied
          >
            {isCouponApplied ? "Coupon Applied" : "Apply Coupon"} {/* Dynamic button text */}
          </button>
        </div>
      </div>

      <hr />

      {/* Total Price Section */}
      {cart.length > 0 && (
        <div className="row">
          <div className="col-md-8 text-right">
            <h5>Total Price: ₹ {calculateTotal()}</h5>
            {discount > 0 && (
              <h6 style={{ color: "green" }}>
                Discount Applied: - ₹{" "}
                {(calculateTotal() - calculateDiscountedTotal()).toFixed(2)}
              </h6>
            )}
            <h5 style={{ fontWeight: "bold" }}>
              Final Price: ₹ {calculateDiscountedTotal()}
            </h5>
          </div>
          <div className="col-md-4 text-center">
          <Link
              to="/checkout"
              style={{
                display: "inline-block",
                marginTop: "30px",
                padding: "10px 20px",
                backgroundColor: "#6b8e23",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
