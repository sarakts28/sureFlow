import React from "react";
import { Header, SideMenu, TableComponent } from "../../Components";
import { DesktopContainer, MobContainer, TableContainer } from "./style";
import useInventory from "./useInventory";
import OverallInventory from "./overall_inventory";
import ProductHeader from "../product_header";
export default function InventoryPage() {
  const {
    searchValue,
    onSearch,
    onClickAddProduct,
    onClickDownload,
    onClickFilter,
  } = useInventory();
  return (
    <>
      <DesktopContainer>
        <SideMenu />
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Header onSearch={onSearch} value={searchValue} />
          <OverallInventory />
          <TableContainer>
            <ProductHeader
              onClickAddProduct={onClickAddProduct}
              onClickDownload={onClickDownload}
              onClickFilter={onClickFilter}
            />
            <TableComponent />
          </TableContainer>
        </div>
      </DesktopContainer>
      <MobContainer>
        <SideMenu />
        <Header onSearch={onSearch} value={searchValue} />
        <OverallInventory />
        <TableContainer>
          <ProductHeader
            onClickAddProduct={onClickAddProduct}
            onClickDownload={onClickDownload}
            onClickFilter={onClickFilter}
          />
          <TableComponent />
        </TableContainer>
      </MobContainer>
    </>
  );
}
