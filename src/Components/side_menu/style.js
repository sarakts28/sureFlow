import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 320px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  height: 90vh;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const BottomMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 45vh;
`;

export const Heading = styled.h1`
  display: flex;
  padding: 0px 30px;
  color: #1677ff;
  font-size: 32px;
`;

export const MenuContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const styles = {
  menuItem: {
    fontSize: "14px",
    marginTop: "20px",
    fontWeight: 600,
    display: "flex",
    justidyContent: "center",
    alignItems: "center",
  },
  iconItem: { marginRight: "10px" },
};
