import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Dimensions } from "react-native";
import { MotiView, MotiText } from "moti";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { login } from "../utils/auth"; // ✅ Import local auth function

const { width } = Dimensions.get("window");

const LoginScreen = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (username === "admin" && password === "1234") {
      await login(username, password);
      Alert.alert("Success", "Welcome, Admin!");
      router.replace("/"); // ✅ Redirect to index.tsx
    } else {
      Alert.alert("Error", "Invalid username or password.");
    }
  };

  return (
    <LinearGradient colors={["#0f172a", "#1e293b"]} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MotiView
        from={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 800 }}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: 30,
          borderRadius: 20,
          width: width * 0.9,
          alignItems: "center",
          borderWidth: 1.5,
          borderColor: "rgba(255, 255, 255, 0.15)",
          shadowColor: "#60A5FA",
          shadowOpacity: 0.5,
          shadowRadius: 20,
        }}
      >
        <MotiText style={{ color: "white", fontSize: 26, fontWeight: "bold", textShadowColor: "#60A5FA", textShadowRadius: 10 }}>
          Admin Login
        </MotiText>

        <TextInput
          placeholder="Username"
          placeholderTextColor="rgba(255,255,255,0.7)"
          value={username}
          onChangeText={setUsername}
          style={{
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: 15,
            borderRadius: 10,
            marginTop: 20,
            color: "white",
            borderWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.2)",
          }}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: 15,
            borderRadius: 10,
            marginTop: 15,
            color: "white",
            borderWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.2)",
          }}
        />

        <TouchableOpacity
          onPress={handleLogin}
          style={{
            marginTop: 20,
            backgroundColor: "#60A5FA",
            padding: 12,
            borderRadius: 10,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Login</Text>
        </TouchableOpacity>
      </MotiView>
    </LinearGradient>
  );
};

export default LoginScreen;
