import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";

const containerStyle = {
  display : "flex",
  alignItems : "center",
  justifyContent : "center",
  flexDirection : "column",
  gap : "20px",  
  maxWidth: "600px",
  margin: "50px auto",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  fontFamily: "Arial, sans-serif",
};

const logoStyle = {
  maxWidth: "300px",
  margin: "0 auto",
};

const headerStyle = {
  color: "#333",
};

const paragraphStyle = {
  color: "#666",
  marginBottom: "20px",
};

const EmailConfirmationPage = () => {
  const { id, token } = useParams();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id && token) {
      try {
        fetch(`https://localhost:7189/api/Auth/confirmEmail/${id}/${token}`)
          .then((res) => res.text())
          .then((data) => {
            setIsConfirmed(data);
            setIsLoading(false);
          });
      } catch (e) {
        toast.error("Unexpected error");
      }
    }
  }, [id, token]);

  return isLoading ? (
    <div style={containerStyle}>
      <ThreeDots />
    </div>
  ) : isConfirmed ? (
    <div style={containerStyle}>
      <img
        alt="logo"
        height="auto"
        src="https://shipshareblobstorage.blob.core.windows.net/images/logoL.png"
        style={logoStyle}
        width="200"
      />{" "}
      <h1 style={headerStyle}>Email Successfully Confirmed</h1>
      <p style={paragraphStyle}>
        Congratulations! Your email address has been successfully confirmed.
        You're now officially part of our community!
      </p>
      <p style={paragraphStyle}>
        Thank you for verifying your email. You're all set to receive updates,
        notifications, and exclusive offers straight to your inbox.
      </p>
      <p style={paragraphStyle}>
        If you have any questions or need assistance, feel free to reach out to
        our support team at{" "}
        <a href="mailto:shipshareproject@gmail.com">
          shipshareproject@gmail.com
        </a>
        .
      </p>
      <p style={paragraphStyle}>Welcome aboard!</p>
    </div>
  ) : (
    <div style={containerStyle}>
      <img
        alt="logo"
        height="auto"
        src="https://shipshareblobstorage.blob.core.windows.net/images/logoL.png"
        style={logoStyle}
        width="200"
      />{" "}
      <h1 style={headerStyle}>Invalid Token</h1>
      <p style={paragraphStyle}>
        Oops! It seems like the token you provided is invalid or has expired.
      </p>
      <p style={paragraphStyle}>
        Please make sure you have the correct token and try again. If you
        continue to experience issues, please contact our support team for
        assistance.
      </p>
      <p style={paragraphStyle}>
        You can reach us at{" "}
        <a href="mailto:shipshareproject@gmail.com">
          shipshareproject@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default EmailConfirmationPage;
