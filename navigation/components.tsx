import React from "react";

// Third Party Libraries
import { Text } from "react-native";

// Styling
import StyleGuide from "../StyleGuide";

// Header Components
interface HeaderTitleProps {
  title: string;
}

export const HeaderTitle = ({ title }: HeaderTitleProps) => (
  <Text
    style={{ fontSize: 24, fontWeight: "400", color: StyleGuide.colors.text }}
  >
    {title}
  </Text>
);

// Header Options
export const headerOptions = {
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: StyleGuide.colors.background2,
    height: 100,
    shadowColor: StyleGuide.colors.background4,
  },
};

// Tab Bar Components
interface TabLabelProps {
  title: string;
  focused: boolean;
}

export const TabLabel = ({ title, focused }: TabLabelProps) => (
  <Text
    style={{
      fontSize: 18,
      fontFamily: "Permanent-Marker",
      color: focused ? StyleGuide.colors.text2 : StyleGuide.colors.text4,
    }}
  >
    {title}
  </Text>
);
