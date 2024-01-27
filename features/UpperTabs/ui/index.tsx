import { View } from "react-native";
import { styles } from "./styles";
import { BackButton } from "shared/ui/BackButton";

interface UpperTabProps {
  backNavigation: string;
}

export const UpperTabBack: React.FC<UpperTabProps> = ({ backNavigation }) => {
  return (
    <View style={styles.backUpperTab}>
      <BackButton backNavigation={backNavigation} />
    </View>
  );
};
