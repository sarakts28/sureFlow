import { Button } from "antd";
import React from "react";
import { Images } from "../../Assest/Icons";
import { styles } from "./style";

export default function ButtonCompoment({
  type = "primary",
  icon = (
    <img src={Images.blueDashboard} width={20} height={20} alt="no image" />
  ),
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
