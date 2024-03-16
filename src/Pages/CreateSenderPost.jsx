import React, { useState } from 'react';
import '../assets/CreateSenderPost.css';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreateSenderPost() {
    const [description, setDescription] = useState('');
    const [startDestination, setStartDestination] = useState('');
    const [endDestination, setEndDestination] = useState('');
    const [deadlineDate, setDeadlineDate] = useState('');
    const [itemType, setItemType] = useState('');
    const [itemTitle, setItemTitle] = useState('');
    const [itemWeight, setItemWeight] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const formData = new FormData();
            formData.append('Description', description);
            formData.append('StartDestination', startDestination);
            formData.append('EndDestination', endDestination);
            formData.append('DeadlineDate', deadlineDate);
            formData.append('ItemType', itemType);
            formData.append('ItemWeight', +itemWeight);
            formData.append('Price', +price);
            formData.append('ItemPhotos', image);
            formData.append('Title', itemTitle);


            // for (let pair of formData.entries()) {
            //     console.log(pair[0] + ', ' + pair[1]);
            // }

            const accessToken = Cookies.get('accessToken');
            const response = await fetch('https://localhost:7189/api/SenderPost/createSenderPost', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
                method: 'POST',
                body: formData,
            });

            console.log(response);


            if (response.ok) {
                toast.success("Sender Post Created Succesfully!", {
                    position: "top-right",
                });



            } else {
                toast.success("Failed to create post!", {
                    position: "top-right",
                });
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    var itemCategories = ['Documents & Books', 'Health & Beauty', 'Food & Beverages', 'Toys & Games', 'Clothing', 'Sports & Outdoor', 'Furniture', 'Electronics', 'Automotive', 'other'];

    return (
        <div>
             <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Create Sender Post" Pdescription="-----------------------" /> */}

            <ToastContainer position="top-right" />

            <div className="container mt-5 senderpost-form">

                <br />

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Item Title:</span></p>
                        <input type="text" className="form-control" value={itemTitle} onChange={(e) => setItemTitle(e.target.value)} />
                    </div>

                    <hr />

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Description:</span></p>
                        <input className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                    </div>

                    <hr />

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Start Destination:</span> <FaLocationDot /></p>
                        <input type="text" className="form-control" value={startDestination} onChange={(e) => setStartDestination(e.target.value)} />
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
                        <p className="p-detail"><span className="span-detail">Item Weight:</span> <GiWeight /></p>
                        <input type="text" className="form-control" value={itemWeight} onChange={(e) => setItemWeight(e.target.value)} />
                    </div>

                    <hr />

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Item Type:</span></p>
                        <select className="form-control" value={itemType} onChange={(e) => setItemType(e.target.value)}>
                            <option value="">Select Type</option>
                            {itemCategories.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <hr />

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Price $:</span></p>
                        <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <hr />

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Upload Image:</span></p>
                        <input type="file" className="form-control" onChange={handleImageChange} accept="image/*" />
                    </div>

                    <hr />

                    <div className='submit-button-div'>
                        <button type="submit" className="btn btn-primary submit-button">Submit</button>
                    </div>

                    <br />

                </form>
            </div>

            <Footer FooterData={FooterData} />
        </div>
    );
}

export default CreateSenderPost;