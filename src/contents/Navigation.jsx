import { FaHome } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";

export const Navigation = [
  {
    lable: "Home",
    href: "/",
    icon: <FaHome />,
  },
  {
    lable: "Statistcs",
    href: "/statistcs",
    icon: <IoAnalytics />,
  },
  {
    lable: "Dashbord",
    href: "/dashbord",
    icon: <BiSolidDashboard />,
  },
  {
    lable: "About",
    href: "/about",
    icon: <FaInfoCircle />,
  },
];

export const SideNavigation = [
  {
    lable: "All Product",
    category: "allproduct",
  },
  {
    lable: "Laptop",
    category: "laptops",
  },
  {
    lable: "Phone",
    category: "smartphones",
  },
  {
    lable: "Gaming Colsoles",
    category: "gamingcolsoles",
  },
  {
    lable: "Accessories",
    category: "accessories",
  },
  {
    lable: "Smart Watches",
    category: "smartwatches",
  },
  {
    lable: "MacBook",
    category: "macbook",
  },
  {
    lable: "Iphone",
    category: "iphone",
  },
  {
    lable: "Printers",
    category: "printers",
  },
];
