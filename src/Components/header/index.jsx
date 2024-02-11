import React, { useState } from "react";
import { MainContainer, NotificationContainer } from "./style";
import { ConfigProvider, Input } from "antd";
import { Images } from "../../Assest/Icons";
import { SearchOutlined } from "@ant-design/icons";
export default function Header({ onSearch, value }) {
  const [changevalue, setValue] = useState("");
  return (
    <MainContainer>
      <ConfigProvider
        theme={{
          components: {
            Input: { paddingBlock: 10, paddingInline: 10 },
          },
        }}
      >
        <div>
          <Input
            prefix={
              <SearchOutlined
                style={{ fontSize: "24px", marginRight: "5px" }}
              />
            }
            placeholder="Search product, supplier, orders"
            onChange={onSearch}
            allowClear
            value={value}
          />
        </div>
      </ConfigProvider>
      <NotificationContainer>
        <img
          src={Images.notificationIcon}
          width={30}
          height={30}
          alt="notification"
        />
        <img src={Images.userIcon} width={30} height={30} alt="avart" />
      </NotificationContainer>
    </MainContainer>
  );
}
