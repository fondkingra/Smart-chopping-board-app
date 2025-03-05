import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, SafeAreaView, Dimensions } from "react-native";
import { MotiView, MotiText } from "moti";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Line } from "react-native-svg"; // For glowing dividers

const { height, width } = Dimensions.get("window");

const HALL_SENSOR_URL = "192.168.29.62"; // Replace with ESP32's IP

const HallSensorScreen = () => {
  const [hallValue, setHallValue] = useState<number | null>(null);

  useEffect(() => {
    const ws = new WebSocket(HALL_SENSOR_URL);

    ws.onopen = () => console.log("Connected to ESP32 WebSocket");
    ws.onmessage = (event) => {
      console.log("Hall Sensor Reading:", event.data);
      setHallValue(parseInt(event.data, 10));
    };

    ws.onerror = (error) => console.error("WebSocket Error:", error);
    ws.onclose = () => console.log("WebSocket Disconnected");

    return () => ws.close();
  }, []);

  return (
    <LinearGradient
      colors={["#0f172a", "#1e293b"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, height, width, justifyContent: "center", alignItems: "center" }}
    >
      <StatusBar barStyle="light-content" />

      {/* Glowing Divider Effect */}
      <Svg height="4" width={width * 0.8} style={{ position: "absolute", top: height * 0.2 }}>
        <Line x1="0" y1="2" x2={width * 0.8} y2="2" stroke="#60A5FA" strokeWidth="2" strokeOpacity="0.6" />
      </Svg>

      {/* Glassmorphic Card with Futuristic Styling */}
      <MotiView
        from={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 800 }}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: 30,
          borderRadius: 30,
          width: width * 0.9,
          alignItems: "center",
          shadowColor: "#60A5FA",
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.25,
          shadowRadius: 20,
          borderWidth: 1.5,
          borderColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(15px)", // Glass effect
        }}
      >
        {/* Title with Subtle Glow */}
        <MotiText
          from={{ opacity: 0.7, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "timing", duration: 800 }}
          style={{
            color: "white",
            fontSize: 26,
            fontWeight: "bold",
            textAlign: "center",
            textShadowColor: "#60A5FA",
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 10,
          }}
        >
          Hall Sensor Reading
        </MotiText>

        {/* Animated Sensor Value with Pulsating Glow */}
        <MotiView
          from={{ scale: 0.9, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "timing",
            duration: 1000,
            loop: true,
            repeatReverse: true,
          }}
          style={{
            marginTop: 20,
            padding: 15,
            borderRadius: 25,
            backgroundColor: "rgba(96, 165, 250, 0.2)", // Subtle background for glow
            shadowColor: "#60A5FA",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 40,
          }}
        >
          <MotiText
            from={{ opacity: 0.6, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "timing",
              duration: 700,
              loop: true,
              repeatReverse: true,
            }}
            style={{
              fontSize: 72,
              fontWeight: "bold",
              color: "#60A5FA",
              textAlign: "center",
              textShadowColor: "#3B82F6",
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 40,
            }}
          >
            {hallValue !== null ? hallValue : "Waiting..."}
          </MotiText>
        </MotiView>

        {/* Futuristic Subtitle */}
        <Text
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 16,
            marginTop: 15,
            textAlign: "center",
          }}
        >
          Real-time sensor data from ESP32
        </Text>
      </MotiView>

      {/* Glowing Divider Effect */}
      <Svg height="4" width={width * 0.8} style={{ position: "absolute", bottom: height * 0.2 }}>
        <Line x1="0" y1="2" x2={width * 0.8} y2="2" stroke="#60A5FA" strokeWidth="2" strokeOpacity="0.6" />
      </Svg>
    </LinearGradient>
  );
};

export default HallSensorScreen;
