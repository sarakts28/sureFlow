import React from "react";
import { Header, SideMenu } from "../../Components";

export default function InventoryPage() {
  return (
    <div
      style={{ display: "flex", backgroundColor: "#dadada", height: "100vh" }}
    >
      <SideMenu />
      <Header />
    </div>
  );
}
