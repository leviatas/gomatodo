import { ThemedText } from "@/components/ThemedText";
import { useAuthStore } from "@/hooks/useAuthStore";
import { Redirect, Stack } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

const CheckAuthenticationLayout = () => {
  const { status, checkStatus } = useAuthStore();

  useEffect(() => {
    checkStatus();
  }, []);

  if (status === "checking") {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  if (status === "unauthenticated") {
    // Guardar la ruta del usuario
    return <Redirect href={"/auth/login" as any} />;
  }

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="(home)/index"
        options={{
          title: "Productos",
          headerLeft: () => (
            <ThemedText style={{ fontFamily: "KanitBold" }}>Logout</ThemedText>
          ),
        }}
      />
    </Stack>
  );
};
export default CheckAuthenticationLayout;
