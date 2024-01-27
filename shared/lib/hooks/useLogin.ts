import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export interface LoginData {
  username: string;
  password: string;
}

const useSignIn = () => {
  const navigation = useNavigation<any>();

  const signIn = async (data: LoginData) => {
    const formData = new FormData();

    Object.keys(data).forEach((key: any) => {
      formData.append(key, data[key]);
    });
    try {
      const response = await axios.post(
        "https://halyk-production.up.railway.app/api/v1/auth/login/",
        formData
      );
      AsyncStorage.setItem("JWT", response.data.access_token);
      console.log("successfully signed in!", response.data);
    } catch (error: any) {
      console.error("There was an error with sign in:", error);
    } finally {
      navigation.navigate("Home");
    }
  };

  return { signIn };
};

export default useSignIn;
