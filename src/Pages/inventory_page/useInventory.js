import { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

export default function useInventory() {
  const [searchValue, setSearchValue] = useState("");
  const [deleteRecord, setDeleteRecord] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [addProduct, setAddProduct] = useState(null);

  const productName = [
    "Bru",
    "Red Bull",
    "Bourn Vita",
    "Horlicks",
    "Harpic Ariel",
    "Scotch Brite",
    "Coca Cola",
    "LU",
    "Lipton",
    "Tapal",
    "National",
    "Shezan",
    "Shan",
    "Heinz",
    "Mitchells",
    "Knorr",
    "Shangrilla",
    "Farm House",
    "Maggi",
    "Russell Stover",
    "Nestlé",
    "Candbury",
  ];

  const onSearch = (event) => {
    const seacrhWord = event.target.value;
    setSearchValue(seacrhWord.toLowerCase());
    if (seacrhWord) {
      const filterData = tableData.filter((item) => {
        return item.products.toLowerCase().includes(seacrhWord.toLowerCase());
      });
      setFilteredData(filterData);
    } else {
      setFilteredData([]);
      setTableData(tableData);
    }
  };

  const onClickAddProduct = () => {
    console.log("on click add product");
    setIsOpen(true);
  };

  const onClickModalClose = () => {
    setIsOpen(false);
  };

  const onClickDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "Product_Data.xlsx");
  };

  const onClickFilter = () => {
    console.log("on click filter");
  };

  const handleTableData = () => {
    let dataArray = productName.map((product, index) => {
      const buyPrice = `$ ${Math.floor(Math.random() * 50)}`;
      const quantity = `Packets ${Math.floor(Math.random() * 100)}`;
      const tValue = `Packets ${Math.floor(Math.random() * 10)}`;
      const eDate = new Date(
        Date.UTC(
          2024,
          Math.floor(Math.random() * 9) + 2,
          Math.floor(Math.random() * 28) + 1
        )
      );
      const availability =
        `${Math.floor(Math.random() * 10)}` > 4 ? "In-stock" : "Out of Stock";

      return {
        key: index,
        products: product,
        buyPrice: buyPrice,
        quantity: quantity,
        tValue: tValue,
        eDate: eDate.toISOString().split("T")[0],
        availability: availability,
      };
    });

    setTableData(dataArray);
  };

  const deleteProduct = () => {
    const filterData = tableData.filter((item) => {
      return item.key !== deleteRecord.key;
    });
    setTableData(filterData);
  };

  const addProductTable = () => {
    const obj = {
      key: addProduct.productId,
      products: addProduct.productName,
      buyPrice: `$ ${addProduct.buying}`,
      quantity: `Packets ${addProduct.quantity}`,
      tValue: `Packets ${addProduct.thresholdValue}`,
      eDate: addProduct.expiryDate,
      availability:
        addProduct.thresholdValue < 0.5 ? "In-stock" : "Out of Stock",
    };

    setTableData([...tableData, obj]);
    setIsOpen(false);
  };

  useEffect(() => {
    if (addProduct !== null) addProductTable();
  }, [addProduct]);

  useEffect(() => {
    if (deleteRecord !== null) {
      deleteProduct();
    }
  }, [deleteRecord]);

  useEffect(() => {
    handleTableData();
  }, []);

  return {
    searchValue,
    onSearch,
    onClickAddProduct,
    onClickDownload,
    onClickFilter,
    data: filteredData.length > 0 ? filteredData : tableData,
    setDeleteRecord,
    isOpen,
    onClickModalClose,
    setAddProduct,
  };
}
