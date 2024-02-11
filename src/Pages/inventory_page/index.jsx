import React from "react";
import { Header, SideMenu } from "../../Components";
import { DesktopContainer, MobContainer } from "./style";
import useInventory from "./useInventory";
export default function InventoryPage() {
  const { searchValue, onSearch } = useInventory();
  return (
    <>
      <DesktopContainer>
        <SideMenu />
        <Header onSearch={onSearch} value={searchValue} />
      </DesktopContainer>
      <MobContainer>
        <SideMenu />
        <Header onSearch={onSearch} value={searchValue} />
      </MobContainer>
    </>
  );
}
