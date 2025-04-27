import React, { useState } from "react";
import contactLogo from "../assets/contactlogo.png"; // Your main logo
import logo1 from "../assets/logo1.png"; // The overlay logo

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      formData.name.trim() === "" ||
      formData.contact.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    const nameRegex = /^[a-zA-Z\s]+$/;
    const contactRegex = /^\d{10}$/;

    if (!nameRegex.test(formData.name)) {
      alert("Name should contain text only.");
      return;
    }

    if (!contactRegex.test(formData.contact)) {
      alert("Contact number should be exactly 10 digits.");
      return;
    }

    // Save form data to local storage
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false); // Close the overlay
  };

  return (
    <div className={`container py-5 ${isSubmitted ? "overlay-background" : ""}`}>
      {!isSubmitted ? (
        <>
          <h1 className="text-center mb-4">How We Can Help You?</h1>
          <div className="text-center">
            <img src={contactLogo} alt="Contact Logo" className="img-fluid" style={{ width: "150px" }} />
          </div>
          <p className="text-center mt-3">
            <strong>GET IN TOUCH WITH US</strong><br />
            Queries / Feedback / Complaints<br />
            We are extremely sorry that you are having a complaint with our product or services and regret the inconvenience. 
            We will make every effort to provide you with the best support.
          </p>
          <p className="text-center">
            <strong>Call us:</strong> 18001084488 (From 10 AM to 7 PM, Monday to Saturday)<br />
            <strong>Email:</strong> care@mnorganicproducts.com<br />
            <strong>For International Business:</strong> export@mnorganicproducts.com
          </p>
          <hr />
          <form className="mt-4 form-container" onSubmit={handleSubmit}>
            <h2 className="text-center">Get In Touch</h2>
            <h3 className="text-center">Drop us a Message</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="input-group input-container">
                    <span className="input-group-text" style={{height:"130px"}}><i className="bx bx-group" ></i></span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{height:"130px"}}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="input-group input-container">
                    <span className="input-group-text" style={{height:"130px"}}><i className="bx bx-phone"></i></span>
                    <input
                      type="phone"
                      name="contact"
                      placeholder="Contact"
                      className="form-control"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      style={{height:"130px"}}

                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="input-group input-container">
                    <span className="input-group-text" style={{height:"130px"}}><i className="bx bx-envelope"></i></span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      style={{height:"130px"}}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3 textarea-container">
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="form-control input-container"
                    style={{ width: "100%", height: "200px" }}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn">Submit</button>
            </div>
          </form>
        </>
      ) : (
        <div className="overlay">
          <button className="close-button" onClick={handleClose}>X</button>
          <div className="overlay-content">
            <img src={logo1} alt="Logo" style={{ width: "150px" }} />
            <h2>Thank you for Contacting Us!</h2>
            <p>Our Experts will contact you ASAP!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
