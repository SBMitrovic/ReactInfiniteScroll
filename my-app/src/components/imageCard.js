import React from "react";

import "./imageCard.css";

const ImageCard = ({ image,author }) => {
    return (
        <div className='image'>
            <div className='image_card'>
                <img src={image} alt={author}/>
            </div>
            <div className='image_card_info'>
                <h2>{author}</h2>
                {/* <h3>${price.toLocaleString()}</h3> */}
            </div>
        </div>
    );
};

export default ImageCard;