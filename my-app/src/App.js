import './App.css';
import { useEffect } from 'react';
import ImagesList from './components/imagesList';
import axios from 'axios';
import { useState } from 'react';

const PAGE_NUMBER = 1;
function App() {
  
  const [imagesData, setImagesData] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);

  useEffect(() => {
    setTimeout(async () => {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}`
      );

      setImagesData((oldState) => {
        return [...oldState, ...response.data];
      });
    }, 1500);
  }, [page]);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async () => {
    if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
    ) {
        setPage((prev) => prev + 1);
    }
};

  return (
    <div className='app'>
      <h1>Images Gallery</h1>
      <ImagesList imagesData={imagesData} />
    </div>


  );
}

export default App;
