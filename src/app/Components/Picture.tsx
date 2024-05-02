import { FC } from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

const ImageComponent: FC<ImageProps> = ({ src, alt }) => {
  return (
    <main>
      <br />
    <div className="flex justify-center">
      {/* <img src={src} alt={alt} width={300} height={50}/> */}
      <figure className="max-w-lg">
        <img className="h-auto max-w-full rounded-lg" src={src} alt={alt} width={300} height={50}/>
        <figcaption className="mt-2 text-xl text-center text-gray-500 dark:text-gray-400">What is this picture?</figcaption>
      </figure>
      {/* <br></br> */}
    </div>
    <br />
    </main>
  );
};

export default ImageComponent;