import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logIn } from "redux/slices/loginSlice";

export interface LoginData {
  username: string;
  password: string;
}

const useSignIn = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

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
      dispatch(logIn());
      console.log("successfully signed in!", response.data);
      navigation.navigate("Home");
    } catch (error: any) {
      console.error("There was an error with sign in:", error);
    }
  };

  return { signIn };
};

export default useSignIn;
