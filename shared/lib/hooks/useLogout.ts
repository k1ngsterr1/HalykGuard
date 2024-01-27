import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLogOut = () => {
  const logOut = () => {
    AsyncStorage.removeItem("JWT");
  };

  return { logOut };
};
