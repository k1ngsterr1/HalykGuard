import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import UnderTab from "features/UnderTab/ui";
import { Fonts } from "shared/styles/theme";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { toggleOffLoader, toggleOnLoader } from "redux/slices/loaderSlice";
import { RootState } from "redux/store";
import { Loader } from "shared/ui/Loader";
import { styles } from "./styles";

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Землетрясение</Text>
      {list.map((i, index) => (
        <TouchableOpacity key={index} style={styles.buttonContainer}>
          <View
            style={{
              backgroundColor: getColorForMagnitude(i.magnitude),
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            }}
          >
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

export default EarthquakeContent;
