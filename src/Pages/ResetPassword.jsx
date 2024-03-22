import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import CustomNavbar from "../components/CustomNavbar";
import { ThreeDots } from "react-loader-spinner";
import "../index.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(isLoading);
    if (password === confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      let passwordRequest = {
        token,
        password,
        confirmPassword,
      };
  
      try {
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
        } else {
          toast.error(data.status);
        }
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setIsLoading(false); // Set isLoading to false after the fetch operation completes
      }
    } else {
      setIsLoading(false);
      toast.error("Please check your password");
    }
  };
  return (
    <div>
      {isLoading && (
        <div className="Loading">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      <CustomNavbar
        mClass="menu_four"
        cClass="custom_container p0"
        nClass="pl_120 mr-auto ml-auto"
        hbtnClass="menu_cus"
      />
      <ToastContainer position="top-right" />

      <form
        onSubmit={resetPasswordHandler}
        className="d-flex flex-column w-25 m-auto mt-5 gap-3"
      >
        <h6 style={{ fontSize: "32px" }} className="m-auto">
          Reset your password
        </h6>
        <input
          required
          placeholder="Enter your password"
          type="password"
          value={password}
          className="form-control"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <input
          required
          placeholder="Enter your password again"
          type="password"
          className="form-control"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
        />
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default ResetPassword;
