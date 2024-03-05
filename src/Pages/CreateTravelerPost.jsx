import React, { useState } from 'react';
import '../assets/CreateTravelerPost.css';
// import { Link } from 'react-router-dom';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addPostAsync } from '../Store/PostSlice'

function CreateTravelerPost() {
    const dispatch = useDispatch();

    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [startDestination, setStartDestination] = useState('');
    const [endDestination, setEndDestination] = useState('');
    const [deadlineDate, setDeadlineDate] = useState('');
    const [price, setPrice] = useState('');
    const [vehicleCategory, setVehicleCategory] = useState('');
    const [image, setImage] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = {
            title,
            description,
            startDestination,
            endDestination,
            deadlineDate,
            price,
            vehicleCategory,
            // image
        };
        dispatch(addPostAsync(postData));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };


    const VehicleCategories = ['Plane', 'Car', 'Bike', 'Train', 'Ship', 'Other'];


    return (
        <div>
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Create Traveler Post" Pdescription="-----------------------" />

            <div className="container mt-5 travelpost-form">
                <br />
                <form onSubmit={handleSubmit} c>

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

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Vehicle Category:</span></p>

                        <select className="form-control" value={vehicleCategory} onChange={(e) => setVehicleCategory(e.target.value)}>
                            <option value="">Select Category:</option>
                            {VehicleCategories.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Upload Image:</span></p>
                        <input type="file" className="form-control" value={image} onChange={handleImageChange} accept="image/*" />
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