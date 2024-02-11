import React, { useState } from "react";
import { styles } from "./style";
import { Images } from "../../../Assest/Icons";

export default function useSideMenu() {
  const [selectedKey, setSelectedKey] = useState("inventory");
  const [isDrawerOpen, setIsDraweOpen] = useState(false);

  const menuItems = [
    {
      key: "dashboard",
      title: "Dashboard",
      icon: (
        <img
          src={
            selectedKey === "dashboard"
              ? Images.blueDashboard
              : Images.dashboard
          }
          alt="dashboard Icon"
          width={24}
          height={24}
          style={styles.iconItem}
        />
      ),
    },
    {
      key: "inventory",
      title: "Inventory",
      icon: (
        <img
          src={
            selectedKey === "inventory"
              ? Images.blueTrolley
              : Images.inventoryIcon
          }
          alt="Inverntory Icon"
          width={24}
          height={24}
          style={styles.iconItem}
        />
      ),
    },
    {
      key: "report",
      title: "Reports",
      icon: (
        <img
          src={selectedKey === "report" ? Images.blueReport : Images.reportIcon}
          alt="report Icon"
          width={24}
          height={24}
          style={styles.iconItem}
        />
      ),
    },
    {
      key: "suppliers",
      title: "Suppliers",
      icon: (
        <img
          src={
            selectedKey === "suppliers"
              ? Images.blueSuppliers
              : Images.suppliersIcon
          }
          alt="Supplier Icon"
          width={24}
          height={24}
          style={styles.iconItem}
        />
      ),
    },
    {
      key: "orders",
      title: "Order",
      icon: (
        <img
          src={selectedKey === "orders" ? Images.blueOrder : Images.orderIcon}
          alt="order Icon"
          width={24}
          height={24}
          style={styles.iconItem}
        />
      ),
    },
    {
      key: "mangerStore",
      title: "Manger Store",
      icon: (
        <img
          src={
            selectedKey === "mangerStore"
              ? Images.blueMangerIcon
              : Images.mangerIcon
          }
          alt="manger Icon"
          width={24}
          height={24}
          style={styles.iconItem}
        />
      ),
    },
  ];

  const handleDrawer = () => setIsDraweOpen(!isDrawerOpen);

  return {
    selectedKey,
    setSelectedKey,
    menuItems,
    isDrawerOpen,
    handleDrawer,
  };
}
