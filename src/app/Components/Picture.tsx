import { FC } from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

const ImageComponent: FC<ImageProps> = ({ src, alt }) => {
  return (
    <div className="flex justify-center">
      <img src={src} alt={alt} width={300} height={50}/>
    </div>
  );
};

export default ImageComponent;