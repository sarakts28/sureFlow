import React from "react";
import { Input } from "antd";
import { ErrorContainer, Container, LabelContainer } from "./style";

export default function InputComponent({ formik, label, name, placeHolder }) {
  return (
    <>
      <LabelContainer> {label}</LabelContainer>
      <Container>
        <Input
          name={name}
          placeholder={placeHolder}
          onChange={formik.handleChange}
          value={formik.values[name]}
        />

        {formik.errors[name] && (
          <ErrorContainer>{formik.errors[name]}</ErrorContainer>
        )}
      </Container>
    </>
  );
}
