import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/./AboutUs.css";
import NavBar from "./NavBar";
import hospitalImage from "../images/hospital.png"; // Import the hospital image

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div className="hospital-image-container">
        <img
          src={hospitalImage} // Use the imported hospital image
          alt="Hospital"
          className="hospital-image"
        />
      </div>

      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col text-custom-blue space-y-8 w-3/5 p-8 bg-gray-800 shadow-lg rounded-lg transition-transform duration-10000 ease-in-out transform hover:scale-105">
          <div className="space-y-4">
            <h1 className="text-lg font-mono text-center">About Us</h1> {/* Center align the "About Us" heading */}
            <div className="about-content text-left"> {/* Left align the content */}
              <h2>Who We Are</h2>
              <p>
                As healthcare professionals and technology experts, we're transforming  secure electronic health record (SEHR) management through our secure and intuitive platform.
                We combine medical expertise with innovative technology to create an (SEHR) system
                that streamlines workflow while maintaining the highest standards of data protection.
              </p>

              <h2>What We Do</h2>
              <p>
               We've built an all-in-one SEHR platform that seamlessly connects doctors, patients, and diagnostic facilities.
               By harnessing blockchain technology and smart contracts,
               we ensure your medical data remains private, secure, and accessible only to authorized parties.
               Our Ethereum-based infrastructure creates a permanent, tamper-resistant record of all transactions while giving you complete control over your health information.
              </p>

              <h3>For Doctors</h3>
              <p>
                Medical professionals gain instant access to their patient roster, complete medical histories,
                and can seamlessly document clinical notes and treatment strategies - all in one integrated platform.
              </p>

              <h3>For Patients</h3>
              <p>
                Patients can view their own medical records and history, upload
                new medical records, test reports, and other documents, and
                grant access to doctors.
              </p>

              <h3>For Diagnostic Centers</h3>
              <p>
                Diagnostic Centers can view comments and treatment plans from
                doctors and upload SEHR reports to patient records.
              </p>

              <h2>Our Commitment</h2>
              <p>
                Your privacy and data security are at the heart of everything we do. Through advanced authentication protocols,
                we guarantee that your medical records remain strictly confidential and accessible only to those you explicitly authorize. 
                You maintain full control over your health information, with the ability to grant or withdraw access privileges at any time.
              </p>

              <h2>Contact Us</h2>
              <p>
                We'd love to hear from you! If you have any questions or
                feedback, please feel free to contact us on Phone: +123 456 7890 , Email: example@company.com.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="flex justify-center">
        <button
          className="bg-teal-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-600"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
