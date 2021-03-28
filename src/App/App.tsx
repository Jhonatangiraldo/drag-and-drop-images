import React, {useCallback, useEffect, useState} from 'react';
import logo from './logo.svg';
import { DndProvider } from 'react-dnd'
import { useDrag } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './App.css';
import SingleImage from '../SingleImage';
import { DropAction, Keep, Reject } from '../DropableZone';
import useGetPhotos, {Image, Movie} from './useGetPhotos';

function App() {
  const [keep, setKeep] = useState([]);
  const [reject, setReject] = useState([]);

  const [photos, filterImage] = useGetPhotos();

  const dropImage = (action: DropAction, imageToFound: Image) => {
    const imageIndex: number = photos.findIndex((image: Image) => image.medium === imageToFound.medium);
    const droppedImage: Image | null = filterImage(imageIndex);
    if (!droppedImage) {
      return;
    }
    
    if (action === DropAction.keep) {
      setKeep(images => ([...images, droppedImage as never]));
    } else if (action === DropAction.reject) {
      setReject(images => ([...images, droppedImage as never]));
    }
  };

  console.log('photos', photos);
  
  return (
    <main className="main">
      <section className="main__left">
        {
          photos.map((image: Image) => <SingleImage image={image} key={image.medium}/>)
        }
      </section>
      <section className="main__right">
        <Keep images={keep} dropImage={dropImage} photosLength={photos.length}/>
        <Reject images={reject} dropImage={dropImage}  photosLength={photos.length}/>
      </section>
    </main>
  );
  
}


function Main() {
  return <DndProvider backend={HTML5Backend}><App /></DndProvider>;
}
export default Main;
