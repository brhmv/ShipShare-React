import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import { Link, useParams } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

function UserView() {
    const { userId } = useParams();

    const travelerPosts = [
        {
            id: 1,
            userId: '123e4567-e89b-12d3-a456-426614174000',
            title: 'Trip to Paris',
            views: 100,
            description: 'Exploring the beauty of Paris!',
            startDestination: 'New York',
            endDestination: 'Paris',
            deadlineDate: new Date('2024-12-31').toISOString(),
            user: {
                username: 'john_doe',
                fullName: 'John Doe'
            },
            price: 500,
            favorites: [],
            transactions: [],
            isAvailable: true,
            itemCategory: 'Travel'
        },
        {
            id: 2,
            userId: '123e4567-e89b-12d3-a456-426614174000',
            title: 'Beach Vacation',
            views: 50,
            description: 'Relaxing at the beach!',
            startDestination: 'Miami',
            endDestination: 'Hawaii',
            deadlineDate: new Date('2024-11-15').toString(),
            user: {
                username: 'jane_smith',
                fullName: 'Jane Smith'
            },
            price: 800,
            favorites: [],
            transactions: [],
            isAvailable: true,
            itemCategory: 'Travel'
        },
        {
            id: 3,
            userId: '123e4567-e89b-12d3-a456-426614174002',
            title: 'Mountain Hiking',
            views: 75,
            description: 'Conquering the highest peaks!',
            startDestination: 'Denver',
            endDestination: 'Switzerland',
            deadlineDate: new Date('2024-10-20').toISOString(),
            user: {
                username: 'mike_jackson',
                fullName: 'Mike Jackson'
            },
            price: 1000,
            favorites: [],
            transactions: [],
            isAvailable: true,
            itemCategory: 'Travel'
        },
        {
            id: 4,
            userId: '123e4567-e89b-12d3-a456-426614174003',
            title: 'City Tour',
            views: 30,
            description: 'Exploring urban landscapes!',
            startDestination: 'Los Angeles',
            endDestination: 'Tokyo',
            deadlineDate: new Date('2024-09-15').toISOString(),
            user: {
                username: 'lisa_adams',
                fullName: 'Lisa Adams'
            },
            price: 1200,
            favorites: [],
            transactions: [],
            isAvailable: true,
            itemCategory: 'Travel'
        },
        {
            id: 5,
            userId: '123e4567-e89b-12d3-a456-426614174004',
            title: 'Cultural Exchange',
            views: 90,
            description: 'Immersing in local traditions!',
            startDestination: 'London',
            endDestination: 'Kyoto',
            deadlineDate: new Date('2024-08-10').toISOString(),
            user: {
                username: 'sam_wilson',
                fullName: 'Sam Wilson'
            },
            price: 700,
            favorites: [],
            transactions: [],
            isAvailable: true,
            itemCategory: 'Travel'
        },
        {
            id: 6,
            userId: '123e4567-e89b-12d3-a456-426614174005',
            title: 'Adventure Expedition',
            views: 120,
            description: 'Venturing into the unknown!',
            startDestination: 'Sydney',
            endDestination: 'Amazon Rainforest',
            deadlineDate: new Date('2024-07-25').toISOString(),
            user: {
                username: 'emily_green',
                fullName: 'Emily Green'
            },
            price: 1500,
            favorites: [],
            transactions: [],
            isAvailable: true,
            itemCategory: 'Travel'
        },
        {
            id: 7,
            userId: '123e4567-e89b-12d3-a456-426614174006',
            title: 'Safari Adventure',
            views: 80,
            description: 'Encountering wildlife up close!',
            startDestination: 'Nairobi',
            endDestination: 'Maasai Mara',
            deadlineDate: new Date('2024-06-20').toISOString(),
            user: {
                username: 'david_white',
                fullName: 'David White'
            },
            price: 900,
            favorites: [],
            transactions: [],
            isAvailable: true,
            itemCategory: 'Travel'
        },
        {
            id: 8,
            userId: '123e4567-e89b-12d3-a456-426614174007',
            title: 'Road Trip',
            views: 40,
            description: 'Exploring scenic routes!',
            startDestination: 'San Francisco',
            endDestination: 'Grand Canyon',
            deadlineDate: new Date('2024-05-15').toISOString(),
            user: {
                username: 'sarah_brown',
                fullName: 'Sarah Brown'
            },
            price: 600,
            favorites: [],
            transactions: [],
            isAvailable: true,
            itemCategory: 'Travel'
        }
    ];

    const userTravelPosts = travelerPosts.filter(post => post.userId === userId);


    return (
        <div className='privacy'>
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="User View" Pdescription="--------" />

            <div className="container text-align-center">

                <Link to={`/chat/${userId}`} className='btn btn-success'>Chat with user</Link>
            </div>

            <div className='posts'>
                {userTravelPosts.map(post => (
                    <div key={post.id} className="post-item">

                        <div className="post-details">

                            <p className="p-detail"><span className="span-detail">Start Destination: </span> {post.startDestination}<FaLocationDot /></p>

                            <p className="p-detail"><span className="span-detail">End Destination: </span> {post.endDestination} <FaLocationDot /></p>

                            <p className="p-detail"><span className="span-detail">Deadline Date:</span> {post.deadlineDate} <FaCalendarAlt /></p>

                            <p className="p-detail"><span className="span-detail">Item Category:</span> {post.itemCategory}</p>

                            <p className="p-detail"><span className="span-detail">Price: </span> {post.price} <span className="span-detail">$</span></p>

                        </div>
                    </div>
                ))
                }
            </div >

            <Footer FooterData={FooterData} />
        </div >
    );
}

export default UserView;