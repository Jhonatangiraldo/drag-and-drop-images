import React, { useState, useEffect, useDebugValue} from 'react';

const url = 'http://api.tvmaze.com/shows';

export interface Image {
  medium: string;
  original: string;
};

export interface Movie {
  image: Image;
}

const useGetPhotos = (): [Image[], (index: number) => Image | null] => {
  useDebugValue('useGetPhotos');
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    try {
      const response: Response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setPhotos(data.slice(0, 12).map((movie: Movie) => movie.image));
      } else {
        console.warn(`
          the response was not ok for getting images: ${response.status} - ${response.statusText}
        `);
        setPhotos([]);
      }
    } catch (err) {
      console.warn(`there was an erro trying to get the images: ${err}`);
      setPhotos([]);
    }
  }

  const filterImage = (index: number): Image | null => {
    console.log('filterImage', index);
    
    if (index > -1) {
      const elementToFilter = {...photos[index] as Image};
      setPhotos([...photos.slice(0, index), ...photos.slice(index + 1)]);
      return elementToFilter;
    }
    return null;
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return [photos, filterImage];
}

export default useGetPhotos;