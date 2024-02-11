import Image from "next/image";
import Pie from "./PieChart";
import icon1 from "../assets/icon-1.svg";
import icon2 from "../assets/icon-2.svg";
import info from "../assets/info.svg";

export default function Charts() {
  const Label = [
    {
      color:"#19A01E",
      label:"Super Healthy (56)",
    },
    {
      color:"#00DB4A",
      label:"Healthy (35)",
    },
    {
      color:"#FB8B34",
      label:"Warning (27)",
    },
    {
      color:"#ED1C24",
      label:"Danger (6)",
    }
  ];

  return (
    <div className="w-full">
      <p className="font-bold text-center w-full text-xl">Camera Health</p>
      <div className="w-full flex items-center">
        <Pie title="124" label="Cameras"/>
        <div className="flex w-full flex-col gap-y-5">
          <div className="bg-[#F1F1F1] flex items-center justify-between rounded py-3 w-full px-4">
            <span className="flex gap-x-2">
              <Image src={icon1} alt="icon-1"/>
              <p>
                Totally <b>124</b> Cameras are in 9 NVRs and installed in 12 Locations
              </p>
            </span>
          </div>
          <div className="bg-[#FFBFCC] flex items-center rounded py-3 w-full justify-between px-4">
            <span className="flex gap-x-2">
              <Image src={icon2} alt="icon-1"/>
              <p>
                <b>6</b> Cameras were experiencing downtime in Last 30 days
              </p>
            </span>
            <button className="bg-white rounded py-1 px-2 text-sm">View Cameras</button>
          </div>
          <div className="flex gap-x-2">
            {Label.map((item, index) => (
              <span key={index} className="flex items-center gap-x-2">
                <div className="border w-4 h-4 rounded-full " style={{ backgroundColor: item.color }}></div>
                <p>{item.label}</p>
                <Image src={info} alt="info"/>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
