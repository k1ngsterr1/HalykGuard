import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export interface UserData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirm_password: string;
}

const useSignUp = () => {
  const navigation = useNavigation<any>();

  const signUp = async (data: UserData) => {
    try {
      const response = await axios.post(
        "https://halyk-production.up.railway.app/api/v1/auth/signup/",
        data
      );
      console.log("successfully signed up!", response.data);
    } catch (error: any) {
      console.error("There was an error with sign up:", error);
    } finally {
      console.log("finally!");
      navigation.navigate("Login");
    }
  };

  return { signUp };
};

export default useSignUp;
