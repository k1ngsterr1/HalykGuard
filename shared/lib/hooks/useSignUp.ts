import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const useSignUp = () => {
  const navigation = useNavigation<any>();

  const signUp = async (data: UserData) => {
    try {
      const response = await axios.post(
        "https://halyk-production.up.railway.app/api/v1/auth/signup",
        data
      );
      console.log("successfully signed up!");
    } catch (error: any) {
      console.error("There was an error with sign up:", error);
    } finally {
      navigation.navigate("Home");
    }
  };

  return { signUp };
};

export default useSignUp;
