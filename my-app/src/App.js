// App.js
import './App.css';
import { useEffect, useState } from 'react';
import ImagesList from './components/imagesList';
import SearchButton from './components/searchButton';
import axios from 'axios';

const PAGE_NUMBER = 1;

function App() {
  const [imagesData, setImagesData] = useState([]);
  const [originalImagesData, setOriginalImagesData] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}`
      );

      setImagesData((old) => [...old, ...response.data]);
      setOriginalImagesData((old) => [...old, ...response.data]);
    };

    setTimeout(fetchImages, 1500);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className='app'>
      <SearchButton
        originalImages={originalImagesData}
        setFilteredImages={setImagesData}
      />
      <h1>Images Gallery</h1>
      <ImagesList imagesData={imagesData} />
    </div>
  );
}

export default App;