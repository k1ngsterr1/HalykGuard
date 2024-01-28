import { View } from "react-native";
import { styles } from "./styles";
import { BackButton } from "shared/ui/BackButton";
import { MainHeading } from "shared/ui/MainHeading";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface UpperTabProps {
  backNavigation: string;
  headingTitle: string;
}

export const UpperTabBack: React.FC<UpperTabProps> = ({
  backNavigation,
  headingTitle,
}) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.backUpperTab}>
      <TouchableOpacity onPress={() => navigation.navigate(backNavigation)}>
        <BackButton backNavigation={backNavigation} />
      </TouchableOpacity>
      <MainHeading title={headingTitle} />
    </View>
  );
};
