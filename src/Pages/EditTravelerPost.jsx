import React, { useState } from 'react';
import '../assets/EditSenderPost.css'

const EditPost = ({ post, onSave, onCancel }) => {
    const [editedPost, setEditedPost] = useState(post);

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setEditedPost({ ...editedPost, [name]: value });
    // };

    const vehicleCategories = ['Plane', 'Car', 'Bike', 'Train', 'Ship', 'Other'];

    var itemTypes = ['Documents & Books', 'Health & Beauty', 'Food & Beverages', 'Toys & Games', 'Clothing', 'Sports & Outdoor', 'Furniture', 'Electronics', 'Automotive', 'other'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        onSave(editedPost);
    };

    return (
        <div className="edit-post-container">
            <h2 className='modal-h2'>Edit Post</h2>

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

            <div className='modal-div'>
                <label className='modal-label'>Wehicle Type:</label>
                <br />
                <br />

                <select name='vehicleCategory' className="form-control" value={editedPost.vehicleCategory} onChange={handleInputChange}>
                    <option value="">Vehicle Category: </option>
                    {vehicleCategories.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            <hr />

            <div className='modal-div'>
                <label className='modal-label'>Item Type: </label>
                <br />
                <br />

                <select name='itemType' className="form-control" value={editedPost.itemType} onChange={handleInputChange}>
                    <option value="">Select Type</option>
                    {itemTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            {/* <p><strong>Title:</strong> {post.title}</p>
            <p><strong>Image:</strong> {post.image}</p>
            <p><strong>Item Category:</strong> {post.itemCategory}</p>
            <p><strong>Item Weight:</strong> {post.itemWeight}</p>
            <p><strong>Is Available:</strong> {post.isAvailable ? 'Yes' : 'No'}</p>
            <p><strong>Price:</strong> {post.price}</p> */}

            <div className='modal-butons'>
                <button className='btn btn-success m-3 f_size_20' onClick={handleSave}>Save</button>
                <button className='btn btn-danger' onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default EditPost;
