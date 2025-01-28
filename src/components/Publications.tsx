import React from "react";
import "../assets/styles/Contact.scss";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function Publications() {
  const email = "ishanid@umich.edu"; // Replace with your email
  const subject = "";
  const body = "";

  // ----------
  const buttonStyle = {
    backgroundImage: "url(../assets/images/aura.png)", // Replace with your image URL
    backgroundSize: "cover", // Ensures the image covers the button
    backgroundPosition: "center", // Centers the image
    border: "none", // Removes the default button border
    padding: "10px 20px", // Adds some padding inside the button
    color: "white", // Sets text color
    fontSize: "16px", // Font size
    cursor: "pointer", // Changes the cursor to pointer
  };

  // ----------

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Click on the button below to send me an email!</p>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            href={`mailto:${email}?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`}
            sx={{
              backgroundColor: "#5000ca", // Custom background color
            }}
          >
            Send Email
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Publications;
