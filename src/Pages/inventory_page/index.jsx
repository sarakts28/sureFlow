import React from "react";
import { AddModal, Header, TableComponent } from "../../Components";
import { SideMenu } from "../../Components/CommonComponents";
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
    data,
    setDeleteRecord,
    isOpen,
    onClickModalClose,
    setAddProduct,
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
            <TableComponent data={data} setDeleteRecord={setDeleteRecord} />
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
          <TableComponent data={data} setDeleteRecord={setDeleteRecord} />
        </TableContainer>
      </MobContainer>
      {isOpen ? (
        <AddModal
          isOpen={isOpen}
          modalClose={onClickModalClose}
          setAddProduct={setAddProduct}
        />
      ) : null}
    </>
  );
}
