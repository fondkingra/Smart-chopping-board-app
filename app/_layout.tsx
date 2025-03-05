import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import SplashScreen from "./splash";
import { useFonts } from "expo-font";
import { getUser } from "../utils/auth"; // ✅ Import local auth function

export default function Layout() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // ✅ Load custom font
  const [fontsLoaded] = useFonts({
    Audiowide: require("../assets/fonts/Audiowide-Regular.ttf"),
  });

  useEffect(() => {
    const checkAuth = async () => {
      const loggedInUser = await getUser();
      setUser(loggedInUser);
      setLoading(false);

      // ✅ Redirect based on authentication status
      if (!loggedInUser) {
        router.replace("/login"); // If no user, go to login
      } else {
        router.replace("/dashboard"); // ✅ Change this to your actual home screen
      }
    };

    if (fontsLoaded) {
      setTimeout(checkAuth, 2000); // Reduce splash time to 2 seconds
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || loading) return <SplashScreen />; // ✅ Show splash first

  return <Stack screenOptions={{ headerShown: false }} />;
}
