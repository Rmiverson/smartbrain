import React from 'react'
import './ImageLinkForm.scss'

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div className='image-link-form'>
            <p>
                {'This Magic Brain will detect faces in your pictures, give it a try!'}
            </p>
            <div className='form-area'>
                <input onChange={onInputChange} type='text' placeholder='image link...'/>
                <button onClick={onSubmit}>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm