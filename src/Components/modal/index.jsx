import React from "react";
import { Modal, Input, Button } from "antd";
import { useFormik } from "formik";
import ButtonCompoment from "../CommonComponents/button";

export default function AddModal({ isOpen, modalClose }) {
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
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isOpen}
        footer={false}
        onCancel={modalClose}
      >
        <form onSubmit={formik.handleSubmit}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ marginRight: "20px" }}> Product Name</div>
            <Input
              name="productName"
              style={{
                width: "70%",
              }}
              placeholder="Product Name"
              onChange={formik.handleChange}
              value={formik.values.productName}
            />
          </div>
          <ButtonCompoment type="primary" htmlType="submit" label={"Add"} />
        </form>
      </Modal>
    </>
  );
}
