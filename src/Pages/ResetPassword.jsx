import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomNavbar from "../components/CustomNavbar";
import { Password } from "primereact/password";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams();

  const resetPasswordHandler = async () => {
    if (password === confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      let passwordRequest = {
        token,
        password,
        confirmPassword,
      };
      console.log(passwordRequest);
      let res = await fetch("https://localhost:7189/api/Auth/resetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(passwordRequest),
      });

      let data = await res.json();
      if (res.ok) {
        toast.success(data.status);
        navigate("/home");
      }
      else 
        toast.error(data.status);
    }
    else 
        toast.error("Please check your password");
  };

  return (
    <div>
      <CustomNavbar
        mClass="menu_four"
        cClass="custom_container p0"
        nClass="pl_120 mr-auto ml-auto"
        hbtnClass="menu_cus"
      />
      <ToastContainer position="top-right" />

      <div className="reset-password">
        <h6>Reset your password</h6>
        <input
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <input
          placeholder="Enter your password again"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
        />
        <button onClick={resetPasswordHandler}>Reset Password</button>
      </div>
    </div>
  );
};

export default ResetPassword;
