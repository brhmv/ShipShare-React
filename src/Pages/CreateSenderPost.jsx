import React, { useState } from "react";
import "../assets/CreateSenderPost.css";
import CustomNavbar from "../components/CustomNavbar";
import Footer from "../components/Footer/Footer";
import FooterData from "../components/Footer/FooterData";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTokenExpiration from "../customHooks/useTokenExpiration";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

function CreateSenderPost() {
  useTokenExpiration();
  const [description, setDescription] = useState("");
  const [startDestination, setStartDestination] = useState("");
  const [endDestination, setEndDestination] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [itemType, setItemType] = useState("");
  const [itemTitle, setItemTitle] = useState("");
  const [itemWeight, setItemWeight] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.scrollTo({top: 0,behavior : "smooth"});
    setIsLoading(true);
    try {
      let formData = new FormData();
      formData.append("Description", description);
      formData.append("StartDestination", startDestination);
      formData.append("EndDestination", endDestination);
      formData.append("DeadlineDate", deadlineDate);
      formData.append("ItemType", itemType);
      formData.append("ItemWeight", +itemWeight);
      formData.append("Price", +price);
      formData.append("ItemPhotos", image);
      formData.append("Title", itemTitle);

      const accessToken = Cookies.get("accessToken");
      const response = await fetch(
        "https://localhost:7189/api/SenderPost/createSenderPost",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        toast.success("Sender Post Created Succesfully!", {
          position: "top-right",
        });
        setTimeout(() => {
          setIsLoading(false);
          navigate("/profile");
        }, 2000);
      } else {
        toast.error("Failed to create post!", {
          position: "top-right",
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  var itemCategories = [
    "Documents & Books",
    "Health & Beauty",
    "Food & Beverages",
    "Toys & Games",
    "Clothing",
    "Sports & Outdoor",
    "Furniture",
    "Electronics",
    "Automotive",
    "other",
  ];

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

      {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Create Sender Post" Pdescription="-----------------------" /> */}

      <ToastContainer position="top-right" />

      <div className="container mt-5 senderpost-form">
        <br />

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <p className="p-detail">
              <span className="span-detail">Item Title:</span>
            </p>
            <input
              type="text"
              className="form-control"
              value={itemTitle}
              required
              onChange={(e) => setItemTitle(e.target.value)}
            />
          </div>

          <hr />

          <div className="mb-3">
            <p className="p-detail">
              <span className="span-detail">Description:</span>
            </p>
            <input
              className="form-control"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </div>

          <hr />

          <div className="mb-3">
            <p className="p-detail">
              <span className="span-detail">Start Destination:</span>{" "}
              <FaLocationDot />
            </p>
            <input
              type="text"
              className="form-control"
              required
              value={startDestination}
              onChange={(e) => setStartDestination(e.target.value)}
            />
          </div>

          <hr />

          <div className="mb-3">
            <p className="p-detail">
              <span className="span-detail">End Destination:</span>{" "}
              <FaLocationDot />
            </p>
            <input
              type="text"
              className="form-control"
              value={endDestination}
              required
              onChange={(e) => setEndDestination(e.target.value)}
            />
          </div>

          <hr />

          <div className="mb-3">
            <p className="p-detail">
              <span className="span-detail">Deadline Date:</span>{" "}
              <FaCalendarAlt />
            </p>
            <input
              type="date"
              className="form-control"
              required
              value={deadlineDate}
              onChange={(e) => setDeadlineDate(e.target.value)}
            />
          </div>

          <hr />

          <div className="mb-3">
            <p className="p-detail">
              <span className="span-detail">Item Weight:</span> <GiWeight />
            </p>
            <input
              type="number"
              className="form-control"
              value={itemWeight}
              required
              onChange={(e) => setItemWeight(e.target.value)}
            />
          </div>

          <hr />

          <div className="mb-3">
            <p className="p-detail">
              <span className="span-detail">Item Type:</span>
            </p>
            <select
              className="form-control"
              value={itemType}
              required
              onChange={(e) => setItemType(e.target.value)}
            >
              <option value="">Select Type</option>
              {itemCategories.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <hr />

          <div className="mb-3">
            <p className="p-detail">
              <span className="span-detail">Price $:</span>
            </p>
            <input
              type="number"
              className="form-control"
              value={price}
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <hr />

          <div className="mb-3">
            <p className="p-detail">
              <span className="span-detail">Upload Image:</span>
            </p>
            <input
              type="file"
              className="form-control"
              onChange={handleImageChange}
              accept="image/*"
              required
            />
          </div>

          <hr />

          <div className="submit-button-div">
            <button type="submit" className="btn btn-primary submit-button">
              Submit
            </button>
          </div>

          <br />
        </form>
      </div>

      <Footer FooterData={FooterData} />
      <ToastContainer />
    </div>
  );
}

export default CreateSenderPost;
