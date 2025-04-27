import React from "react";
import organicimg from "../assets/Organic.jpeg"; // Importing the image for the first section
import aboutimg1 from "../assets/1.jpg";
import ourvalues from "../assets/th_480x480.jpg"; // Importing the image for the third section
import ourValuesImg from "../assets/ourvalues.png"; // Importing the image for the fourth section
import ourCommitmentsImg from "../assets/ourcommitments.png"; // Importing the image for the fourth section

const AboutUs = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Who We Are ?</h1>

      {/* First Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img src={organicimg} className="img-fluid rounded" alt="Organic Farming" style={{ width: "500px" }} />
        </div>
        <div className="col-md-6">
          <p>
            <div className="bg-light p-3 rounded mb-3" style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}>
              About the Company
            </div>
            At the heart of ORGANIC INDIA is our commitment to be a living
            embodiment of love and consciousness in action. We work with thousands
            of small family farmers in India to cultivate tens of thousands of acres of
            sustainable organic farmland. AII ORGANIC INDIA products support health
            and True Wellness and are made with loving care. Each product is one link
            in a chain of connectedness between Mother Nature, our farmers and you.
            By choosing ORGANIC INDIA you are completing this chain, actively
            participating in our mission to create a sustainable environment of True
            Wellness, providing training and a life of dignity to our farmers, and
            bringing health, happiness and True Wellness to you. The farmers also
            rotate between growing crops on their land for ORGANIC INDIA with food
            crops for themselves. This means farming families are supported by a
            sustainable income, while at the same time improving and preserving their
            own health.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="container py-5">
        <div className="row align-items-center mb-5">
          {/* Image Column */}
          <div className="col-md-2 order-md-1">
            <img
              src={aboutimg1}
              className="img-fluid rounded"
              alt="Our Vision"
              style={{ width: "200px" }}
            />
          </div>

          {/* Text Column */}
          <div className="col-md-10 order-md-2">
            <h2>Our Vision</h2>
            <p>
              To be a Vehicle of Consciousness in the global market by creating a holistic,
              sustainable business modality, which inspires, promotes and supports True Wellness
              and respect for all Beings and for Mother Nature.
            </p>
          </div>
        </div>
      </div>

      {/* Third Section - Our Values (Displayed as a Paragraph) */}
      <div className="row align-items-center mb-5">
        <div className="col-md-2 order-md-1">
          <img src={ourvalues} className="img-fluid rounded" alt="Our Values" style={{ width: "200px" } }/>
        </div>
        <div className="col-md-10 order-md-1">
          <h2>Our Values</h2>
          <p>
            Service to all, Total integrity, Absolute commitment to quality, Respect and devotion to Mother Nature,
            No compromise on who we are.
          </p>
        </div>
      </div>
      {/* Fourth Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-2 order-md-1">
          <img
            src={ourValuesImg}
            className="img-fluid rounded"
            alt="Our Values"
            style={{ width: "200px" }}
          />
        </div>
        <div className="col-md-10 order-md-1">
          <h2>Our Values</h2>
          <p>
            Service to all, Total integrity, Absolute commitment to quality, Respect and devotion to Mother Nature, 
            No compromise on who we are.
          </p>
        </div>
      </div>
       {/* Fifth Section */}
       <div className="row align-items-center mb-5">
        <div className="col-md-2 order-md-1">
          <img
            src={ourCommitmentsImg}
            className="img-fluid rounded"
            alt="Our Commitment"
            style={{ width: "200px" }}
          />
        </div>
        <div className="col-md-10 order-md-1">
          <h2>Our Commitment</h2>
          <p>
            To deliver genuine organic foods and products to our consumers. To introduce a unique and successful
            business model that is committed to service and integrity, and benefits all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
