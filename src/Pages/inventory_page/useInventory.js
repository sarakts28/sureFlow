import { useState } from "react";

export default function useInventory() {
  const [searchValue, setSearchValue] = useState("");
  const onSearch = (event) => {
    console.log("Searchinnnn");
    setSearchValue(event.target.value);
  };

  const onClickAddProduct = () => {
    console.log("on click add product");
  };

  const onClickDownload = () => {
    console.log("on click Download");
  };
  const onClickFilter = () => {
    console.log("on click filter");
  };

  return {
    searchValue,
    onSearch,
    onClickAddProduct,
    onClickDownload,
    onClickFilter,
  };
}
