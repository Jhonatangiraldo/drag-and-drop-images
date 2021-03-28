import React from "react";
import { useDrop } from "react-dnd";
import SingleImage, { Image, ImagesType } from "../SingleImage";

export enum DropAction {
  keep = 'keep',
  reject = 'reject',
}

interface DropProps {
  dropImage: (action: DropAction, image: Image) => void;
  images: Image[];
  photosLength: number;
}

const DroppableZone = (props: DropProps & {className: string, action: DropAction}) => {
  const { images, dropImage, photosLength, action, className } = props;
  
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ImagesType,
      drop: (image: Image) => dropImage(action, image),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [photosLength]
  );


  return (
    <div className={className} ref={drop} >
      {images.map((image: Image) => (
        <SingleImage image={image} />
      ))}
    </div>
  );
}

export const Keep = (props: DropProps) => <DroppableZone {...props} action={DropAction.keep} className='right__up'/>;

export const Reject = (props: DropProps) => <DroppableZone {...props} action={DropAction.reject} className='right__bottom'/>;
