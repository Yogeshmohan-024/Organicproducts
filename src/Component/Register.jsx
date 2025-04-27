import React, { useState } from "react";
import logo1 from "../assets/logo1.png"; // Logo image


const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Registration data:", formData);
    alert("Registered Successfully!");
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100  ">
      <div className="row shadow rounded p-4 w-100" style={{ maxWidth: "500px", marginTop:"50px", backgroundColor: "#6B8E23"}}>
        <div className="text-center mb-3">
          <img src={logo1} alt="Logo" className="img-fluid" style={{ width: "200px" }} />
        </div>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3 input-group">
            <span className="input-group-text" style={{height:"70px",border: "2px solid #FFD700"}}>
              <i className="bx bx-user" ></i> {/* Box Icon for Name */}
            </span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
              style={{height:"70px" ,border: "2px solid #FFD700"}}
            />
          </div>

          {/* Phone */}
          <div className="mb-3 input-group">
            <span className="input-group-text" style={{height:"70px",border: "2px solid #FFD700"}}>
              <i className="bx bx-phone"></i> {/* Box Icon for Phone */}
            </span>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{height:"70px",border: "2px solid #FFD700"}}
            />
          </div>

          {/* Email */}
          <div className="mb-3 input-group">
            <span className="input-group-text" style={{height:"70px",border: "2px solid #FFD700"}}>
              <i className="bx bx-envelope" ></i> {/* Box Icon for Email */}
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
              style={{height:"70px",border: "2px solid #FFD700"}}
            />
          </div>

          {/* Password */}
          <div className="mb-3 input-group">
            <span className="input-group-text" style={{height:"70px",border: "2px solid #FFD700"}}>
              <i className="bx bx-lock" ></i> 
              {/* Box Icon for Password */}
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
              style={{height:"70px",border: "2px solid #FFD700"}}
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3 input-group">
            <span className="input-group-text" style={{height:"70px",border: "2px solid #FFD700"}}>
              <i className="bx bx-lock" ></i> {/* Box Icon for Confirm Password */}
            </span>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="form-control"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={{height:"70px",border: "2px solid #FFD700"}}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
