import Image from "next/image";
import Pie from "./PieChart";
import camera from "../assets/camera.png"
import icon3 from "../assets/icon-3.svg"
import icon4 from "../assets/icon-4.svg"
import icon5 from "../assets/icon-5.svg"
import delet from "../assets/delete.svg"
import graph from "../assets/graph.svg"
import recorder from "../assets/recorder.svg"




export default function Card() {

  return (
    <div className="w-full rounded shadow-lg">
      <Image className="w-full" src={camera} alt="camera"/>
      <div className="flex flex-col gap-y-2 mx-5 my-2">
      <p className="font-medium text-lg">Bank Entrance-front-view Camera1</p>
      <div className="flex flex-col gap-y-3">
        <span className="flex gap-x-3" >
          <Image src={icon3} alt="icon3" />
          <p className="text-[#757575]">3 Recipes Added</p>
        </span>
        <span className="flex gap-x-3" >
          <Image src={icon4} alt="icon3" />
          <p className="text-[#757575]">today, 04:45pm: Unidentified face detected</p>
        </span>
        <span className="flex gap-x-3" >
          <Image src={icon5} alt="icon3" />
          <p className="text-[#757575]">Coimbatore branch</p>
        </span>
      </div>
      <div className="flex my-3 justify-between">
        <button className="bg-green-400 text-white px-2 py-1 rounded">Active</button>
        <div className="flex gap-x-3">
          <Image className="cursor-pointer" src={delet} alt="delete" />
          <Image className="cursor-pointer" src={recorder} alt="recorder" />
          <Image className="cursor-pointer" src={graph} alt="graph" />
        </div>
      </div>
      </div>
    </div>
  );
}
