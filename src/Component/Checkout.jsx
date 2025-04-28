import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import upiImg from "../assets/upi.png";
import walletImg from "../assets/wallet.png";
import debitImg from "../assets/debit.png";
import netbankImg from "../assets/netbank.png";
import codImg from "../assets/cod.png";
import deliveryImg from "../assets/delivery.avif";
import popupImg from "../assets/popup.png"; // Import the popup image


const CheckoutPage = () => {
    const [estimatedDeliveryDate, setEstimatedDeliveryDate] = useState("");
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [paymentOption, setPaymentOption] = useState("");
    const [cart, setCart] = useState([]);
    const [discount, setDiscount] = useState(15); // Example discount percentage
    const [showPopup, setShowPopup] = useState(false); // Popup visibility state
    const [popupMessage, setPopupMessage] = useState("");

    // Calculate Estimated Delivery Date (2 days from today)
    useEffect(() => {
        const today = new Date();
        const deliveryDate = new Date(today);
        deliveryDate.setDate(today.getDate() + 2);
        const formattedDate = `${deliveryDate.toLocaleDateString("en-US", { weekday: "long" })}, ${deliveryDate.getDate()}/${deliveryDate.getMonth() + 1}`;
        setEstimatedDeliveryDate(formattedDate);

        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    // Toggle popup with custom message
    const togglePopup = (message) => {
        setPopupMessage(message);
        setShowPopup(!showPopup);
    };

    // Helper: Sanitize Price
    const sanitizePrice = (price) => parseFloat(price.replace(/[^\d.-]/g, "")) || 0;

    // Calculate Total Price
    const calculateTotalPrice = () => {
        return cart.reduce((sum, item) => sum + sanitizePrice(item.price) * item.quantity, 0);
    };

    // Calculate Discounted Price
    const calculateDiscountPrice = () => {
        const totalPrice = calculateTotalPrice();
        const discountAmount = (totalPrice * discount) / 100;
        return discountAmount.toFixed(2); // Rounded to 2 decimal places
    };

    // Calculate Order Total
    const calculateOrderTotal = () => {
        const totalPrice = calculateTotalPrice();
        const discountAmount = calculateDiscountPrice();
        const orderTotal = totalPrice - discountAmount;
        return orderTotal.toFixed(2); // Rounded to 2 decimal places
    };
    // Delete Item
  const deleteItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };


    return (
        <div className="container mt-5" style={{ fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ textAlign: "left" }}>Products Details</h2>
            <div className="row">
                {/* Column 1 */}
                <div className="col-md-8">
                    {/* Estimated Delivery */}
                    <div className="d-flex justify-content-between align-items-center mb-3 p-3" style={{ border: "1px solid #ddd", borderRadius: "10px" }}>
                        <h5>Estimated Delivery:</h5>
                        <p>{estimatedDeliveryDate}</p>
                    </div>

                    {/* Product Details */}
                    {cart.map((item, index) => (
                        <div
                            key={index}
                            className="d-flex justify-content-between align-items-center mb-3 p-3"
                            style={{ border: "1px solid #ddd", borderRadius: "10px" }}
                        >
                            {/* Product Image */}
                            <img
                                src={item.img || "https://via.placeholder.com/150"}
                                alt={item.name || "Product"}
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    objectFit: "cover",
                                    borderRadius: "5px",
                                    marginRight: "20px"
                                }}
                            />
                            <div>
                                <h5>{item.name}</h5>
                                <p>Qty: {item.quantity}</p>
                                <h6>₹ {sanitizePrice(item.price) * item.quantity}</h6>
                            </div>
                            {/* Delete Icon */}
                            <button
                                className="btn btn-danger"
                                onClick={() => deleteItem(index)}
                            >
                                Delete
                            </button>
                        </div>

                    ))}

                    {/* Sold By and Free Delivery */}
                    <div className="d-flex justify-content-between align-items-center mb-3 p-3" style={{ border: "1px solid #ddd", borderRadius: "10px" }}>
                        <p>Sold By:<br />Thiyoo Organic Products Pvt Ltd</p>
                        <p style={{ color: "green", fontWeight: "bold" }}>Free Delivery</p>
                    </div>

                    {/* Delivery Address */}
                    <div className="p-3 mb-3" style={{ border: "1px solid #ddd", borderRadius: "10px" }}>
                        <h5>Delivery Address</h5>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your delivery address"
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                        />
                    </div>

                    {/* Payment Options */}
                    <div className="p-3" style={{ border: "1px solid #ddd", borderRadius: "10px" }}>
                        <h5 style={{ textAlign: "center", marginBottom: "20px" }}>Payment Options</h5>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(1, 1fr)",
                                gap: "20px",
                            }}
                        >
                            {/* UPI Option */}
                            <div
                                className="d-flex flex-row align-items-center"
                                style={{
                                    border: "1px solid #ddd",
                                    borderRadius: "10px",
                                    padding: "10px",
                                    textAlign: "center",
                                }}
                            >
                                <input
                                    type="radio"
                                    name="paymentOption"
                                    id="upi"
                                    value="UPI"
                                    onChange={(e) => setPaymentOption(e.target.value)}
                                />
                                <img
                                    src={upiImg}
                                    alt="UPI"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        margin: "10px 0",
                                        borderRadius: "50%",
                                    }}
                                />
                                <label htmlFor="upi">Pay By Any UPI App</label>
                            </div>

                            {/* Wallet */}
                            <div
                                className="d-flex flex-row align-items-center"
                                style={{
                                    border: "1px solid #ddd",
                                    borderRadius: "10px",
                                    padding: "10px",
                                    textAlign: "center",
                                }}
                            >
                                <input
                                    type="radio"
                                    name="paymentOption"
                                    id="wallet"
                                    value="Wallet"
                                    onChange={(e) => setPaymentOption(e.target.value)}
                                />
                                <img
                                    src={walletImg}
                                    alt="Wallet"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        margin: "10px 0",
                                        borderRadius: "50%",
                                    }}
                                />
                                <label htmlFor="wallet">Wallet</label>
                            </div>

                            {/* Debit/Credit Card */}
                            <div
                                className="d-flex flex-row align-items-center"
                                style={{
                                    border: "1px solid #ddd",
                                    borderRadius: "10px",
                                    padding: "10px",
                                    textAlign: "center",
                                }}
                            >
                                <input
                                    type="radio"
                                    name="paymentOption"
                                    id="card"
                                    value="Card"
                                    onChange={(e) => setPaymentOption(e.target.value)}
                                />
                                <img
                                    src={debitImg}
                                    alt="Debit/Credit Card"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        margin: "10px 0",
                                        borderRadius: "50%",
                                    }}
                                />
                                <label htmlFor="card">Debit/Credit Card</label>
                            </div>

                            {/* Net Banking */}
                            <div
                                className="d-flex flex-row align-items-center"
                                style={{
                                    border: "1px solid #ddd",
                                    borderRadius: "10px",
                                    padding: "10px",
                                    textAlign: "center",
                                }}
                            >
                                <input
                                    type="radio"
                                    name="paymentOption"
                                    id="netBanking"
                                    value="Net Banking"
                                    onChange={(e) => setPaymentOption(e.target.value)}
                                />
                                <img
                                    src={netbankImg}
                                    alt="Net Banking"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        margin: "10px 0",
                                        borderRadius: "50%",
                                    }}
                                />
                                <label htmlFor="netBanking">Net Banking</label>
                            </div>

                            {/* Cash on Delivery */}
                            <div
                                className="d-flex flex-row align-items-center"
                                style={{
                                    border: "1px solid #ddd",
                                    borderRadius: "10px",
                                    padding: "10px",
                                    textAlign: "center",
                                }}c
                            >
                                <input
                                    type="radio"
                                    name="paymentOption"
                                    id="cod"
                                    value="COD"
                                    onChange={(e) => setPaymentOption(e.target.value)}
                                />
                                <img
                                    src={codImg}
                                    alt="Cash on Delivery"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        margin: "10px 0",
                                        borderRadius: "50%",
                                    }}
                                />
                                <label htmlFor="cod">Cash on Delivery</label>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 2: Price Details and Buttons */}
                <div className="col-md-4">
                    <div className="p-3" style={{ border: "1px solid #ddd", borderRadius: "10px" }}>
                        <h5>Price Details</h5>
                        <p>No of Items: {cart.length}</p>
                        <p>Total Price: ₹ {calculateTotalPrice()}</p>
                        <p>Discount Price: - ₹ {calculateDiscountPrice()}</p>
                        <hr />
                        <h5>Order Total: ₹ {calculateOrderTotal()}</h5>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-3">
                        <button
                            className="btn btn-warning btn-block mb-2"
                            style={{ width: "100%", marginTop: "20px" }}
                            onClick={() => togglePopup("Order Cannot be Return/Exchanged while in Shipping!\n\nOnce you receive Order you can proceed with Return/Exchange.")}
                        >
                            Returns/Exchange
                        </button>
                        <button
                            className="btn btn-danger btn-block mb-2"
                            style={{ width: "100%", marginTop: "20px" }}
                            onClick={() => togglePopup("Thank you!\n\nYour Order Cancelled Successfully!")}
                        >
                            Cancel
                        </button>
                        <button
                            className="btn btn-success btn-block"
                            style={{ width: "100%", marginTop: "20px" }}
                            onClick={() => togglePopup("Payment Successful\n\nYAH! YOUR ORDER PLACED!")}
                        >
                            Place Order
                        </button>
                    </div>
                    <hr></hr>
                    {/* Last Row */}
                    <div className="d-flex justify-content-between align-items-center mt-5 p-3" style={{ borderTop: "1px solid #ddd" }}>
                        {/* Column 1 */}
                        <div className="col-6">
                            <h5 style={{ whiteSpace: "pre-wrap" }}>
                                100% Safe {"\n"}Your Safety, Our Priority {"\n"}We make sure that your package is safe at every point of contact.
                            </h5>
                        </div>

                        {/* Column 2 */}
                        <div className="col-6 text-center">
                            <img
                                src={deliveryImg} // Ensure this image is correctly placed in your project
                                alt="Safe Delivery"
                                style={{
                                    width: "100%",
                                    maxWidth: "250px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Popup Component */}
            {showPopup && (
                <div
                    className="popup"
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#6B8E23",
                        color: "#FFD700",
                        padding: "20px",
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        textAlign: "center",
                        zIndex: 1000,
                    }}
                >
                    {/* Popup Image */}
                    <img
                        src={popupImg} // Use the imported image
                        alt="Popup Illustration"
                        style={{
                            width: "200px",
                            height: "auto",
                            marginBottom: "15px",
                            borderRadius: "10px",
                        }}
                    />
                    <h5 style={{ marginBottom: "15px", whiteSpace: "pre-wrap" }}>
                        {popupMessage}
                    </h5>
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowPopup(false)} // Close the popup
                    >
                        Close
                    </button>
                </div>
            )}

            {/* Overlay for Popup */}
            {showPopup && (
                <div
                    className="overlay"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 999,
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
                    }}
                    onClick={() => setShowPopup(false)} // Close popup when clicking outside
                ></div>

            )}
        </div>
    );
};

export default CheckoutPage;

