import { FC } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  description: string;
}

const ImageComponent: FC<ImageProps> = ({ src, alt, description }) => {
  return (
    <main>
      <br />
    <div className="flex justify-center">
      <figure className="max-w-lg max-[320px]:w-[250px]">
        <img className="h-auto max-w-full rounded-lg" src={src} alt={alt} width={300} height={50}/>
        <figcaption className="mt-2 text-xl text-center text-gray-500 dark:text-gray-800 max-[320px]:text-[20px]">{description}</figcaption>
      </figure>
    </div>
    <br />
    </main>
  );
};

export default ImageComponent;