import React from "react";
import { ConfigProvider, Menu } from "antd";
import {
  MenuContainer,
  BottomMenuItem,
  Heading,
  MenuContainerStyle,
  styles,
} from "./style";
import { Images } from "../../Assest/Icons";
import useSideMenu from "./useSideMenu";

const SideMenu = () => {
  const { selectedKey, setSelectedKey, menuItems } = useSideMenu();

  return (
    <>
      <MenuContainer>
        <Heading>TapShelf</Heading>
        <MenuContainerStyle>
          <ConfigProvider
            theme={{
              components: {
                Menu: {
                  activeBarBorderWidth: 0,
                  itemSelectedBg: "#ffffff",
                },
              },
            }}
          >
            <Menu
              mode="vertical"
              style={{
                width: "250px",
              }}
              selectedKeys={selectedKey}
              onSelect={(event) => {
                setSelectedKey(event.key);
              }}
            >
              {menuItems.map((item) => (
                <Menu.Item
                  key={item.key}
                  icon={item.icon}
                  style={styles.menuItem}
                >
                  {item.title}
                </Menu.Item>
              ))}

              <BottomMenuItem>
                <Menu.Item
                  key={"sittings"}
                  style={styles.menuItem}
                  icon={
                    <img
                      src={Images.sittingIcon}
                      alt="sitting Icon"
                      width={24}
                      height={24}
                      style={styles.iconItem}
                    />
                  }
                >
                  Sittings
                </Menu.Item>
                <Menu.Item
                  key={"logot out"}
                  style={styles.menuItem}
                  icon={
                    <img
                      src={Images.logoutIcon}
                      alt="report Icon"
                      width={24}
                      height={24}
                      style={styles.iconItem}
                    />
                  }
                >
                  Logout
                </Menu.Item>
              </BottomMenuItem>
            </Menu>
          </ConfigProvider>
        </MenuContainerStyle>
      </MenuContainer>
    </>
  );
};

export default SideMenu;
