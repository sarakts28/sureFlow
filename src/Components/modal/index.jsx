import React from "react";
import { Modal } from "antd";
import { useFormik } from "formik";
import { InputComponent, ButtonCompoment } from "../CommonComponents";
import { InputContainer, ButtonContainer, ButtonHolder } from "./style";

export default function AddModal({ isOpen, modalClose, setAddProduct }) {
  const formik = useFormik({
    initialValues: {
      productName: "",
      productId: "",
      category: "",
      buying: "",
      quantity: "",
      unit: "",
      expiryDate: "",
      thresholdValue: "",
    },
    validate: (values) => {
      const errors = {};
      const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;

      if (!values.productName) {
        errors.productName = "Product Name is required";
      }
      if (!values.productId) {
        errors.productId = "Product Id is required";
      }
      if (values.thresholdValue > values.quantity)
        errors.thresholdValue = "Threshold less than Quantity";
      if (!dateFormatRegex.test(values.expiryDate)) {
        errors.expiryDate = "Expiry Date must be in the format YYYY-MM-DD";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
      setAddProduct(values);
    },
  });
  return (
    <>
      <Modal
        title="New Product"
        open={isOpen}
        footer={false}
        onCancel={modalClose}
      >
        <form onSubmit={formik.handleSubmit}>
          <InputContainer>
            <InputComponent
              placeHolder={"Product Name"}
              label={"Product Name"}
              name={"productName"}
              formik={formik}
            />
          </InputContainer>

          <InputContainer>
            <InputComponent
              placeHolder={"Product Id"}
              label={"Product id"}
              name={"productId"}
              formik={formik}
            />
          </InputContainer>

          <InputContainer>
            <InputComponent
              placeHolder={"Product Category"}
              label={"Category"}
              name={"category"}
              formik={formik}
            />
          </InputContainer>

          <InputContainer>
            <InputComponent
              placeHolder={"Price"}
              label={"Buying Price"}
              name={"buying"}
              formik={formik}
            />
          </InputContainer>

          <InputContainer>
            <InputComponent
              placeHolder={"Quantity"}
              label={"Quantity"}
              name={"quantity"}
              formik={formik}
            />
          </InputContainer>

          <InputContainer>
            <InputComponent
              placeHolder={"Unit"}
              label={"Unit"}
              name={"Unit"}
              formik={formik}
            />
          </InputContainer>

          <InputContainer>
            <InputComponent
              placeHolder={"Expiry Date"}
              label={"Expiry Date"}
              name={"expiryDate"}
              formik={formik}
            />
          </InputContainer>

          <InputContainer>
            <InputComponent
              placeHolder={"Threshold"}
              label={"Threshold Value"}
              name={"thresholdValue"}
              formik={formik}
            />
          </InputContainer>

          <ButtonContainer>
            <ButtonHolder>
              <ButtonCompoment
                type="default"
                label={"Discard"}
                onHandleButtonClick={modalClose}
              />
            </ButtonHolder>
            <ButtonCompoment
              type="primary"
              htmlType="submit"
              label={"Add Product"}
            />
          </ButtonContainer>
        </form>
      </Modal>
    </>
  );
}
