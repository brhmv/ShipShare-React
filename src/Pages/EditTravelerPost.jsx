import React, { useState } from 'react';
import '../assets/EditSenderPost.css'
import { useDispatch } from 'react-redux'
import { updateTravellerPost } from "../Store/UserPostsSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTokenExpiration from '../customHooks/useTokenExpiration';


const EditPost = ({ post, onCancel }) => {
    useTokenExpiration();
    const [editedPost, setEditedPost] = useState(post);
    const dispatch = useDispatch();



    // const vehicleCategories = ['Plane', 'Car', 'Bike', 'Train', 'Ship', 'Other'];

    // var itemTypes = ['Documents & Books', 'Health & Beauty', 'Food & Beverages', 'Toys & Games', 'Clothing', 'Sports & Outdoor', 'Furniture', 'Electronics', 'Automotive', 'other'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        console.log("handleSave called");

        const formData = new FormData();

        formData.append('Title', editedPost.title);
        formData.append('Description', editedPost.description);
        formData.append('StartDestination', editedPost.startDestination);
        formData.append('EndDestination', editedPost.endDestination);
        formData.append('Price', +editedPost.price);
        formData.append('DeadlineDate', editedPost.deadlineDate);
        formData.append('Id', editedPost.id);


        console.log("post to search");
        console.log(post);


        console.log("formData:");
        for (let pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }


        dispatch(updateTravellerPost({ postId: editedPost.id, postData: formData }));

        toast.success("Sender Post updated Succesfully!", {
            position: "top-right",
        });
    };

    return (
        <div className="edit-post-container">
            <h2 className='modal-h2'>Edit Post</h2>

            <div className='modal-div'>
                <label className='modal-label'>Title:</label>
                <span>  </span>
                <input
                    type="text"
                    name="title"
                    value={editedPost.title}
                    onChange={handleInputChange}
                />
            </div>

            <hr />

            <div className='modal-div'>
                <label className='modal-label'>Description:</label>
                <span>  </span>
                <input
                    type="text"
                    name="description"
                    value={editedPost.description}
                    onChange={handleInputChange}
                />
            </div>

            <hr />

            <div className='modal-div'>
                <label className='modal-label'>Start Destination:</label>
                <span>  </span>
                <input
                    type="text"
                    name="startDestination"
                    value={editedPost.startDestination}
                    onChange={handleInputChange}
                />
            </div>

            <hr />

            <div className='modal-div'>
                <label className='modal-label'>End Destination:</label>
                <span>  </span>
                <input
                    type="text"
                    name="endDestination"
                    value={editedPost.endDestination}
                    onChange={handleInputChange}
                />
            </div>

            <hr />

            <div className='modal-div'>
                <label className='modal-label'>Price:</label>
                <span>  </span>
                <input
                    type="number"
                    name="price"
                    value={editedPost.price}
                    onChange={handleInputChange}
                />
            </div>

            <hr />

            <div className='modal-div'>
                <label className='modal-label'>Deadline Date:</label>
                <span>  </span>
                <input
                    type="date"
                    name="deadlineDate"
                    value={editedPost.deadlineDate}
                    onChange={handleInputChange}
                />
            </div>

            <hr />

            {/* <div className='modal-div'>
                <label className='modal-label'>Wehicle Type:</label>
                <br />
                <br />

                <select name='vehicleCategory' className="form-control" value={editedPost.vehicleCategory} onChange={handleInputChange}>
                    <option value="">Vehicle Category: </option>
                    {vehicleCategories.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
            </div> */}

            {/* <hr /> */}

            {/* <div className='modal-div'>
                <label className='modal-label'>Item Type: </label>
                <br />
                <br />

                <select name='itemType' className="form-control" value={editedPost.itemType} onChange={handleInputChange}>
                    <option value="">Select Type</option>
                    {itemTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
            </div> */}

            <div className='modal-butons'>
                <button className='btn btn-success m-3 f_size_20' onClick={handleSave}>Save</button>
                <button className='btn btn-danger' onClick={onCancel}>Cancel</button>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default EditPost;
