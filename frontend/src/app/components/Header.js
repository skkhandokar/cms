"use client";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <Toolbar className="flex justify-between">

    
        <Typography variant="h6" className="text-white font-bold">
          Diagnostic Center
        </Typography>


        <div>
          <Button color="inherit">
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          </Button>
          <Button color="inherit">
            <Link href="/staffs" className="text-white hover:text-gray-300">Our Staff</Link>
          </Button>
          <Button color="inherit">
            <Link href="/services" className="text-white hover:text-gray-300">Services</Link>
          </Button>
          <Button color="inherit">
            <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
