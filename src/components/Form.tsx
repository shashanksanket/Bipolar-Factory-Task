import Image from "next/image";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Form() {
  const handleSubmit = ()=>{

  }

  return (
    <div className="w-full border rounded px-20 py-16">
      <form className="flex w-full flex-col gap-y-4" onSubmit={handleSubmit}>
        <p className="text-center font-bold text-4xl">XYZ</p>
        <p className="text-center text-3xl">Welcome Onboard</p>
        <Box
      component="form"
      noValidate
      autoComplete="off"
      className="flex flex-col gap-y-4 !w-full"
    >
      <TextField id="filled-basic" label="Your Name" variant="filled" className="bg-[#E7E0EC]" />
      <TextField id="filled-basic" label="Company Name" variant="filled" className="bg-[#E7E0EC]" />
      <TextField id="filled-basic" label="Select Industry" variant="filled" className="bg-[#E7E0EC]" />
    </Box>
      <p className="text-[#1C1B1F]">Select Number of Locations</p>
      <div className="flex  w-full gap-x-3 justify-between font-bold">
        <p className="bg-[#E7E0EC] px-2 py-1 rounded cursor-pointer hover:text-white hover:bg-[#333333]">1-10</p>
        <p className="bg-[#E7E0EC] px-2 py-1 rounded cursor-pointer hover:text-white hover:bg-[#333333]">10-50</p>
        <p className="bg-[#E7E0EC] px-2 py-1 rounded cursor-pointer hover:text-white hover:bg-[#333333]">50-150</p>
        <p className="bg-[#E7E0EC] px-2 py-1 rounded cursor-pointer hover:text-white hover:bg-[#333333]">150+</p>
      </div>
      <button className="bg-[#333333] py-2 text-white hover:bg-[#E7E0EC] hover:text-black rounded">Continue</button>
      </form>
    </div>
  );
}
