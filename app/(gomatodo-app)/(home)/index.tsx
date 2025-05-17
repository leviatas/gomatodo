import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
const HomeScreen = () => {
  return (
    <View style={{ paddingTop: 100, paddingHorizontal: 20 }}>
      <ThemedText style={{ fontFamily: "KanitBold" }}>HomeScreen</ThemedText>
      <ThemedText style={{ fontFamily: "KanitRegular" }}>HomeScreen</ThemedText>
      <ThemedText style={{ fontFamily: "KanitThin" }}>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
    </View>
  );
};
export default HomeScreen;
