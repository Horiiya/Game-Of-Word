import { FC } from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

const ImageComponent: FC<ImageProps> = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageComponent;