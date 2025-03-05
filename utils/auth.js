import * as SecureStore from "expo-secure-store";

// ✅ Hardcoded Admin Login
export const login = async (username, password) => {
  if (username === "admin" && password === "1234") {
    await SecureStore.setItemAsync("token", "admin-authenticated");
    return { success: true, message: "Welcome, Admin!" };
  } else {
    return { error: "Invalid username or password." };
  }
};

// ✅ Logout Function
export const logout = async () => {
  await SecureStore.deleteItemAsync("token");
};

// ✅ Check if User is Logged In
export const getUser = async () => {
  const token = await SecureStore.getItemAsync("token");
  return token === "admin-authenticated" ? { username: "admin" } : null;
};
