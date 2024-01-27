import { View } from "react-native";
import { styles } from "./styles";
import { BackButton } from "shared/ui/BackButton";
import { MainHeading } from "shared/ui/MainHeading";
import { Input } from "shared/ui/Input";

interface UpperTabProps {
  backNavigation: string;
  headingTitle: string;
}

export const UpperTabBack: React.FC<UpperTabProps> = ({
  backNavigation,
  headingTitle,
}) => {
  return (
    <View style={styles.backUpperTab}>
      <BackButton backNavigation={backNavigation} />
      <MainHeading title={headingTitle} />
    </View>
  );
};
