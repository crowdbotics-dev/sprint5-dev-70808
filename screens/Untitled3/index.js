import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.AZwxdwpG}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  AZwxdwpG: {
    height: "60%",
    width: "360%",
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    left: "50%",
    top: "0%"
  }
});
export default Untitled3;