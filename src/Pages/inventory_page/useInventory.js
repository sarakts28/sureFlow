import { useState } from "react";

export default function useInventory() {
  const [searchValue, setSearchValue] = useState("");
  const onSearch = (event) => {
    console.log("Searchinnnn");
    setSearchValue(event.target.value);
  };

  return { searchValue, onSearch };
}
