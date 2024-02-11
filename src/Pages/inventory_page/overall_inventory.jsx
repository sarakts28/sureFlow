import React from "react";
import {
  OI_FirstContainer,
  OI_SecondContainer,
  OI_LastContainer,
  OI_MainContainer,
  OI_SubContainer,
  OI_SubHeaderContainer,
  styles,
} from "./style";

export default function OverallInventory() {
  return (
    <OI_MainContainer>
      <h2>Overall Inventory</h2>
      <OI_SubHeaderContainer>
        <OI_FirstContainer style={{ color: "#00008B" }}>
          <div>Category</div>
          <div style={styles.text}>14</div>
          <div style={styles.subText}>Last 7 days</div>
        </OI_FirstContainer>
        <OI_SecondContainer style={{ color: "orange" }}>
          Total Products
          <OI_SubContainer>
            <div>
              <div style={styles.text}>868</div>
              <div style={styles.subText}>Last 7 days</div>
            </div>
            <div>
              <div style={styles.text}>$25000</div>
              <div style={styles.subText}>Revenue</div>
            </div>
          </OI_SubContainer>
        </OI_SecondContainer>

        <OI_SecondContainer style={{ color: "purple" }}>
          Top Selling
          <OI_SubContainer>
            <div>
              <div style={styles.text}>5</div>
              <div style={styles.subText}>Last 7 days</div>
            </div>
            <div>
              <div style={styles.text}>$2500</div>
              <div style={styles.subText}>Cost</div>
            </div>
          </OI_SubContainer>
        </OI_SecondContainer>

        <OI_LastContainer style={{ color: "red" }}>
          Low Stocks
          <OI_SubContainer>
            <div>
              <div style={styles.text}>12</div>
              <div style={styles.subText}>Ordered</div>
            </div>
            <div>
              <div style={styles.text}>2</div>
              <div style={styles.subText}>Not in Stock</div>
            </div>
          </OI_SubContainer>
        </OI_LastContainer>
      </OI_SubHeaderContainer>
    </OI_MainContainer>
  );
}
