import { ToastContainer, toast } from "react-toastify";
import CustomNavbar from "../components/CustomNavbar";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import "../index.css";
import useTokenExpiration from "../customHooks/useTokenExpiration";

const ForgotPassword = () => {
  useTokenExpiration();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const sendPasswordResetRequest = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (email.length > 0) {
      try {
        let res = await fetch(
          "https://localhost:7189/api/Auth/forgotPassword",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(email),
          }
        );
        setLoading(false);
        if (res.ok)
          toast.success("Password reset link succesfully sent to your email!");
        else toast.error("There is no account with this email!");
      } catch {
        setLoading(false);
        toast.error("Something went wrong!");
      }
    } else toast.error("Please input valid email adress!");
  };

  return (
    <div>
      {loading && (
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
      <form
        onSubmit={sendPasswordResetRequest}
        className="d-flex flex-column w-25 m-auto mt-5 gap-3"
      >
        <h6 style={{ fontSize: "32px" }} className="m-auto">
          Enter your email
        </h6>
        <input
          onChange={(e) => setEmail(e.currentTarget.value)}
          value={email}
          type="email"
          className="form-control"
          required
          placeholder="info@example.com"
        />
        <button type="submit" className="btn btn-primary">
          Send request!
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
