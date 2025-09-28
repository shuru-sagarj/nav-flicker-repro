import {
  TabList,
  Tabs,
  TabSlot,
  TabTrigger,
  TabTriggerSlotProps,
} from "expo-router/ui";
import React, { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CustomTabBtn = React.forwardRef<
  View,
  PropsWithChildren & TabTriggerSlotProps
>((props, ref) => {
  return (
    <Pressable
      {...props}
      style={[
        styles.btn,
        {
          backgroundColor: props.isFocused ? "white" : "transparent",
        },
      ]}
    >
      <Text>{props.children}</Text>
    </Pressable>
  );
});

const CustomTabList = () => {
  return (
    <View style={styles.custom}>
      <TabTrigger asChild name={"home"} href={"/(tabs)/home"}>
        <CustomTabBtn>Tab One</CustomTabBtn>
      </TabTrigger>
      <TabTrigger asChild name={"two"} href={"/(tabs)/two"}>
        <CustomTabBtn>Tab Two</CustomTabBtn>
      </TabTrigger>
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs>
      <TabSlot />
      <CustomTabList />
      <TabList style={[styles.tabsList]}>
        <TabTrigger name={"home"} href={"/(tabs)/home"} />
        <TabTrigger name={"two"} href={"/(tabs)/two"} />
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabsList: {},
  custom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    padding: 20,
    marginBottom: 20,
    alignContent: "center",
    justifyContent: "center",
  },
});
