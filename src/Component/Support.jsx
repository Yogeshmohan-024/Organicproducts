import React, { useState } from "react";
import logo1 from "../assets/logo1.png"; // Logo image

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "", // New field added
  });

  const [showPopup, setShowPopup] = useState(false); // Popup visibility state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Name (Text Only)
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(formData.name)) {
      alert("Name should only contain letters.");
      return;
    }

    // Validate Mobile Number (10 Digits Only)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      alert("Mobile number must be 10 digits.");
      return;
    }

    // Show success popup
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100  ">
      <div className="row bg- #6B8E23 shadow rounded p-4 w-100" style={{ maxWidth: "1000px", maxHeight:"auto", backgroundColor: "#6B8E23" }}>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={logo1} alt="Logo" className="img-fluid" />
        </div>
        <div className="col-md-6" style={{marginTop:"50px"}}>
          <h2 className="text-center mb-4">We Care for You!!</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ backgroundColor: " #FFD700", border: "1px solid #ccc", color: "black", marginTop:"20px" }}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                id="mobile"
                name="mobile"
                placeholder="Mobile Number"
                className="form-control"
                value={formData.mobile}
                onChange={handleChange}
                required
                style={{ backgroundColor: " #FFD700", border: "1px solid #ccc", color: "black",marginTop:"20px" }}
              />
            </div>
            <div className="mb-3">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ backgroundColor:  " #FFD700", border: "1px solid #ccc", color: "black",marginTop:"20px" }}
              />
            </div>
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: " #FFD700",
                color: "black",
                padding: "20px",
                display: "block",
                margin: "0 auto",
                width: "fit-content",
                marginTop:"20px"
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {showPopup && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
          <div className="bg-white p-4 rounded text-center position-relative">
            <button
              className="btn-close position-absolute top-0 end-0 m-2"
              aria-label="Close"
              onClick={handleClosePopup}
            ></button>
            <h2>Submitted Successfully!</h2>
            <p>Your Queries Submitted successfully.</p>
            <button className="btn btn-primary" onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportPage;
