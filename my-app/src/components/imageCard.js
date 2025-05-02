import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./imageCard.css";

const ImageCard = ({ image,author }) => {
    const [blobUrl, setBlobUrl] = useState(null);

    useEffect(() => {
      axios
        .get(image, {
          responseType: 'blob',
        })
        .then((response) => {
          const url = URL.createObjectURL(response.data);
          setBlobUrl(url);
        })
        .catch((error) => {
          console.error('Image load error:', error);
        });
    }, [image]);
  
    return (
        <div className='image'>
        <div className='image_card'>
            {blobUrl ? null : 'Loading...'}
            <img src={blobUrl} alt={author}/>
        </div>
        <div className='image_card_info'>
            <h2>{author}</h2>
            
        </div>
    </div>
    );
  }
export default ImageCard;