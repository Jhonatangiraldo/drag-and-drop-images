import React from "react";
import { useDrag } from 'react-dnd'

export interface Image {
  medium: string;
  original: string;
}

export interface Props {
  image: Image;
}

export const ImagesType = 'ApplicationImages';

function SingleImage(props: Props) {
  const { image } = props;

  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ImagesType,
      item: { ...image },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  )

  return (
    <div className="image" key={image.medium} ref={dragRef} style={{ opacity }}>
      <img src={image.medium} />
    </div>
  );
}

export default SingleImage;
