import React, { useState } from 'react';
// import '../asEditSenderPost.css'
import '../assets/EditSenderPost.css'

const EditPost = ({ post, onSave, onCancel }) => {
    const [editedPost, setEditedPost] = useState(post);


    var itemTypes = ['Documents & Books', 'Health & Beauty', 'Food & Beverages', 'Toys & Games', 'Clothing', 'Sports & Outdoor', 'Furniture', 'Electronics', 'Automotive', 'other'];

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setEditedPost({ ...editedPost, [name]: value });
    // };

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
            <h2 className='modal-h2' >Edit Post</h2>

            <div className='modal-div'>
                <label className='modal-label'>Description: </label>
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
                <label className='modal-label'>Start Destination: </label>
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
                <label className='modal-label'>End Destination: </label>
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
                <label className='modal-label'>Price: </label>
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
                <label className='modal-label'>Size: </label>
                <span>  </span>
                <input
                    type="text"
                    name="size"
                    value={editedPost.size}
                    onChange={handleInputChange}
                />
            </div>

            <hr />

            <div className='modal-div'>
                <label className='modal-label'>Weight: </label>
                <span>  </span>
                <input
                    type="number"
                    name="Weight"
                    value={editedPost.weight}
                    onChange={handleInputChange}
                />
            </div>

            <hr />

            <div className='modal-div'>
                <label className='modal-label'>Deadline Date: </label>
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
                <label className='modal-label'>Price: </label>
                <span>  </span>
                <input
                    type="number"
                    name="price"
                    value={editedPost.price}
                    onChange={handleInputChange}
                />
            </div>



            <div className='modal-div'>
                <label className='modal-label'>Item Category: </label>
                <br />
                <br />

                <select name='itemType' className="form-control" value={editedPost.itemType} onChange={handleInputChange}>
                    <option value="">Select Type</option>
                    {itemTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            <hr />


            <div className='modal-butons'>
                <button className='btn btn-success m-3 f_size_20' onClick={handleSave}>Save</button>
                <button className='btn btn-danger' onClick={onCancel}>Cancel</button>
            </div>
        </div >
    );
};

export default EditPost;
