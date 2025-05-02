import "./imagesList.css";
import ImageCard from "./imageCard.js";


const ImagesList = ({ imagesData }) => {
    return (
        <div className='images_list'>
            {imagesData.map((image, index) => {
                return (
                    <ImageCard
                        key={index}
                        image={image.download_url}
                        author={image.author}
                    />
                );
            })}
        </div>
    );
};

export default ImagesList;