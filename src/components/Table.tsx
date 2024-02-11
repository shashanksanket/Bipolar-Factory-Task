import Image from "next/image";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import edit from "../assets/edit.svg"
import delet from "../assets/delete.svg"

function createData(
  Name: string,
  Email: string,
  Role: string,
  Locations: string,
  LastActive: string,
  Permissions: string,
  Status: string,
) {
  return { Name, Email, Role, Locations, LastActive, Permissions, Status };
}

const rows = [
  createData('Peter John', 'Peter@gmail.com', 'Owner', 'Adam Stall,Coimbatore', 'Sep 13, 2023 5:51 PM', 'All Permissions', 'Active'),
  createData('Lingan', 'Lin@gmail.com', 'Executive', 'MMDA ,Coimbatore', 'Today, 2023 2:11 PM', '3 Permissions', 'Active'),
  createData('Adam', 'Adam@gmail.com', 'Admin', 'DEO Office,Coimbatore', 'Sep 13, 2023 5:51 PM', '6 Permissions', 'Active'),
  createData('Smith', 'Smith@gmail.com', 'Supervisor', 'Plot Hub ,Coimbatore', 'Sep 13, 2023 5:51 PM', '5 Permissions', 'Active'),
  createData('John Abraham', 'John@gmail.com', 'Executive', 'CA ,Coimbatore', 'Sep 13, 2023 5:51 PM', '2 Permissions', 'Inactive'),
];

export default function TableComponent() {

  return (
    <TableContainer className="w-full" component={Paper}>
      <Table className="w-full" aria-label="simple table">
        <TableHead className="m-4">
          <TableRow className="bg-[#F3F3F3] m-5 ">
            <TableCell align="center" className="!text-[#7A7A7A]">Name</TableCell>
            <TableCell align="center" className="!text-[#7A7A7A]">Email</TableCell>
            <TableCell align="center" className="!text-[#7A7A7A]">Role</TableCell>
            <TableCell align="center" className="!text-[#7A7A7A]">Location</TableCell>
            <TableCell align="center" className="!text-[#7A7A7A]">Last Active</TableCell>
            <TableCell align="center" className="!text-[#7A7A7A]">Permission</TableCell>
            <TableCell align="center" className="!text-[#7A7A7A]">Status</TableCell>
            <TableCell align="center" className="!text-[#7A7A7A]">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="center">{row.Email}</TableCell>
              <TableCell align="center">{row.Role}</TableCell>
              <TableCell align="center">{row.Locations}</TableCell>
              <TableCell align="center">{row.LastActive}</TableCell>
              <TableCell align="center">{row.Permissions}</TableCell>
              <TableCell align="center">
                <p className={`!text-white rounded py-1 px-3 ${row.Status == 'Active' ? 'bg-[#4CAF50]' : 'bg-[#ED1C24]'}`}>
                  {row.Status}
                </p>
              </TableCell>
              <TableCell align="center">
                <span className="flex gap-x-4">
                  <Image className="cursor-pointer" src={edit} alt="edit" />
                  <Image className="cursor-pointer" src={delet} alt="delet" />
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
