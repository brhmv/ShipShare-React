import React, { useState } from 'react';
import '../assets/CreateSenderPost.css';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import location from '../img/location.png';
import date from '../img/date.png';
import size from '../img/size.png';
import kg from '../img/kg.png';

function CreateSenderPost() {
    const [description, setDescription] = useState('');
    const [startDestination, setStartDestination] = useState('');
    const [endDestination, setEndDestination] = useState('');
    const [deadlineDate, setDeadlineDate] = useState('');
    const [itemType, setItemType] = useState('');
    const [itemSize, setItemSize] = useState('');
    const [itemWeight, setItemWeight] = useState('');
    const [itemCategory, setItemCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle the form submission
    };

    var itemCategories = ['Documents & Books', 'Health & Beauty', 'Food & Beverages', 'Toys & Games', 'Clothing', 'Sports & Outdoor', 'Furniture', 'Electronics', 'Automotive', 'other'];

    return (
        <div>
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Create Sender Post" Pdescription="-----------------------" />

            <div className="container mt-5 senderpost-form">
                <br />
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Description:</span></p>
                        <input className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                    </div>

                    <hr />

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Start Destination:</span> <img className='loc-img' alt='img' src={location}></img></p>
                        <input type="text" className="form-control" value={startDestination} onChange={(e) => setStartDestination(e.target.value)} />
                    </div>

                    <hr />

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">End Destination:</span> <img className='loc-img' alt='img' src={location}></img></p>
                        <input type="text" className="form-control" value={endDestination} onChange={(e) => setEndDestination(e.target.value)} />
                    </div>

                    <hr />

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Deadline Date:</span> <img className='loc-img' alt='img' src={date}></img></p>
                        <input type="date" className="form-control" value={deadlineDate} onChange={(e) => setDeadlineDate(e.target.value)} />
                    </div>

                    <hr />

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Item Size: (height/width/length)sm</span> <img className='loc-img' alt='img' src={size}></img></p>
                        <input type="text" className="form-control" value={itemSize} onChange={(e) => setItemSize(e.target.value)} />
                    </div>

                    <hr />

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Item Weight:</span> <img className='loc-img' alt='img' src={kg}></img></p>
                        <input type="text" className="form-control" value={itemWeight} onChange={(e) => setItemWeight(e.target.value)} />
                    </div>

                    <hr />

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Item Category:</span></p>
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

                    <div className="mb-3">
                        <p className="p-detail"><span className="span-detail">Upload Image:</span></p>
                        <input type="file" className="form-control" value={image} onChange={handleImageChange} accept="image/*" />
                    </div>

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
