import Image from "next/image";
import arrow from "../assets/arrow.svg"
import refetch from "../assets/refetch.svg"
import recorder from "../assets/recorder.svg"
import preview from "../assets/preview.png"
import preview1 from "../assets/preview1.png"
import preview2 from "../assets/preview2.png"
import preview3 from "../assets/preview3.png"
import preview4 from "../assets/preview4.png"


const cameraDetails = {
  Location: "Coimbatore",
  City: "Coimbatore",
  Timezone: "Delhi-India",
  DateAdded: "Aug 03, 2023 12:01:42 PM",
  LastUpdate: "Aug 03, 2023 12:01:42 PM",
  ManufactureDetails: "ADT",
}

const cameraPreviews = [{
  imgUrl: preview1,
  title: "Recording_0121",
  time: "Today, 04:42 pm"
},
{
  imgUrl: preview2,
  title: "Recording_0121",
  time: "Today, 04:42 pm"
},
{
  imgUrl: preview3,
  title: "Recording_0121",
  time: "Today, 04:42 pm"
},
{
  imgUrl: preview4,
  title: "Recording_0121",
  time: "Today, 04:42 pm"
}
]

export default function Home() {
  return (
    <div className="px-20 py-10 w-full flex flex-col gap-y-6">
      <div className="flex justify-between flex-wrap items-start">
        <div className="flex items-start gap-x-3">
          <div className="bg-[#EFEFEF] rounded flex p-2">
            <Image src={arrow} alt="arrow" className="cursor-pointer" />
          </div>
          <div className="flex w-full items-start flex-col gap-y-2">
            <span className="flex items-end gap-x-2">
              <p className="font-bold text-3xl">VMS</p>
              <p className="">/ Cameras / Camera Details</p>
            </span>
            <p className="text-[#00000078]">Bank Entrance-front-view Camera1</p>

            <p className="text-black w-full">View and manage camera details, recordings and connection details</p>

          </div>
        </div>
        <div className="flex w-fit gap-x-4">
          <button className="px-5 py-3 border-2 rounded-lg border-black">
            Edit Camera
          </button>
          <button className="px-5 py-3 border-2 rounded-lg border-black">
            Deactivate
          </button>
          <button className="px-5 py-3 border-2 text-red-600 rounded-lg border-red-700">
            Delete Camera
          </button>
        </div>
      </div>
      <div className="border flex flex-col gap-y-6 rounded-md p-10">
        <div className="flex gap-x-3">
          <button className="bg-[#EFEFEF] px-6 flex gap-x-2 py-2 rounded-md">
            <Image src={recorder} alt="recorder" />
            <p>View Recorded Videos</p>
          </button>
          <button className="bg-[#EFEFEF] px-6 gap-x-2 flex py-2 rounded-md">
            <Image src={refetch} alt="refetch" />
            <p>Refetch Camera</p>
          </button>
        </div>
        <div className="flex gap-x-5 w-full flex-wrap md:flex-nowrap ">
          <Image src={preview} alt="preview" width={1500} />
          <div className="flex w-full flex-col border rounded p-10 gap-y-4">
            <span className="flex w-full items-center justify-between">
              <p className="font-semibold text-xl">Camera Details</p>
              <p className="bg-green-400 rounded-md text-white text-center py-1 px-2">Active</p>
            </span>
            <div className="flex flex-col gap-y-2">
              {Object.entries(cameraDetails).map(([key, value], index) => (
                <span key={index} className="flex gap-x-2">
                  <p className="font-bold">{key}:</p>
                  <p>{value}</p>
                </span>
              ))}
              <span className="flex gap-x-2">
                <p className="font-bold">RTSP/HLS URL:</p>
                <a href="#" className="text-blue-500 underline">Copy URL</a>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 flex-wrap md:flex-nowrap">
          <p className="font-semibold text-xl">Camera Health and Alert</p>
          <div className="flex w-full gap-x-4 flex-wrap md:flex-nowrap">
            <div className="border flex flex-col gap-y-2 w-full rounded-lg p-4">
              <p className="font-semibold text-[14px]">Offline Alert</p>
              <p className="text-[#757575] text-[13px]">If camera is continuously offline for</p>
              <p className="font-semibold text-xl">12 minutes</p>
              <p className="text-[#757575] text-[13px]">Send an email to</p>
              <p className="font-semibold">email.com</p>
            </div>
            <div className="border flex flex-col w-full gap-y-2 rounded p-4">
              <p className="font-semibold text-[14px]">Health Grade</p>
              <p className="font-semibold text-xl">96%</p>
              <p className="text-[#757575] text-[13px]">Cheers, this camera had no offline time in the last 30 days</p>
              <p className="font-semibold text-[#4CAF50]">Grade A</p>
            </div>
            <div className="border flex flex-col w-full gap-y-2 rounded p-4">
              <p className="font-semibold text-[14px]">Health Logs</p>
              <p className="text-[#757575] text-[13px]">Today, 04:37 pm: Activated</p>
              <p className="text-[#757575] text-[13px]">23 Aug, 02:22 pm: Deactivated</p>
              <p className="text-[#757575] text-[13px]">T21 Aug, 05:12 am: Activated</p>
              <p className="text-[#757575] text-[13px]">20 Aug, 02:12 am: Deactivated</p>
              <p className="text-[#757575] text-[13px]">T19 Aug, 02:12 am: Deactivated</p>
            </div>
          </div>
        </div>
        <div>
          <span className="flex justify-between flex-wrap md:flex-nowrap">
            <p className="font-semibold text-xl">Recent Recordings</p>
            <p className="underline font-semibold cursor-pointer">View All</p>
          </span>
          <div className="flex justify-between flex-wrap md:flex-nowrap">
          {cameraPreviews.map((preview, index) => (
              <div key={index} className="flex flex-col cursor-pointer gap-y-3 mt-2 rounded-md border p-3">
                <Image className="rounded-lg" src={preview.imgUrl} alt={preview.title} width={0} height={0} />
                <p className="font-semibold">{preview.title}</p>
                <p className="text-[#757575]">{preview.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}
