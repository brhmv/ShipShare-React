import React, { useState } from 'react';
import '../assets/TravelersPosts.css';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import Image from '../img/logoL.png';
import view from '../img/view.jpg';
import location from '../img/location.png';
import date from '../img/date.png';

function TarvelerPosts() {

    const travelerPosts = [
        {
            id: 1,
            userId: '123e4567-e89b-12d3-a456-426614174000',
            title: 'Trip to Paris',
            image: Image,
            views: 100,
            description: 'Exploring the beauty of Paris!',
            startDestination: 'New York',
            endDestination: 'Paris',
            deadlineDate: '2024-12-31',
            user: {
                username: 'john_doe',
                fullName: 'John Doe'
            },
            price: 500,
            favorites: [],
            transactions: [],
            isAvailable: true,
            itemCategory: 'Travel',
            vehicleCategory: 'Plane'
        },
        {
            id: 2,
            userId: '123e4567-e89b-12d3-a456-426614174001',
            title: 'Beach Vacation',
            image: Image,
            views: 50,
            description: 'Relaxing at the beach!',
            startDestination: 'Miami',
            endDestination: 'Hawaii',
            deadlineDate: '2024-11-15',
            user: {
                username: 'jane_smith',
                fullName: 'Jane Smith'
            },
            price: 800,
            favorites: [],
            transactions: [],
            isAvailable: true,
            itemCategory: 'Travel',
            vehicleCategory: 'Plane'
        },
        {
            id: 3,
            userId: '123e4567-e89b-12d3-a456-426614174002',
            title: 'Mountain Hiking',
            views: 75,
            image: Image,
            description: 'Conquering the highest peaks!',
            startDestination: 'Denver',
            endDestination: 'Switzerland',
            deadlineDate: '2024-10-20',
            user: {
                username: 'mike_jackson',
                fullName: 'Mike Jackson'
            },
            price: 1000,
            favorites: [],
            transactions: [],
            isAvailable: true,
            itemCategory: 'Travel',
            vehicleCategory: 'Plane'
        },
        {
            id: 4,
            userId: '123e4567-e89b-12d3-a456-426614174003',
            title: 'City Tour',
            image: Image,
            views: 30,
            description: 'Exploring urban landscapes!',
            startDestination: 'Los Angeles',
            endDestination: 'Tokyo',
            deadlineDate: '2024-09-15',
            user: {
                username: 'lisa_adams',
                fullName: 'Lisa Adams'
            },
            price: 1200,
            favorites: [],
            transactions: [],
            isAvailable: true,
            itemCategory: 'Travel',
            vehicleCategory: 'Plane'
        },
        {
            id: 5,
            userId: '123e4567-e89b-12d3-a456-426614174004',
            title: 'Cultural Exchange',
            views: 90,
            image: Image,
            description: 'Immersing in local traditions!',
            startDestination: 'London',
            endDestination: 'Kyoto',
            deadlineDate: '2024-08-10',
            user: {
                username: 'sam_wilson',
                fullName: 'Sam Wilson'
            },
            price: 700,
            favorites: [],
            transactions: [],
            isAvailable: true,
            itemCategory: 'Travel',
            vehicleCategory: 'Plane'
        },
        {
            id: 6,
            userId: '123e4567-e89b-12d3-a456-426614174005',
            title: 'Adventure Expedition',
            views: 120,
            image: Image,
            description: 'Venturing into the unknown!',
            startDestination: 'Sydney',
            endDestination: 'Amazon Rainforest',
            deadlineDate: '2024-07-25',
            user: {
                username: 'emily_green',
                fullName: 'Emily Green'
            },
            price: 1500,
            favorites: [],
            transactions: [],
            isAvailable: true,
            itemCategory: 'Travel',
            vehicleCategory: 'Plane'
        },
        {
            id: 7,
            userId: '123e4567-e89b-12d3-a456-426614174006',
            title: 'Safari Adventure',
            views: 80,
            image: Image,
            description: 'Encountering wildlife up close!',
            startDestination: 'Nairobi',
            endDestination: 'Maasai Mara',
            deadlineDate: '2024-06-20',
            user: {
                username: 'david_white',
                fullName: 'David White'
            },
            price: 900,
            favorites: [],
            transactions: [],
            isAvailable: true,
            itemCategory: 'Travel',
            vehicleCategory: 'Plane'
        },
        {
            id: 8,
            userId: '123e4567-e89b-12d3-a456-426614174007',
            title: 'Road Trip',
            views: 40,
            image: Image,
            description: 'Exploring scenic routes!',
            startDestination: 'San Francisco',
            endDestination: 'Grand Canyon',
            deadlineDate: '2024-05-15',
            user: {
                username: 'sarah_brown',
                fullName: 'Sarah Brown'
            },
            price: 600,
            favorites: [],
            transactions: [],
            isAvailable: true,
            itemCategory: 'Travel',
            vehicleCategory: 'Plane'
        }
    ];

    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(travelerPosts);


    const handleSearch = () => {
        const filtered = travelerPosts.filter(post =>
            post.startDestination.toLowerCase().includes(startLocation.toLowerCase()) &&
            post.endDestination.toLowerCase().includes(endLocation.toLowerCase())
        );
        setFilteredPosts(filtered);
    };

    return (
        <div >
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Posts of Tarvelers" Pdescription="-----------------------" />

            <br />

            <h1>Searh Post</h1>

            <br />

            <div className="input-group searv-div">
                <form className="search-form">
                    <div className="form-outline" data-mdb-input-init>
                        <input
                            id="search-focus"
                            placeholder='Start Location'
                            value={startLocation}
                            onChange={e => setStartLocation(e.target.value)}
                            type="search"
                            className="form-control"
                        />
                    </div>

                    <div className="form-outline" data-mdb-input-init>
                        <input
                            id="search-focus-form1"
                            type="search"
                            value={endLocation}
                            onChange={e => setEndLocation(e.target.value)}
                            placeholder='End Location'
                            className="form-control"
                        />
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary"
                        data-mdb-ripple-init="true"
                        onClick={handleSearch}
                    >
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>

            <hr />

            <div className='posts'>
                {filteredPosts.map(post => (
                    <Link key={post.id} to={`/post/${post.id}`} className="post-link">
                        <div key={post.id} className="post-item">
                            <div className="post-image">
                                <img src={post.image} alt={post.id} />
                            </div>

                            <div className="post-details">

                                <hr />
                                <p className="p-detail"><span className="span-detail">Description:</span>{post.description}</p>
                                <hr />
                                <p className="p-detail"><span className="span-detail">Start Destination:</span> {post.startDestination} <img className='loc-img' alt='img' src={location}></img></p>
                                <hr />
                                <p className="p-detail"><span className="span-detail">End Destination:</span> {post.endDestination} <img className='loc-img' alt='img' src={location}></img></p>
                                <hr />
                                <p className="p-detail"><span className="span-detail">Deadline Date:</span> {post.deadlineDate} <img className='loc-img' alt='img' src={date}></img></p>
                                <hr />
                                <p className="p-detail"><span className="span-detail">Item Category:</span> {post.itemCategory}</p>
                                <hr />
                                <p className="p-detail"><span className="span-detail">Price:</span> {post.price} <span className="span-detail">$</span></p>
                                <hr />
                                <p className="p-detail"><span className="span-detail">Vehicle Category:</span> {post.vehicleCategory}</p>
                                <hr />
                                <p className="p-detail"><span className="span-detail">Views:</span> {post.views} <img alt='img' className='view-img' src={view}></img></p>

                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <hr />

            <Footer FooterData={FooterData} />

        </div>
    );
}

export default TarvelerPosts;