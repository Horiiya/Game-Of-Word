import Image from "next/image";
import ListeningImg from "../app/ImageOfWord/listening.jpg";
let score: number = 0;

const handleClick = () => {
  // Handle the action when the button is clicked
  console.log('Action button clicked!');
};


export default function Home() {
  return (
    <main>
      <p className="text-blue-500 text-3xl text-center">Game Of Word</p>
      <p className="text-blue-500 text-3xl text-center">what is this word?</p>
      <p className="text-blue-500 text-3xl text-right">Score : {score}</p>
      <br></br>
      <div className="flex justify-center">
        <Image
        src={ListeningImg}
        alt="ImgListening"
        width={300}
        height={50}
        />
      </div>
      <br></br>
      <div className="flex justify-center gap-8">
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Eating</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Listening</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Drinking</button>

      </div>
    </main>
  
  );
}
