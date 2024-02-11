import React from "react";
import {
  MainContainer,
  HeaderTitle,
  ButtonContainer,
  ButtonWidth,
} from "./style";
import { ButtonCompoment } from "../../Components";
import { FilterFilled } from "@ant-design/icons";

export default function ProductHeader({
  onClickAddProduct,
  onClickDownload,
  onClickFilter,
}) {
  return (
    <MainContainer>
      <HeaderTitle>Products</HeaderTitle>
      <ButtonContainer>
        <ButtonWidth>
          <ButtonCompoment
            onHandleButtonClick={onClickAddProduct}
            label={"Add Product"}
          />
        </ButtonWidth>
        <ButtonWidth>
          <ButtonCompoment
            onHandleButtonClick={onClickFilter}
            icon={<FilterFilled />}
            type={"default"}
            label={"Filter"}
          />
        </ButtonWidth>
        <ButtonWidth>
          <ButtonCompoment
            onHandleButtonClick={onClickDownload}
            label={"Download All"}
            type={"default"}
          />
        </ButtonWidth>
      </ButtonContainer>
    </MainContainer>
  );
}
