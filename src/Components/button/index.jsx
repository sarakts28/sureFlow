import { Button } from "antd";
import React from "react";
import { styles } from "./style";

export default function ButtonCompoment({
  type = "primary",
  icon,
  label,
  height,
  onHandleButtonClick,
}) {
  const buttonStyle = {
    ...styles.buttonStyle,
    height: height ? height : "50px", // Dynamically set the height based on props
  };
  return (
    <div>
      <Button
        type={type}
        icon={icon}
        shape="rounded"
        style={buttonStyle}
        onClick={onHandleButtonClick}
      >
        {label}
      </Button>
    </div>
  );
}
