import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { logOut as logOutFunction } from "redux/slices/loginSlice";

export const useLogOut = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const logOut = () => {
    try {
      AsyncStorage.removeItem("JWT");
      dispatch(logOutFunction());
      navigation.navigate("Onboarding");
      console.log("jwt удален");
    } catch (error: any) {
      console.error("Ошибка", error);
    }
  };

  return { logOut };
};
