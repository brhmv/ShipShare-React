import React, { useState } from 'react';
import '../assets/CreateTravelerPost.css';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addPostAsync } from '../Store/TravelPostSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreateTravelerPost() {
    const dispatch = useDispatch();
    //change
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [startDestination, setStartDestination] = useState('');
    const [endDestination, setEndDestination] = useState('');
    const [deadlineDate, setDeadlineDate] = useState('');
    const [price, setPrice] = useState('');
    const [temp, setTemp] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = {
            title,
            description,
            startDestination,
            endDestination,
            deadlineDate,
            price
        };

        dispatch(addPostAsync({ postData, setTemp: setTemp }));


        if (temp) {
            toast.success("Traveler Post Created Succesfully!", {
                position: "top-right",
            });
        }
        else {
            toast.error("Failed to Create Traveler Post!", {
                position: "top-right",
            });
        }
    };

    return (
        <div>
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            <ToastContainer position="top-right" />

            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Create Traveler Post" Pdescription="-----------------------" />

            <div className="container mt-5 travelpost-form create-container">

                <br />

                <form onSubmit={handleSubmit}  >

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Title:</span></p>
                        <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    </div>

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Description:</span></p>
                        <input className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                    </div>

                    <hr />

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Start Destination:</span> <FaLocationDot /></p>
                        <input type="text" className="form-control" id="startDestination" value={startDestination} onChange={(e) => setStartDestination(e.target.value)} />
                    </div>

                    <hr />

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">End Destination:</span> <FaLocationDot /></p>
                        <input type="text" className="form-control" value={endDestination} onChange={(e) => setEndDestination(e.target.value)} />
                    </div>

                    <hr />

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Deadline Date:</span> <FaCalendarAlt /></p>
                        <input type="date" className="form-control" value={deadlineDate} onChange={(e) => setDeadlineDate(e.target.value)} />
                    </div>

                    <hr />

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Price $:</span></p>
                        <input type="number" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <div className='submit-button-div' >
                        <button type="submit" className="btn btn-primary submit-button" >Submit</button>
                    </div>

                    <br />

                </form>
            </div>

            <Footer FooterData={FooterData} />
        </div>
    );
}

export default CreateTravelerPost;