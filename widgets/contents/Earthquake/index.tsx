import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import UnderTab from "features/UnderTab/ui";
import { Fonts } from "shared/styles/theme";
import axios from "axios";
<<<<<<< HEAD
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { toggleOffLoader, toggleOnLoader } from "redux/slices/loaderSlice";
import { RootState } from "redux/store";
import { Loader } from "shared/ui/Loader";
=======
import { styles } from "./styles";
import * as Notifications from 'expo-notifications';
>>>>>>> f1947a805420c4dfff45bcbdae832b55b7a678e6

interface EarthquakeData {
  magnitude: number;
  location: string;
  readableTime: string;
  distance_km: number;
}

const EarthquakeContent: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  const [list, setList] = useState<EarthquakeData[]>([]);

  const getColorForMagnitude = (magnitude: number) => {
    let result = "";
    if (magnitude >= 10) {
      result = "black";
    } else if (magnitude < 10 && magnitude >= 8) {
      result = "red";
    } else if (magnitude < 8 && magnitude > 5) {
      result = "yellow";
    } else if (magnitude <= 5) {
      result = "green";
    }
    return result;
  };
  useEffect(() => {
    const fetchEarthquakeData = async () => {
      dispatch(toggleOnLoader());
      try {
        const response = await axios.post(
          "https://halyk-production.up.railway.app/api/v1/earthquake/",
          {
            user_latitude: 43.2567,
            user_longitude: 76.9286,
          }
        );

        setList(response.data);
        dispatch(toggleOffLoader());
      } catch (error) {
        console.error("Error fetching earthquake data:", error);
        throw error;
      }
    };

    fetchEarthquakeData();
  }, []);
<<<<<<< HEAD

  if (isLoading) {
    return <Loader />;
  }
=======
  const sendLocalNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Мое уведомление',
        body: 'Привет, это мое первое уведомление!',
      },
      trigger: null, // Отправляем сразу же, без задержки
    });
  };
>>>>>>> f1947a805420c4dfff45bcbdae832b55b7a678e6

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Землетрясение</Text>
      {list.map((i, index) => (
        <TouchableOpacity key={index} style={styles.buttonContainer}>
<<<<<<< HEAD
          <Text
            style={{
              color: getColorForMagnitude(i.magnitude),
              fontSize: 32,
              fontFamily: Fonts.bold,
            }}
          >
            {i.magnitude}
          </Text>
=======
          <View style={{backgroundColor: getColorForMagnitude(i.magnitude), width:40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 50}}>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontFamily: Fonts.bold,
              }}
            >
              {i.magnitude}
            </Text>
          </View>
>>>>>>> f1947a805420c4dfff45bcbdae832b55b7a678e6
          <View style={styles.col}>
            <Text style={styles.titleText}>{i.location}</Text>
            <Text style={styles.text}>{i.distance_km}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <UnderTab activeId={2} />
    </SafeAreaView>
  );
};

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  title: {
    color: Colors.text_gray,
    textAlign: "center",
    fontFamily: Fonts.semiBold,
    fontSize: 22,
    fontStyle: "normal",
    marginTop: 5,
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 2,
    backgroundColor: Colors.white,
  },
  titleText: {
    color: Colors.text_gray,
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontStyle: "normal",
    marginLeft: 15,
  },
  text: {
    color: Colors.secondary_gray,
    fontFamily: Fonts.medium,
    fontSize: 14,
    fontStyle: "normal",
    marginLeft: 15,
  },
  col: {
    flexDirection: "column",
  },
});
=======
>>>>>>> f1947a805420c4dfff45bcbdae832b55b7a678e6

export default EarthquakeContent;
