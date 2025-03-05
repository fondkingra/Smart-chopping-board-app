import React, { useEffect } from "react";
import { View, Dimensions } from "react-native";
import { MotiView, MotiText } from "moti";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const { height, width } = Dimensions.get("window");

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/login"); // ✅ Redirect to login after animation
    }, 3000); // ✅ Show animation for 3 seconds
  }, []);

  return (
    <LinearGradient colors={["#0f172a", "#1e293b"]} style={{ flex: 1, width, height }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <MotiView
          from={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 2000 }}
          style={{ alignItems: "center" }}
        >
          <MotiText
            from={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "spring", duration: 1500 }}
            style={{
              fontSize: 42,
              fontWeight: "bold",
              color: "#60A5FA",
              textAlign: "center",
              fontFamily: "Audiowide",
              textShadowColor: "#3B82F6",
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 20,
            }}
          >
            Smart Chopping Board
          </MotiText>
        </MotiView>
      </View>
    </LinearGradient>
  );
}
