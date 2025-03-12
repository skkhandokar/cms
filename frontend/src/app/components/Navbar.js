"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/machines/categories/")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" className="bg-[#004aad] shadow-md">
      <Toolbar className="max-w-7xl mx-auto w-full flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.jpg" alt="CMS Logo" width={50} height={50} />
          <span className="text-white font-bold text-lg hidden md:block">Central Medicare Services</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-200">Home</Link>
          <Link href="/update" className="text-white hover:text-gray-200">Updates</Link>
          <Link href="/Staffs" className="text-white hover:text-gray-200">Our Staff</Link>
          <Link href="/Tests" className="text-white hover:text-gray-200">Our Tests</Link>
          <Link href="/doctors" className="text-white hover:text-gray-200">Doctors</Link>
          <Link href="/contact" className="text-white hover:text-gray-200">Contact</Link>
          <h1 className="text-white cursor-pointer" 
          onClick={handleMenuClick}>Machines & Tools
          </h1>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            {categories.map((category) => (
              <MenuItem key={category.name} onClick={handleMenuClose}>
              <Link href={`/machines/${encodeURIComponent(category.name)}`} className="text-black">
                {category.name}
              </Link>
            </MenuItem>
            
            ))}
          </Menu>
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex space-x-4">
          <Button variant="outlined" className="border-white text-white hover:border-gray-200 hover:text-gray-200">
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="contained" className="bg-white text-[#004aad] hover:bg-gray-200">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <IconButton edge="end" className="md:hidden text-white" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List className="w-60 p-4 bg-[#004aad] text-white">
          <ListItem button onClick={handleDrawerToggle}>
            <Link href="/" className="hover:text-gray-200">Home</Link>
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <Link href="/update" className="hover:text-gray-200">Updates</Link>
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <Link href="/Staffs" className="hover:text-gray-200">Our Staff</Link>
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <Link href="/Tests" className="hover:text-gray-200">Our Tests</Link>
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <Link href="/about" className="hover:text-gray-200">About</Link>
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <Link href="/contact" className="hover:text-gray-200">Contact</Link>
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <List className="bg-[#004aad] text-white">
              {categories.map((category) => (
                <ListItem key={category.name} button>
                  <Link href={`/machines/${category.name}`} className="hover:text-gray-200">{category.name}</Link>
                </ListItem>
              ))}
            </List>
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <Button variant="outlined" fullWidth className="border-white text-white hover:border-gray-200 hover:text-gray-200">
              <Link href="/login">Login</Link>
            </Button>
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <Button variant="contained" fullWidth className="bg-white text-[#004aad] hover:bg-gray-200">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
