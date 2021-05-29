import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "My Profile",
    path: "/UserProfile",
    icon: <FaIcons.FaUser />,
    cName: "nav-text"
  },
  {
    title: "Sell your Product",
    path: "/SellingPage",
    icon: <FaIcons.FaStore />,
    cName: "nav-text"
  },

  {
    title: "Our Shops",
    path: "/Map",
    icon: <FaIcons.FaMapMarkerAlt />,
    cName: "nav-text"
  },
  {
    title: "Support",
    path: "/support",
    icon: <FaIcons.FaEnvelope />,
    cName: "nav-text"
  },
  {
    title: "Logout",
    path: "/",
    icon: <AiIcons.AiOutlineLogout />,
    cName: "nav-text"
  }
];
